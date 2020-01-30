import styled from 'styled-components';

import MainLayout from '../layouts/MainLayout';

import PersonalStory from '../components/PersonalStory';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Skills from '../components/Skills';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/FormComponents/ContactForm';

const PageTemplate = styled.section`
  position: relative;

  display: flex;
  min-height: 100%;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PageHolder = styled.section`
  position: relative;
  margin: 1rem 1.2rem;

  padding-bottom: 60px;
`;

const Slogan = styled.div`
  position: relative;

  display: block;
  margin: 10px 0 10px;
  font-size: 2rem;
  font-weight: bold;
`;

const Page = () => (
  <PageTemplate>
    <Sidebar />

    <PageHolder>
      <ContactForm />
      <Slogan>Dear Guest,</Slogan>
      <PersonalStory />
      <OpenSourceProjects />
      <Skills />
    </PageHolder>
  </PageTemplate>
);

export default MainLayout(Page);
