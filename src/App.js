// App.js
//'#049cac'
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MyComponent from './components/MyComponent';
import AnotherComponent from './components/AnotherComponent';
import Footer from './components/Footer';
import Chapters from './components/Chapters';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/random-verse" component={MyComponent} />
              <Route path="/search-by-key" component={AnotherComponent} />
              <Route path="/chapters/:chapterId" component={Chapters} />
              {/* Add more routes as needed */}
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
