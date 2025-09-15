"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';

// Omit id, userId, status, progress as they will be set by the server/backend
type CreateProjectData = Omit<Project, 'id' | 'userId' | 'status' | 'progress'>;

export default function CreateProjectForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateProjectData>({
    projectName: '',
    address: '',
    startDate: '',
    estimatedCompletionDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.projectName || !formData.address || !formData.startDate || !formData.estimatedCompletionDate) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/'); // Redirect to homepage on success
      } else {
        alert('Failed to create project.');
      }
    } catch (error) {
      console.error('Failed to create project:', error);
      alert('An error occurred while creating the project.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Create New Project</h2>

      <div className="mb-4">
        <label htmlFor="projectName" className="mb-2 block text-sm font-medium text-gray-700">Project Name</label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          value={formData.projectName}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="mb-2 block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="estimatedCompletionDate" className="mb-2 block text-sm font-medium text-gray-700">Estimated Completion Date</label>
        <input
          type="date"
          name="estimatedCompletionDate"
          id="estimatedCompletionDate"
          value={formData.estimatedCompletionDate}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Create Project
      </button>
    </form>
  );
}
