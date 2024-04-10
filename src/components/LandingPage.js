// LandingPage.js

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, styled, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '80px',
  marginBottom : '60px',
});

async function fetchChapterNames() {
  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/javvadqamar/Quranchapternames@main/chapters.json");
    const data = await response.json();
    const quranData = data.quran;
    return quranData;
  } catch (error) {
    console.error("Error fetching chapter names:", error);
    return [];
  }
}

const LandingPage = () => {
  const [chapterNames, setChapterNames] = useState([]);

  useEffect(() => {
    // Call the function when the component mounts
    const fetchData = async () => {
      const names = await fetchChapterNames();
      setChapterNames(names);
    };

    fetchData();
  }, []);

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Roman Urdu Quran
      </Typography>
      <Typography variant="h8" paragraph>
        Translation : Abul Aala Maududi
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {chapterNames.map((chapter, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Link
                component={RouterLink}
                to={`/chapters/${index + 1}`}
                color="inherit"
                underline="hover"
                sx={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: '5px', backgroundColor: '#f5f5f5' }}
              >
                {index + 1}. {chapter.arabic_name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default LandingPage;
