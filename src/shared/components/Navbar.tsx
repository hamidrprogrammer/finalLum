import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// import Man from "./imageMan.png";
import { MenuVivid } from './MenuVivid/MenuVivid';
import { Menu } from 'lucide-react';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: ${props => props.scrolled ? 'rgba(0, 20, 30, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  
  span {
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
    transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavIcon = styled(motion.div)`
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  
  &:hover {
    color: #00e0ff;
  }
`;

const MobileMenuButton = styled(motion.div)`
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: rgba(0, 20, 30, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  gap: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

interface NavbarProps {
  scrolled?: boolean;
  mobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
}
const MenuWrapper = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 1100;
  width: 300px;
`;


const ManIcon = styled.img`
  width: 20px;
  height: 20px;
  resize: cover;
  cursor: pointer;
`;
const Navbar: React.FC<NavbarProps> = ({ 
  scrolled: propScrolled, 
  mobileMenuOpen: propMobileMenuOpen, 
  toggleMobileMenu: propToggleMobileMenu 
}) => {
  const [scrolled, setScrolled] = useState(propScrolled || false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(propMobileMenuOpen || false);
   const toggleMenu = () => {
     setIsOpen(!isOpen)
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = propToggleMobileMenu || (() => {
    setMobileMenuOpen(!mobileMenuOpen);
  });
    const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LUMI<span>VITAE</span>
        </Logo>
        
        <NavLinks>
          <NavLink 
            to="/Bottle"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Bottle
          </NavLink>
          <NavLink 
            to="/Tablete"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tablete
          </NavLink>
          <NavLink 
            to="/products"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Products
          </NavLink>
          <NavLink 
            to="/science"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Science
          </NavLink>
          <NavLink 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contact
          </NavLink>
        </NavLinks>
        
        <NavIcons>
          <NavIcon
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i className="fas fa-search"></i>
          </NavIcon>
          <NavIcon
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i className="fas fa-user"></i>
          </NavIcon>
          <NavIcon
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i className="fas fa-shopping-cart"></i>
          </NavIcon>
          
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </MobileMenuButton>
        </NavIcons>
               <NavIcons>
          {/* <ManIcon src={Man} alt="User Icon" onClick={toggleMenu} /> */}
        </NavIcons>

      </NavContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <MobileNavLink 
              to="/"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              to="/about"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              About
            </MobileNavLink>
            <MobileNavLink 
              to="/products"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Products
            </MobileNavLink>
            <MobileNavLink 
              to="/science"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Science
            </MobileNavLink>
            <MobileNavLink 
              to="/contact"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
       <AnimatePresence>
        {isOpen && (
          <>
            {/* بک‌دراپ */}
            

            {/* منوی خودت */}
            <motion.div
              className="fixed top-4 right-4 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
             <MenuVivid  toggleMenu={()=>{setIsOpen(false)}}/>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    
      
      
    </>
  );
};

export default Navbar;
