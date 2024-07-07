export interface HorarioData {
  student: {
    ci: string;
    first_name: string;
    last_name: string;
    second_name: string;
    second_surname: string;
  };
  careerData: {
    name: string;
    cod: string;
    period: string;
  };
  listEnrolled: listEnrolled[];
}

interface listEnrolled {
  academic_year: string;
  cod: string;
  name: string;
  section: string;
  u_c: number;
  classroom: {
    day: string;
    site: string;
  }[];
}
