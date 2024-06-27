import { Project } from '@/src/components/project'

export const Skeleton: React.FC = () => {
  const projects = Array.from({ length: 6 }, (_, i) => i)

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {projects.map((project) => (
        <li key={project}>
          <Project.Skeleton />
        </li>
      ))}
    </ul>
  )
}
