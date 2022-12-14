import { atom, DefaultValue, selector } from 'recoil';

export type voteType = 'data' | 'meal' | null;
export interface IVoteState {
  id: string;
  name: string;
  dates: string[]; // ISO date string with timezone
  type: voteType;
  deadline: string; // ISO date string with timezone
}

export const initialState: IVoteState = {
  id: '',
  name: '',
  dates: [], // ISO date string with timezone
  type: null,
  deadline: '',
};

export const voteState = atom<IVoteState>({
  key: 'voteState',
  default: initialState,
});

export const voteIdSelector = selector<IVoteState['name']>({
  key: 'voteIdSelector',
  get: ({ get }) => {
    const { name } = get(voteState);
    return name;
  },
  set: ({ get, set }, newVal) => {
    const { name, ...rest } = get(voteState);
    set(voteState, {
      ...rest,
      name: newVal instanceof DefaultValue ? name : newVal,
    });
  },
});
