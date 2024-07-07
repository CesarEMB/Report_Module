export interface Const_Ins {
  student: {
    ci: string;
    first_name: string;
    last_name: string;
    second_name: string;
    second_surname: string;
    cohort: string;
  };
  careerData: {
    name: string;
    cod: string;
    period: string;
  };
  listEnrolled: EnrolledSubject[]
  total: number;
}


interface EnrolledSubject {
  name: string;
  academic_year: string;
  cod: string;
  section: string;
  classroom: {
    day: string;
    site: string;
  }[];
  u_c: number;
}