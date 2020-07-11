export interface workState {}

export interface props {}

export interface ProjectProps {
  data: any;
  counter?: string;
}
export interface ProjectCounterProps {
  counter?: string;
}

export interface data {
  title: string;
  image: string;
  roll: string;
  Client: string;
  projectInfo: string;
  sliderimages: sliderimages;
}

export interface sliderimages {
  title: string;
  image: string;
}

export enum ActionTypes {
  gotWork = "WORK_FETCH_SUCCEEDED",
  updateCurrentItem = "WORK_UPDATE_CURRENTITEM",
}
