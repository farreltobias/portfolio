import { Project } from '@/src/components/project'

export const Skeleton: React.FC = () => {
  const projects = Array.from({ length: 3 }, (_, i) => i)

  return projects.map((project) => (
    <li key={project}>
      <Project.Skeleton />
    </li>
  ))
}
