import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colorPrimary: string;
    colorSecondary: string;
    colorTerciary: string;
    colorLightSecondary: string;
    headerHeight: string;
  }
}
