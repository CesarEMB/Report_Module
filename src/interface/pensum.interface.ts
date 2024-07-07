export interface PensumData {
  combinedData: pensum[];
}

interface pensum {
  list: List[];
  year: string;
}

interface List {
  academic_year: string;
  cod: string;
  name: string;
  practical_h: number;
  priorities: string;
  theoretical_h: number;
  u_c: number;
  weekly_h: number;
}
