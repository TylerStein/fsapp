export class User {
  id: number;
  email: string;
  name: string;
  password: string;
}

export enum Status {
  Online,
  Away,
  Busy
}
