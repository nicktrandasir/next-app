import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from "next/app";

export const theme = {
  darkGrey: `#303030`,
  darkGrey1: `#393939`,
  darkGrey2: `#616161`,
  grey: `#707070`,
  lightGrey: `#9C9C9C`,
  lightestGrey: `#D1D1D1`,
  lightestGrey1: `#F6F6F6`,
  white: "#FFFFFF",
  lightBlue: "#F5FBFF",
  darkRed: `#C60E2E`,
  red: `#E4163A`,
  lightRed: `#FF5761`,
  lightestRed: `#FF768E`,
  blue: `#344472`,
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${theme.lightGrey};
  }
`

export default function App({ Component, pageProps } : AppProps) {
  return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )
}