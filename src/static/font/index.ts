import { Font } from '@react-pdf/renderer';
import chineaseBold from './Chinese-Bold.ttf';
import chineaseLight from './Chinese-Light.ttf';
import chineaseMedium from './Chinese-Medium.ttf';
import chineaseRegular from './Chinese-Regular.ttf';

export const injectFont = () =>
  Font.register({
    family: 'Chinese',
    fonts: [
      {
        src: chineaseLight,
        fontWeight: 100
      },
      {
        src: chineaseRegular,
        fontWeight: 400
      },
      {
        src: chineaseMedium,
        fontWeight: 500
      },
      {
        src: chineaseBold,
        fontWeight: 700
      }
    ]
  });
