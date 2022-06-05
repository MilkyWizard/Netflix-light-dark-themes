import './App.css';
import Header from './Header.js';
import MainPoster from './MainPoster';
import Feed from './Feed';
import Footer from "./Footer";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes.js';
import { GlobalStyles } from './Global.js';
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles/>
          <div class='wrapper'>
          <button class='theme-toggle' onClick={toggleTheme}>
              {theme === 'light' ? '☀️ Light theme' : '🌛 Dark theme'}
          </button>
          <Header/>
          <MainPoster/>
          <Feed/>
          <Footer/>
          </div>
      </ThemeProvider>
  );
}

export default App;
