import React from 'react'

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';
const Experience = () =>  (

     
    <Section id ="exp">
    <SectionDivider/>
    <br/>
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
       Tata Consultancy Services
      </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Assistant System Enginner
          </ListTitle>
          <ListParagraph>
            1. SAP Consultant <br/>
              Technology : LINUX <br/> 
            2. SAP Developer <br/>
                Technology : Node Js, Express Js, Hana Db
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
    </List>

</Section>
    
  );
  
  export default Experience;