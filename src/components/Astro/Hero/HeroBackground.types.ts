export interface Column {
  chars: string[];
  currentChar: number;
  charsRemaining: number;
  gradient: number[];
  fontSize: number;
  xCoord: number;
  yCoord: number;
  prevRender: number;
}
