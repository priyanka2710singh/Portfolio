import React from 'react';
import { DiCode, DiDocker, DiGit, DiHtml53DEffects,  DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked on the wide range of technologies.
      </SectionText>

      <List>
      <ListItem>
          <DiTerminal size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Languages
            </ListTitle>
            <ListParagraph>
              Java | JavaScipt | Python
            </ListParagraph>
          </ListContainer>
        </ListItem>

      <ListItem>
          <DiCode size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Concepts
            </ListTitle>
            <ListParagraph>
              Data Structures and Algorithms | SDLC | OOps Concept | OS | DBMS | Networking | System Design
            </ListParagraph>
          </ListContainer>
        </ListItem>
       
        <ListItem>
          <DiHtml53DEffects size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Web Devlopment
            </ListTitle>
            <ListParagraph>
              React Js | Node Js | Express Js | Mongo Db | HTML | CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDocker size =  "3rem" />
          <ListContainer>
            <ListTitle>
              DevOps
            </ListTitle>
            <ListParagraph>
             Docker | Kubernetes | CI/CD 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiGit size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Tools
            </ListTitle>
            <ListParagraph>
            Git | Postman | Jypyter Lab | Visual Studio
            </ListParagraph>
          </ListContainer>
        </ListItem>
       
      </List>

  </Section>
  
);

export default Technologies;
