export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-purple-500 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center text-white">
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-violet-100 text-lg mt-1">Active Users</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-violet-100 text-lg mt-1">Premium Tools</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-violet-100 text-lg mt-1">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}