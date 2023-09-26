export default function Loading() {
  return (
    <div>
        <div className="h-[780px] bg-gray-700 animate-pulse"></div>
        <div className="grid grid-cols-3 my-12 container mx-auto gap-8">
                <div className="h-32 bg-gray-700 animate-pulse"></div>
                <div className="h-32 bg-gray-700 animate-pulse"></div>
                <div className="h-32 bg-gray-700 animate-pulse"></div>
        </div>
    </div>
  );
}
