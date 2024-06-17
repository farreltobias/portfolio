import { Skeleton as SkeletonPrimitive } from '@/src/components/ui/skeleton'

export const Skeleton: React.FC = () => {
  const techs = Array.from({ length: 5 }, (_, i) => i)

  return (
    <div className="flex gap-6 text-primary">
      {techs.map((tech) => (
        <SkeletonPrimitive key={tech} className="h-6 w-6 rounded-sm" />
      ))}
    </div>
  )
}
