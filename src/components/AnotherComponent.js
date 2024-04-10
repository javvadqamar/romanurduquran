// AnotherComponent.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Box } from '@mui/material';

async function fetchQuranVerses() {
  const apiUrl =
    'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/urd-abulaalamaududi-la.json';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.quran;
  } catch (error) {
    console.error('Error fetching Quranic verses:', error);
    return [];
  }
}

// Function to get a specific verse
function getQuranVerse(data, chapterNumber, verseNumber) {
  const verse = data.find((verse) => verse.chapter === chapterNumber && verse.verse === verseNumber);
  return verse ? verse.text : 'Verse not found';
}

const AnotherComponent = () => {
  const [chapterInput, setChapterInput] = useState('');
  const [verseInput, setVerseInput] = useState('');
  const [selectedVerse, setSelectedVerse] = useState('');

  // Function to handle button click and display the selected verse
  const showSelectedVerse = async () => {
    if (!chapterInput || !verseInput) {
      alert('Please enter both chapter and verse numbers.');
      return;
    }

    const chapter = parseInt(chapterInput, 10);
    const verse = parseInt(verseInput, 10);

    const quranData = await fetchQuranVerses();
    const verseText = getQuranVerse(quranData, chapter, verse);

    setSelectedVerse(`Chapter ${chapter}, Verse ${verse}: ${verseText}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper style={{ padding: 16, width: '80%' }}>
        
        <TextField
          id="chapterInput"
          label="Chapter"
          variant="outlined"
          type="number"
          value={chapterInput}
          onChange={(e) => setChapterInput(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="verseInput"
          label="Verse"
          variant="outlined"
          type="number"
          value={verseInput}
          onChange={(e) => setVerseInput(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={showSelectedVerse}
          fullWidth
          sx={{ marginTop: 2, backgroundColor: '#049cac' }}
        >
          Show Selected Verse
        </Button>
        <Typography variant="body1" style={{ marginTop: 16, textAlign: 'center' }}>
         <strong>{selectedVerse}</strong> 
        </Typography>
      </Paper>
    </Box>
  );
};

export default AnotherComponent;
