export interface navState {
  navLinks: link[];
}

export interface props {
  links?: link[];
}

export interface link {
  title: string;
  link: string;
  isActive: boolean;
}

export enum ActionTypes {
  example = "nav_EXAMPLE",
}
