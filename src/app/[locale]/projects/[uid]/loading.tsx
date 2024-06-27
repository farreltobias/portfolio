import { AspectRatio } from '@/src/components/ui/aspect-ratio'
import { Skeleton } from '@/src/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container mt-28 mb-8 grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 md:mb-24 md:px-28">
      <article className="bg-surface-primary space-y-6 md:col-span-2 md:rounded-2xl">
        <header className="relative flex flex-col gap-8">
          <AspectRatio
            ratio={25 / 11}
            className="flex items-end justify-center bg-gradient-to-r from-primary-light to-highlight md:rounded-t-2xl"
          >
            <Skeleton className="h-3/4 w-3/4 rounded-none md:rounded-t-2xl" />
          </AspectRatio>
          <div className="mx-12 space-y-6">
            <div className="flex justify-between">
              <Skeleton className="h-6 w-1/3" />
              <div className="flex gap-4">
                <Skeleton className="w-6 h-6" />
                <Skeleton className="w-6 h-6" />
                <Skeleton className="w-6 h-6" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-12 pb-12 space-y-6">
          <Skeleton className="h-10 w-1/2" />
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-6 w-5/12" />
              <Skeleton className="h-6 w-5/12" />
            </div>
            <Skeleton className="h-40" />
          </div>
        </div>
      </article>

      <aside className="bg-surface-primary p-8 h-fit w-full space-y-6 md:rounded-2xl">
        <Skeleton className="h-7" />
        <div className="space-y-4">
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
        </div>
      </aside>
    </main>
  )
}
