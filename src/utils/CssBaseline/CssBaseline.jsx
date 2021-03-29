import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const CssBaseline = createGlobalStyle`
  @font-face {
    font-family: 'TTNormsRegular';
    src: local('TTNorms Regular'), url(../../../assets/fonts/TT-Norms/TTNorms-Regular.woff2) format('woff2');
  }
  @font-face {
    font-family: 'TTNormsMedium';
    src: local('TTNorms Medium'), url(../../../assets/fonts/TT-Norms/TTNorms-Medium.woff2) format('woff2');
  }
  @font-face {
    font-family: 'TTNormsLight';
    src: local('TTNorms Light'), url(../../../assets/fonts/TT-Norms/TTNorms-Light.woff2) format('woff2');
  }
  @font-face {
    font-family: 'TTNormsBlack';
    src: local('TTNorms Black'), url(../../../assets/fonts/TT-Norms/TTNorms-Black.woff2) format('woff2');
  }
  @font-face {
    font-family: 'TTNormsBold';
    src: local('TTNorms Bold'), url(../../../assets/fonts/TT-Norms/TTNorms-Bold.woff2) format('woff2');
    font-style: normal;
  }
  @font-face {
    font-family: 'TTNormsItalic';
    src: local('TTNorms Italic'), url(../../../assets/fonts/TT-Norms/TTNorms-Italic.woff2) format('woff2');
    font-style: normal;
  }
  @font-face {
    font-family: 'TTNormsMediumItalic';
    src: local('TTNorms Medium Italic'), url(../../../assets/fonts/TT-Norms/TTNorms-MediumItalic.woff2) format('woff2');
    font-style: normal;
  }
* {
    font-family: "TTNormsRegular", "Arial", "Helvetica", "sans-serif";
    font-variant-ligatures: none;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export default CssBaseline;
