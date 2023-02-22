import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    overflow-y: auto;
    padding: 0;
    height: 100vh;
    width: 100vw;
}

button,
a {
    cursor: pointer;
}
`
