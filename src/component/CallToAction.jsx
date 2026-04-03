export default function CallToAction() {
  return (
    <div className="bg-violet-50 py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-8">Explore Products</button>
          <button className="btn btn-outline text-violet-600 border-violet-200 hover:bg-violet-100 rounded-full px-8">View Pricing</button>
        </div>
        <p className="text-gray-500 text-sm mt-6">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
}