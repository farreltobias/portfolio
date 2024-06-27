import { Skeleton as SkeletonPrimitive } from '@/src/components/ui/skeleton'

export const Skeleton: React.FC = () => {
  const navItems = Array.from({ length: 4 }, (_, i) => i)
  const navIcons = Array.from({ length: 2 }, (_, i) => i)

  return (
    <header className="fixed top-0 w-full z-20 bg-background shadow-lg h-20">
      <div className="relative flex justify-between items-center md:container md:py-4 md:px-20">
        <div className="bg-background z-10 flex justify-between items-center p-4 md:p-0 w-full">
          <SkeletonPrimitive className="h-8 w-28" />
          <SkeletonPrimitive className="h-8 w-8 md:invisible" />
        </div>
        <nav className="w-0 invisible md:w-full md:visible flex justify-end gap-4">
          {navItems.map((item) => (
            <SkeletonPrimitive key={item} className="h-8 w-20" />
          ))}
          {navIcons.map((item) => (
            <SkeletonPrimitive key={item} className="h-8 w-8" />
          ))}
        </nav>
      </div>
    </header>
  )
}
