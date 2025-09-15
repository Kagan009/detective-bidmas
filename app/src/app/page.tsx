import Link from 'next/link';
import ProjectList from '@/components/ProjectList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 mb-8 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Construction Scheduler</h1>
        <Link href="/projects/create">
          <span className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Create New Project
          </span>
        </Link>
      </div>
      <ProjectList />
    </main>
  );
}
