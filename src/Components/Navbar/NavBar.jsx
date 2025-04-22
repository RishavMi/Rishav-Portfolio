import { ButtonContainer, MobileIcon, MobileLink, MobileMenu, Nav, NavbarContainer, NavItems, NavLink, NavLogo, Span } from "./NaBarStyle"
import { FaBars } from "react-icons/fa"
import { useState } from "react";
import logo from "../../assets/Idika.png"
// import { useTheme } from "styled-components";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            {/* <DiCssdeck size="3rem" /> */}
            <img src={logo} alt="logo" style={{ "width": "40px" }} />
            <Span>ishav Mishra</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#certifications'>Certifications</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          {/* <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            {/* <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar