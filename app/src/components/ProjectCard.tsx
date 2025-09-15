import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'On Schedule':
        return 'bg-green-500';
      case 'Delayed':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-blue-500';
    }
  };

  return (
    <div className="mb-4 w-full rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{project.projectName}</h2>
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold text-white ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{project.address}</p>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
        </div>
        <div className="mt-1 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
