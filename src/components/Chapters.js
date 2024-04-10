// Chapters.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Chapters = () => {
  const { chapterId } = useParams();
  const [verses, setVerses] = useState([]);
  const [chapterName, setChapterName] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chapter names from the provided link
        const response = await fetch("https://cdn.jsdelivr.net/gh/javvadqamar/Quranchapternames@main/chapters.json");
        const data = await response.json();

        // Find the chapter name based on chapterId
        const chapterInfo = data.quran.find((chapter) => chapter.chapter === parseInt(chapterId, 10));

        if (chapterInfo) {
          setChapterName(chapterInfo.chapter +". Surah " +chapterInfo.arabic_name);
        }

        // Fetch verses data
        const responseVerses = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/urd-abulaalamaududi-la.json"
        );
        const dataVerses = await responseVerses.json();
        const quranDataVerses = dataVerses.quran;

        // Filter verses for the selected chapter
        const chapterVerses = quranDataVerses.filter((verse) => verse.chapter === parseInt(chapterId, 10));

        // Map verse data
        const verseTexts = chapterVerses.map((verse) => ({
          number: verse.verse,
          text: verse.text,
        }));

        // Set state variables
        setVerses(verseTexts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [chapterId]);

  return (
    <div style={{ textAlign: 'justify', marginTop: '80px', marginBottom: '60px' }}>
      <h4 style={{ color: '#006633', marginBottom: '10px', textAlign: 'center' }}>{chapterName}</h4>

      {/* Render verses in a book-like layout */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {verses.map((verse, index) => (
          <div
            key={index}
            style={{
              width: '100%', // Set a fixed width for uniform boxes
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '4px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              backgroundColor: '#f2f2f2',
            }}
          >
            <p style={{ color: '#000', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
              {verse.number}. {verse.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
