import {atom} from 'recoil';

export const userSate = atom({
  key: 'userState',
  default: {
    fisrt_name: 'Narek',
    last_name: 'Avanesyan',
  },
});
