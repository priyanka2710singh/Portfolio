import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there,<br />
        I'm Priyanka Singh

      </SectionTitle>
      <SectionText>
        I am Building Mern stack Projects
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More...</Button>
    </LeftSection>

  </Section>
);

export default Hero;