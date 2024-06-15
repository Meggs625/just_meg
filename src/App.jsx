import { useState } from 'react';
import "./styles/slick.css";
import "./styles/slick-theme.css";
import styles from './App.module.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import TAB_OPTIONS from './enums/tabOptions';
import Welcome from './components/Welcome/Welcome';


export default function App() {

  const [currentTab, setCurrentTab] = useState(TAB_OPTIONS.ABOUT)

  function changeTab(selectedTab) {
    setCurrentTab(TAB_OPTIONS[selectedTab])
  }

 return (
  <>
    <Header currentTab={currentTab} changeTab={changeTab}></Header>

    <Welcome/>

    <AboutMe />

    <Projects />
  </>
 )
}

