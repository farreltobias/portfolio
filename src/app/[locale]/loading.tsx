import { AspectRatio } from '@/src/components/ui/aspect-ratio'
import { Skeleton } from '@/src/components/ui/skeleton'

import { Techs } from './components/home/techs'

export default function Loading() {
  return (
    <main className="container md:px-8 mt-20">
      <div id="start" className="relative pt-36 pb-12 -mt-24 md:py-24">
        <section className="flex flex-col-reverse justify-between items-center gap-6 mx-6 md:flex-row md:gap-32 md:mx-[4.5rem]">
          <div className="flex flex-col gap-8 basis-1/2 w-full">
            <Skeleton className="h-[3.125rem] w-4/6 md:w-1/2" />
            <div className="flex flex-col gap-4">
              <Skeleton className="h-16 md:h-8" />
              <Skeleton className="h-24 md:h-20" />
            </div>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <Skeleton className="h-11 w-5/12 md:h-10 md:w-1/3" />
              <Skeleton className="h-11 w-5/12 md:h-10 md:w-1/3" />
            </div>
          </div>

          <div className="min-w-full relative md:min-w-0 md:basis-1/2">
            <AspectRatio
              ratio={15 / 13}
              className="flex justify-center items-center"
            >
              <Skeleton className="h-full w-full md:h-5/6 md:w-5/6" />
            </AspectRatio>
          </div>
        </section>
      </div>

      <div id="about" className="pt-20 -mt-20">
        <section className="flex flex-col gap-10 bg-surface-primary py-12 px-6 md:flex-row md:gap-32 md:p-[4.5rem] md:my-10 md:rounded-2xl">
          <div className="flex flex-col my-auto min-w-full relative md:min-w-0 md:basis-1/2">
            <AspectRatio
              ratio={19 / 11}
              className="flex justify-center items-center"
            >
              <Skeleton className="h-full w-full" />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-8 basis-1/2">
            <Techs.Skeleton />
            <div className="flex flex-col gap-4">
              <header className="flex flex-col gap-2">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-24 md:h-16" />
              </header>
              <Skeleton className="h-44 md:h-32" />
            </div>
            <Skeleton className="h-11 w-5/12 md:h-10 md:w-1/3" />
          </div>
        </section>
      </div>
    </main>
  )
}
