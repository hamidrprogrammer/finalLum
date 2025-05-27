import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import footerImage from './footer.png'; // adjust path as needed

const FooterContainer = styled.div`
  background-image: url(${footerImage});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  height: 860px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
 
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    background: linear-gradient(45deg,rgb(255, 255, 255),rgb(255, 255, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00e0ff;
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00a0ff;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCopyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00e0ff;
    }
  }
`;

const BackgroundLogo = styled.div`
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  opacity: 0.03;
  background-image: url('/images/logo-large.png');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
`;

interface FooterProps {}

const FooterMain: React.FC<FooterProps> = () => {
  const socialIconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  
  return (
    <FooterContainer>
      {/* <BackgroundLogo /> */}
      
      <FooterContent>
        <FooterTop>
          {/* <FooterColumn>
          
            <FooterSocial>
              <SocialIcon 
                href="#" 
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-instagram"></i>
              </SocialIcon>
            </FooterSocial>
          </FooterColumn> */}
          
          <FooterColumn>
            <FooterTitle>Products</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Hydrogen Water Bottle</a></FooterLink>
              <FooterLink><a href="#">Hydrogen Tablets</a></FooterLink>
              <FooterLink><a href="#">Accessories</a></FooterLink>
              <FooterLink><a href="#">Gift Cards</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">About Us</a></FooterLink>
              <FooterLink><a href="#">Our Science</a></FooterLink>
              <FooterLink><a href="#">Careers</a></FooterLink>
              <FooterLink><a href="#">Press</a></FooterLink>
              <FooterLink><a href="#">Contact</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">FAQs</a></FooterLink>
              <FooterLink><a href="#">Shipping & Returns</a></FooterLink>
              <FooterLink><a href="#">Warranty</a></FooterLink>
              <FooterLink><a href="#">Product Care</a></FooterLink>
              <FooterLink><a href="#">Help Center</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <FooterCopyright>
            © {new Date().getFullYear()} LumiVitae. All rights reserved.
          </FooterCopyright>
          
          <FooterBottomLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterMain;


