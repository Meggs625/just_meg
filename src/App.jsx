import { useState } from 'react'
import styles from './App.module.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

export default function App() {
 return (
  <>
    <Header></Header>
    <AboutMe />
    <Projects />
  </>
 )
}

