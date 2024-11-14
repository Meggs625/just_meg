import { useContext, useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import TAB_OPTIONS from "../../enums/tabOptions";
import Welcome from "../Welcome/Welcome";
import ViewContainer from "../../components/ViewContainer/ViewContainer";
import WorkHistory from "../WorkHistory/WorkHistory";
import { ThemeContext } from "../../context/ThemeProvider";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(null);
  const { theme } = useContext(ThemeContext);

  const welcomeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const historyRef = useRef();

  useEffect(() => {
    function updateActiveTab() {
      let allRefs = [welcomeRef, aboutRef, projectRef, historyRef];
      let scrollY = Math.trunc(window.scrollY);

      allRefs.forEach((elmRef, index) => {
        const sectionHeight = elmRef.current.offsetHeight;
        const sectionTop = Math.trunc(
          elmRef.current.getBoundingClientRect().top + window.scrollY - 75
        );

        if (
          (scrollY === sectionTop || scrollY === sectionTop + 1) &&
          scrollY <= sectionTop + sectionHeight
        ) {
          const activeElm = Object.keys(TAB_OPTIONS)[index];
          setActiveTab(TAB_OPTIONS[activeElm]);
        } else return;
      });
    }
    updateActiveTab();
    window.addEventListener("scrollend", updateActiveTab);

    return () => window.removeEventListener("scrollend", updateActiveTab);
  }, []);

  function handleScrollChange(e, id) {
    e.preventDefault();
    if (id === "ABOUT") {
      aboutRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      setActiveTab(TAB_OPTIONS.ABOUT);
    } else if (id === "PROJECTS") {
      projectRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      setActiveTab(TAB_OPTIONS.PROJECTS);
    } else if (id === "WELCOME") {
      welcomeRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      setActiveTab(TAB_OPTIONS.WELCOME);
    } else if (id === "HISTORY") {
      historyRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      setActiveTab(TAB_OPTIONS.HISTORY);
    }
  }

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <section theme-mode={theme || "light"}>
      <Header
        handleScrollChange={handleScrollChange}
        activeTab={activeTab}
      ></Header>

      <ViewContainer
        key={TAB_OPTIONS.WELCOME}
        changeActiveTab={changeActiveTab}
        id={TAB_OPTIONS.WELCOME}
        ref={welcomeRef}
      >
        <Welcome />
      </ViewContainer>
      <ViewContainer
        key={TAB_OPTIONS.ABOUT}
        changeActiveTab={changeActiveTab}
        id={TAB_OPTIONS.ABOUT}
        ref={aboutRef}
      >
        <AboutMe />
      </ViewContainer>
      <ViewContainer
        key={TAB_OPTIONS.PROJECTS}
        changeActiveTab={changeActiveTab}
        id={TAB_OPTIONS.PROJECTS}
        ref={projectRef}
      >
        <Projects />
      </ViewContainer>
      <ViewContainer
        key={TAB_OPTIONS.HISTORY}
        changeActiveTab={changeActiveTab}
        id={TAB_OPTIONS.HISTORY}
        ref={historyRef}
      >
        <WorkHistory />
      </ViewContainer>
    </section>
  );
}
