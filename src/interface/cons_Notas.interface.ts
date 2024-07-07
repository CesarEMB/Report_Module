export interface Cons_Notas {
  student: {
    ci: string;
    first_name: string;
    last_name: string;
    second_name: string;
    second_surname: string;
    cohort: string;
    status: boolean;
  };
  careerData: {
    name: string;
    cod: string;
  };
  notesData: {
    totalU_C: number;
    total: string;
  };
  enrolledsData: enrolledsData[];
}

interface enrolledsData {
  period: string;
  status: boolean;
  enrolled_sub: enrolled_sub[];
}

interface enrolled_sub {
  qualification: number;
  subject: {
    name: string;
    academic_year: string;
    cod: string;
    section: string;
    classroom: {
      day: string;
      site: string;
    }[];
    u_c: number;
  };
}
