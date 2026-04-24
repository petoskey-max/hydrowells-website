import { Skeleton } from "@/components/ui/skeleton";

export const ProductSkeleton = () => (
  <div className="bg-card rounded-[28px] overflow-hidden border border-border animate-pulse">
    <div className="h-[340px] bg-muted" />
    <div className="p-7 space-y-4">
      <div className="h-6 w-2/3 bg-muted rounded" />
      <div className="h-4 w-full bg-muted rounded" />
      <div className="h-4 w-1/2 bg-muted rounded" />
    </div>
  </div>
);
