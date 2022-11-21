export const theme = Object.freeze({
  colors: {
    clPrimary: "#14C6B3",
    bgPrimary: "#0e121a",
    clAccent: "#ff7b1a",
  },
  boxsh: {
    boxsh: `rgba(255, 255, 255, 0.09) 0px 2px 1px,
        rgba(255, 255, 255, 0.09) 0px 4px 2px,
        rgba(221, 219, 219, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px
        `,
    boxshpr: `rgba(255, 255, 255, 0.07) 0px 1px 2px,
        rgba(255, 255, 255, 0.07) 0px 2px 4px,
        rgba(255, 255, 255, 0.07) 0px 4px 8px,
        rgba(255, 255, 255, 0.07) 0px 8px 16px,
        rgba(0, 247, 255, 0.4) 0px 10px 22px,
        rgba(255, 255, 255, 0.07) 0px 32px 64px`,
  },
  transition: {
    tr: "transform 100ms ease-in-out",
  },
});

//!styled info  https://emotion.sh/docs/theming
// import { ThemeProvider } from '@emotion/react'
// import styled from '@emotion/styled'

// const theme = {
//   colors: {
//     primary: 'hotpink'
//   }
// }

// const SomeText = styled.div`
//   color: ${props => props.theme.colors.primary};
// `

// render(
//   <ThemeProvider theme={theme}>
//     <SomeText>some text</SomeText>
//   </ThemeProvider>
// )

// //!useTheme hook
// import { ThemeProvider, useTheme } from '@emotion/react'

// const theme = {
//   colors: {
//     primary: 'hotpink'
//   }
// }

// function SomeText(props) {
//   const theme = useTheme()
//   return <div css={{ color: theme.colors.primary }} {...props} />
// }

// render(
//   <ThemeProvider theme={theme}>
//     <SomeText>some text</SomeText>
//   </ThemeProvider>
// )
