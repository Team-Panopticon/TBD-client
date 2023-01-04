import { Contents, Footer, Header, HeaderContainer, Page, PageTitle } from './styled';
import { Input, Typography } from 'antd';
import { InputContainer, InputLabel } from '../components/pages/MeetingCreate/styled';
import { useRecoilState } from 'recoil';
import { createMeetingState } from '../stores/createMeeting';

export function MeetingCreate() {
  const [meeting, setMeeting] = useRecoilState(createMeetingState);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeeting({
      ...meeting,
      name: event.target.value,
    });
  };

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
            <Input
              id="name"
              allowClear
              style={{ borderRadius: 0 }}
              onChange={handleNameChange}
              placeholder="한사랑산악회 신년 모임"
            />
          </div>
        </InputContainer>
      </Contents>
      <Footer>Footer Area</Footer>
    </Page>
  );
}
