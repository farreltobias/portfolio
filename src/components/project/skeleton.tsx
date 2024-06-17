import { AspectRatio } from '../ui/aspect-ratio'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Skeleton as SkeletonPrimitive } from '../ui/skeleton'

export const Skeleton: React.FC = () => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <AspectRatio ratio={25 / 10}>
          <SkeletonPrimitive className="h-full rounded-none rounded-t-xl" />
        </AspectRatio>
        <div className="flex justify-between">
          <SkeletonPrimitive className="h-6 w-1/4 rounded-sm" />
          <div className="flex gap-4">
            <SkeletonPrimitive className="h-6 w-6 rounded-sm" />
            <SkeletonPrimitive className="h-6 w-6 rounded-sm" />
            <SkeletonPrimitive className="h-6 w-6 rounded-sm" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <SkeletonPrimitive className="h-6 w-1/3 rounded-sm" />
        <SkeletonPrimitive className="h-[4.5rem] rounded-sm" />
      </CardContent>
    </Card>
  )
}
