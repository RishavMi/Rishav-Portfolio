import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const SkillSection = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillItem = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const About = () => {
  const businessDevelopmentSkills = [
    {
      title: 'Project Mannagement',
      skills: [
        'Agile, Scrum, Waterfall',
        'Risk assessment and mitigation',
        'Jira, Asana, MS Project tools',
      ],
    },
    {
      title: 'Bussiness Development',
      skills: [
        'Market Analysis and prospecting',
        'Sales funnel optimization',
        'CRM Tools Salesforce, Apollo.io',
      ],
    },
    {
      title: 'Client Relationship Management',
      skills: [
        'Client needs assessment',
        'Feedback - driven improvement',
        'Proactive issue resolution',
      ],
    },
    {
      title: 'Straegic Planning & Analytics',
      skills: [
        'KPI monitoring and reporting',
        'Google Analytics expertise',
        'Market trend analysis',
      ],
    },
  ];

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Project Management Skills</Title>
        <Desc>
          These are the core skills I bring as a Project Manager, helping companies grow by identifying new opportunities and building strong client relationships.
        </Desc>
        <SkillsContainer>
          {businessDevelopmentSkills.map((section) => (
            <SkillSection key={section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionContent>
                {section.skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </SectionContent>
            </SkillSection>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
