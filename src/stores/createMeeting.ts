import { atom } from "recoil";

export enum MeetingType {
  date,
  meal,
}
export enum MealType {
  lunch,
  dinner,
}
export enum MeetingStatus {
  inProgress,
  done,
}

export interface CreateMeetingState {
  name: string;
  /** 투표 가능 날짜, ISO date string with timezone */
  dates: string[];
  type: MeetingType;
  /** ISO date string with timezone */
  deadline: string | null;
  status: MeetingStatus;
  password: string;
}

export const initialState: CreateMeetingState = {
  name: "",
  dates: [],
  type: MeetingType.date,
  deadline: "",
  status: MeetingStatus.inProgress,
  password: "",
};

export const createMeetingState = atom<CreateMeetingState>({
  key: "createMeeting",
  default: initialState,
});
