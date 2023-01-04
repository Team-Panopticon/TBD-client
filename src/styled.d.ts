// import original module declarations
import 'styled-components';
type TToken<T> = {
  [key in T]: string;
};

type TKey = 'default';
type TKeyLight = 'light';
type TKeyDeep = 'deep';
type TKeyLightDeep = TKey | TKeyLight | TKeyDeep;
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: TToken<TKeyLightDeep>;
      secondary: TToken<TKey>;
    };
  }
}
