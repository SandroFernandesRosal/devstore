import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid max-h-[860px] lg:grid-cols-9 lg:grid-rows-6 gap-6">
      <Skeleton className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end " />
      <Skeleton className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end " />
      <Skeleton className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end" />
    </div>
  )
}
