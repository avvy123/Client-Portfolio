export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 h-full">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700/50" />
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="h-6 bg-gray-200 dark:bg-gray-700/50 rounded w-2/3 mb-4" />
        <div className="space-y-3 mb-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-700/50 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700/50 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700/50 rounded w-5/6" />
        </div>
        <div className="flex gap-2 mb-8">
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700/50 rounded-full" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700/50 rounded-full" />
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700/50 rounded-full" />
        </div>
        <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700/50 rounded" />
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700/50 rounded ml-auto" />
        </div>
      </div>
    </div>
  );
}
