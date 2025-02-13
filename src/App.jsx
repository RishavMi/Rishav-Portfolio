import { BrowserRouter, Routes } from "react-router-dom"
import NavBar from "./Components/Navbar/NavBar"
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./Utils/Themes";
import Banner from "./Components/Banner/Banner";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import Projects from "./Components/Projects/Project";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Banner />
          <Wrapper>
            <About />
            {/* <Skills /> */}
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Experience />
          </Wrapper>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>

          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        <Routes>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
