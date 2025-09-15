export interface Project {
  id: string;
  userId: string;
  projectName: string;
  address: string;
  status: 'On Schedule' | 'Delayed' | 'Completed';
  progress: number;
  startDate: string;
  estimatedCompletionDate: string;
}

export interface Stage {
  id: string;
  projectId: string;
  name: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  endDate: string;
  order: number;
  assignedContractorId: string | null;
}

export interface Contractor {
  id:string;
  userId: string;
  companyName: string;
  contactName: string;
  trade: string;
  phoneNumber: string;
  email: string;
}
