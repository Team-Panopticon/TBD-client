import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 104px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 1;
`;

export const Footer = styled.footer`
  height: 56px;
`;
