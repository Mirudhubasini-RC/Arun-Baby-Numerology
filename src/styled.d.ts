import 'styled-components';
import type { AppTheme } from './styles/style';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
