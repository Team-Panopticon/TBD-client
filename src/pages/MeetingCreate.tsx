import { Contents, Footer, Header, HeaderContainer, Page, PageTitle } from './styled';
import { Input, Typography } from 'antd';
import { InputContainer, InputLabel } from '../components/pages/MeetingCreate/styled';

export function MeetingCreate() {
  return (
    <Page>
      <Header>
        <HeaderContainer>
          <div style={{ backgroundColor: 'aquamarine' }}>progress bar area</div>
          <PageTitle>모임의 이름이 무엇인가요?</PageTitle>
        </HeaderContainer>
      </Header>
      <Contents>
        <InputContainer>
          <div>
            <InputLabel htmlFor="name">
              <Typography>모임 이름</Typography>
            </InputLabel>
            <Input id="name" allowClear style={{ borderRadius: 0 }} />
          </div>
        </InputContainer>
      </Contents>
      <Footer>Footer Area</Footer>
    </Page>
  );
}
