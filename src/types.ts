export interface ProjectType {
  id: string;
  name: string;
  concept: string;
  characteristics: string[];
  difference: string;
  relationToInformatica: string;
  iconName: string;
}

export interface CyclePhase {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  keyActivities: string[];
  outcomes: string[];
  elementRelation: string;
}

export interface ProjectElement {
  id: string;
  name: string;
  definition: string;
  roleInPST: string;
  iconName: string;
}

export interface RealProjectExample {
  id: string;
  title: string;
  description: string;
  community: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  creationDate: string;
  webUrl?: string;
  webConsultation?: string;
}

export interface Reflection {
  activityId: string;
  title: string;
  content: string;
  weightingNotice: string;
}
