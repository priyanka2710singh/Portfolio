import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = "tel : +91 9574751489">+91 9574751489</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = "mail to : priyanka2724singh@gmail.com">priyanka2724singh@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's change the world. </Slogan>
         
        </CompanyContainer>
        <SocialContainer>

        <SocialIcons href="https://github.com/priyanka2710singh">
         <AiFillGithub size="3rem" />
       </SocialIcons>

       <SocialIcons href="https://www.linkedin.com/in/priyanka27">
         <AiFillLinkedin size="3rem" />
       </SocialIcons>

       <SocialIcons href="https://www.instagram.com/i.pihu.i">
         <AiFillInstagram size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://leetcode.com/Singh_priyanka/">
         <AiFillCode size="3rem" />
       </SocialIcons>
       
       </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
