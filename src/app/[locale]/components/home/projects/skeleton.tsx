import { Project } from '@/src/components/project'

export const Skeleton: React.FC = () => {
  const projects = Array.from({ length: 3 }, (_, i) => i)

  return (
    <ul className="grid grid-cols-3 gap-8 w-full">
      {projects.map((project) => (
        <li key={project}>
          <Project.Skeleton />
        </li>
      ))}
    </ul>
  )
}
