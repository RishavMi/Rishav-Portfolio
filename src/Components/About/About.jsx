import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.background} 0%, ${theme.card} 100%)`};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at top left, ${({ theme }) => theme.accent}33, transparent 70%);
    top: -100px;
    left: -100px;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle at bottom right, ${({ theme }) => theme.accent}22, transparent 80%);
    bottom: -150px;
    right: -150px;
    transform: rotate(-30deg);
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  position: relative;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.accent};
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SubTitle = styled.p`
  font-size:18px;
  margin: 0 0 64px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  line-height: 1.5;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 48px;
  width: 100%;
  max-width: 1300px;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 24px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;

  width: 10px;
  height: 64px;
  background: ${({ theme }) => theme.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  animation: ${float} 6s ease-in-out infinite;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;

  li {
    position: relative;
    padding-left: 24px;
    font-size: 15px;

    &::before {
      content: '✔';
      position: absolute;
      left: 0;
      top: 2px;
      color: ${({ theme }) => theme.accent};
      font-size: 14px;
    }
  }
`;

const About = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Smooth Project Delivery',
      points: [
        'Keep your project on track, start to finish',
        'Remove obstacles before they become problems',
        "Clear updates so you always know what’s next",
      ],
    },
    {
      icon: '🔄',
      title: 'Workflow Automation',
      points: [
        'Automate repetitive tasks and save hours each week',
        'Design systems tailored to your workflow',
        'Enable your team to focus on what matters',
      ],
    },
    {
      icon: '🌐',
      title: 'No-Code Development',
      points: [
        'Launch websites, dashboards, and tools fast',
        'Build MVPs without big budgets or delays',
        'Scale or update easily as needs grow',
      ],
    },
    {
      icon: '🤖',
      title: 'AI & Smart Tools',
      points: [
        'Integrate AI for better decisions and faster support',
        'Custom chatbots, automation, and data solutions',
        'Stay ahead with the latest tech—no jargon',
      ],
    },
    {
      icon: '🤝',
      title: 'A True Partner',
      points: [
        "I care about your goals, not just the project",
        'Easy communication—ask me anything anytime',
        'Solutions tailored to your business, not one-size-fits-all',
      ],
    },
  ];

  return (
    <Container id="services">
      <Title>My Services</Title>
      <SubTitle>
        I help businesses succeed with professional project delivery,
        automation, and lasting partnership.
      </SubTitle>
      <ServicesGrid>
        {services.map(({ icon, title, points }) => (
          <ServiceCard key={title}>
            <IconWrapper>{icon}</IconWrapper>
            <Content>
              <ServiceTitle>{title}</ServiceTitle>
              <ServiceList>
                {points.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ServiceList>
            </Content>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default About;
