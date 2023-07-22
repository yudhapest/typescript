export interface Employe {
  id: number;
  name: string;
  division: string;
}

export interface Manager extends Employe {
  numberOfEmployees?: number;
}
