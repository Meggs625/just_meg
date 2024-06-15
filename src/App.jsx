import { useState } from 'react';
import "./styles/slick.css";
import "./styles/slick-theme.css";
import styles from './App.module.css';
import Header from './components/Header/Header';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import TAB_OPTIONS from './enums/tabOptions';
import Welcome from './views/Welcome/Welcome';
import ViewContainer from './components/ViewContainer/ViewContainer';
import WorkHistory from './views/WorkHistory/WorkHistory';


export default function App() {

  const [currentTab, setCurrentTab] = useState(TAB_OPTIONS.ABOUT)

  function changeTab(selectedTab) {
    setCurrentTab(TAB_OPTIONS[selectedTab])
  }

 return (
  <>
    <Header currentTab={currentTab} changeTab={changeTab}></Header>

    <ViewContainer><Welcome/></ViewContainer>
    <ViewContainer><AboutMe/></ViewContainer>
    <ViewContainer><Projects/></ViewContainer>
    <ViewContainer><WorkHistory/></ViewContainer>

  </>
 )
}

