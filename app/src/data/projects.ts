import { Project } from '@/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    userId: '1',
    projectName: '123 Ocean View Drive',
    address: '123 Ocean View Drive, Manly, NSW 2095',
    status: 'On Schedule',
    progress: 30,
    startDate: '2025-09-01',
    estimatedCompletionDate: '2026-03-31',
  },
  {
    id: '2',
    userId: '1',
    projectName: '45 Station Street',
    address: '45 Station Street, Parramatta, NSW 2150',
    status: 'Delayed',
    progress: 65,
    startDate: '2025-07-15',
    estimatedCompletionDate: '2026-01-20',
  },
  {
    id: '3',
    userId: '1',
    projectName: '88 Hilltop Road',
    address: '88 Hilltop Road, Blue Mountains, NSW 2780',
    status: 'On Schedule',
    progress: 10,
    startDate: '2025-10-01',
    estimatedCompletionDate: '2026-06-15',
  },
];
