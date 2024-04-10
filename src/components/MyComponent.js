// MyComponent.js
import React, { useState } from 'react';
import { Button, Typography, Paper, Box, useMediaQuery } from '@mui/material';

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

const MyComponent = () => {
  const [verseOutput, setVerseOutput] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  // Function to handle button click and display a random verse from a random chapter
  const showRandomVerse = async () => {
    const quranData = await fetchQuranVerses();

    // Get a random chapter and verse number
    const randomChapter = Math.floor(Math.random() * quranData[quranData.length - 1].chapter) + 1;

    // Find the total number of verses in the random chapter
    const versesInRandomChapter = quranData.filter((verse) => verse.chapter === randomChapter);

    if (versesInRandomChapter.length === 0) {
      alert('No verses found in the selected chapter.');
      return;
    }

    const randomVerseIndex = Math.floor(Math.random() * versesInRandomChapter.length);
    const randomVerse = versesInRandomChapter[randomVerseIndex];

    setVerseOutput(
      `Chapter ${randomVerse.chapter}, Verse ${randomVerse.verse}: ${randomVerse.text}`
    );
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
      <Paper style={{ padding: 16, width: '80%', margin: 'auto' }}>
        
        <div  style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={showRandomVerse}
          fullWidth
          sx={{
            width: isMobile ? '100%' : '30%',
            backgroundColor: '#049cac',
            marginBottom: '20px',
            marginTop: '20px'
          }}
        >
          Show Random Verse
        </Button>
        </div>
        <Typography variant="body1" style={{ marginTop: 16, textAlign: 'center' }}>
          <strong>{verseOutput}</strong>
        </Typography>
        {/* Add your component content here */}
      </Paper>
    </Box>
  );
};

export default MyComponent;
