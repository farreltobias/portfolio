import { Project } from '@/src/components/project'
import { Skeleton } from '@/src/components/ui/skeleton'

export default function Loading() {
  const projects = Array.from({ length: 6 }, (_, i) => i)

  return (
    <main className="container flex flex-col px-6 mt-28 pb-8 mb-auto gap-8 md:pb-24 md:mt-44 md:px-28">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <Skeleton className="h-12 md:h-10 w-full" />
          <Skeleton className="h-12 md:h-10 w-full md:w-3/12" />
        </div>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <li key={project}>
            <Project.Skeleton />
          </li>
        ))}
      </ul>
    </main>
  )
}
