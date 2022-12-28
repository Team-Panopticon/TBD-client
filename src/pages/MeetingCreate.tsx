import { Contents, Footer, Header, Page } from './styled';
import { Input, Typography } from 'antd';
import { InputContainer, InputLabel } from '../components/pages/MeetingCreate/styled';

export function MeetingCreate() {
  return (
    <Page>
      <Header>Header Area</Header>
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
