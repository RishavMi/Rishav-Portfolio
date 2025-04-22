// CertificationsStyles.js
import styled from 'styled-components';
import _default from '../../Theme/Default';

export const Container = styled.section`
  padding: 80px 30px;
  background: ${({ theme }) => theme.background_light};
  @media (max-width: 960px) { padding: 60px 16px; }
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  @media (max-width: 640px) { font-size: 32px; }
`;

export const CardGrid = styled.div`
  ${'' /* display: block; */}
  ${'' /* margin: auto; */}
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */}
  gap: 24px;
  width: 100%;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.card_light};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover { transform: translateY(-4px); }
`;

export const Logo = styled.img`
  width: 100%;
  ${'' /* max-height: 120px; */}
  object-fit: contain;
  background: ${({ theme }) => theme.background_light};
  padding: 16px;
`;

export const Info = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CertTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const Issuer = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

export const MetaLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const MetaText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
`;

export const CourseList = styled.ul`
  list-style: disc inside;
  margin: 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const CourseItem = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ViewButton = styled.a`
  align-self: center;
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
`;

// DataConstants.js snippet

