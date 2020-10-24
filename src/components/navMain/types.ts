export interface navState {
  navLinks: link[];
}

export interface props {
  links?: link[];
  activeLink?: string;
}

export interface link {
  title: string;
  link: string;
}