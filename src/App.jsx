import { useState } from 'react'
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
    {currentTab === TAB_OPTIONS.WELCOME && (

    <Welcome/>
    )}
    {currentTab === TAB_OPTIONS.ABOUT && (

    <AboutMe />
    )}
    {currentTab === TAB_OPTIONS.PROJECTS && (

    <Projects />
    )}
  </>
 )
}

