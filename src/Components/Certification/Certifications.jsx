// Certifications.js
import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  CardGrid,
  Card,
  Logo,
  Info,
  CertTitle,
  Issuer,
  Meta,
  MetaLabel,
  MetaText,
  CourseList,
  CourseItem,
  ViewButton,
} from './CertificationsStyles';
import { certifications } from '../../Data/DataConstants';

const Certifications = () => (
  <Container id="certifications">
    <Wrapper>
      <Title>Certifications</Title>
      <CardGrid>
        {certifications.map((cert) => (
          <Card key={cert.title}>
            <Logo src={cert.logo} alt={`${cert.issuer} logo`} />
            <Info>
              <CertTitle>{cert.title}</CertTitle>
              <Issuer>{cert.issuer}</Issuer>
              <Meta>
                <MetaLabel>Completed by:</MetaLabel>
                <MetaText>{cert.completedBy}</MetaText>
              </Meta>
              <Meta>
                <MetaLabel>Date:</MetaLabel>
                <MetaText>{cert.date}</MetaText>
              </Meta>
              <Meta>
                <MetaLabel>Duration:</MetaLabel>
                <MetaText>{cert.duration}</MetaText>
              </Meta>
              <CourseList>
                {cert.courses.map((course) => (
                  <CourseItem key={course}>{course}</CourseItem>
                ))}
              </CourseList>
              <ViewButton href={cert.link} target="_blank" rel="noopener noreferrer">
                View All Certificates
              </ViewButton>
            </Info>
          </Card>
        ))}
      </CardGrid>
    </Wrapper>
  </Container>
);

export default Certifications;

