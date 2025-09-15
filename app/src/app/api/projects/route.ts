import { NextResponse } from 'next/server';
import { mockProjects } from '@/data/projects';
import { Project } from '@/types';

export async function GET() {
  // In a real app, you'd fetch this from a database.
  return NextResponse.json(mockProjects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProject: Project = {
      id: String(mockProjects.length + 1), // Simple ID generation
      userId: '1', // Hardcoded for now
      status: 'On Schedule',
      progress: 0,
      ...body,
    };
    mockProjects.push(newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create project', error }, { status: 500 });
  }
}
