import {createContext} from 'react';

interface DefaultValue {
  user: {[key: string]: string | number};
  setUserData: (user: any) => void;
}

export const defaultValue: DefaultValue = {
  user: {},
  setUserData(user) {
    this.user = {...this.user, ...user};
  },
};

export const AuthContext = createContext(defaultValue);
export const AuthContextProvider = AuthContext.Provider;
