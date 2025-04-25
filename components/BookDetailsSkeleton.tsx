import { Skeleton } from "@/components/ui/skeleton";

export default function BookDetailsSkeleton() {
  return (
    <>
      <section className="pink_container !min-h-[230px] space-y-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
      </section>

      <section className="section_container">
        <div className="w-1/2 h-[400px] mx-auto mb-10">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-5 w-40" />
          </div>

          <div className="flex justify-between items-center gap-5">
            <div>
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32 mt-2" />
            </div>
            <Skeleton className="h-8 w-32 rounded-full" />
          </div>

          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-32 w-full" />
        </div>
      </section>
    </>
  );
}
