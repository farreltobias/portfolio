import { Skeleton as SkeletonPrimitive } from '@/src/components/ui/skeleton'

export const Skeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 basis-5/12">
      <div className="flex flex-col gap-4 grow">
        <SkeletonPrimitive className="h-10 w-full" />
        <SkeletonPrimitive className="h-10 w-full" />
        <SkeletonPrimitive className="grow w-full" />
      </div>
      <SkeletonPrimitive className="h-10 py-2 w-5/12" />
    </div>
  )
}
