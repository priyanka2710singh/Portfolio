import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin , AiFillCode} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>

      <Div1>
        <Link href="/">
          <a style ={{ display :"flex", alignItems:"center",color:"white" , marginBottom:"20px"}}>
            <DiCssdeck size = "3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>

     <Div2>
        <li>
          <Link href= "#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href= "#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href= "#edu">
            <NavLink>Education</NavLink>
          </Link>
        </li>
        <li>
          <Link href= "#exp">
            <NavLink>Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href= "#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
     </Div2>

     <Div3>
       
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
       
 


     </Div3>

    </Container>
  </div>
);

export default Header;
