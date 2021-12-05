import React from 'react';
import { DiFirebase, DiReact, DiTechcrunch, DiTerminal, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked on the wide range of technologies
      </SectionText>

      <List>
        <ListItem>
          <DiReact size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Front- End
            </ListTitle>
            <ListParagraph>
              Experince with <br/>
              React APP
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size =  "3rem" />
          <ListContainer>
            <ListTitle>
              Backend- End
            </ListTitle>
            <ListParagraph>
              Experince with <br/>
              Node js and databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiTerminal size =  "3rem" />
          <ListContainer>
            <ListTitle>
              DevOps
            </ListTitle>
            <ListParagraph>
              Experince with <br/>
              DevOps
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>

  </Section>
  
);

export default Technologies;
