
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Education/EducationStyles';

const Education = () =>  (

    <Section id ="edu">
      <SectionDivider/>
      <br/>
      <SectionTitle>Education</SectionTitle>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>
              B.E | Information Technology
            </ListTitle>
            <ListParagraph>
              Laxmi Institute of Technology | 2016 - 2020 <br/>
              CGPA : 9.20
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <ListContainer>
            <ListTitle>
              Class 12th
            </ListTitle>
            <ListParagraph>
            Upasana Lions English Medium School | 2016 <br/>
            Percentage : 65%
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <ListContainer>
            <ListTitle>
              Class 10th 
            </ListTitle>
            <ListParagraph>
            Sardar Vallabhbhai Patel High School | 2014 <br/>
            percentage : 85%
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>

  </Section>
  );
  
  export default Education;
