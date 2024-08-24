import { createGlobalStyle } from "styled-components";
import GlobalStyles from "./Colors"; // Assuming you have the GlobalStyles file

const AppGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    color: ${GlobalStyles.Colors.primary500}; /* Example usage of your GlobalStyles */
  }
`;

export default AppGlobalStyle;
