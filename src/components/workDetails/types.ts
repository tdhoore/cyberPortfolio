export interface props {
  title: string;
}

export interface projectDetailCounterProps {
  length: number;
  pageIndex: number;
  setPageIndex: any;
}

export interface RollPanelProps {
  title: string;
  value: string;
}

export interface screenshotAccentProps {
  title: string;
  image: string;
  index: number;
  isFullWidth?: boolean;
}

export interface workDetailSectionProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export interface nextProjectSectionProps {
  nextProject: any;
}
