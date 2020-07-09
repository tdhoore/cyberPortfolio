export interface workState {}

export interface props {}

export interface ProjectProps {
  data: any;
}

export interface data {
  title: string;
  image: string;
}

export enum ActionTypes {
  gotWork = "WORK_FETCH_SUCCEEDED",
}
