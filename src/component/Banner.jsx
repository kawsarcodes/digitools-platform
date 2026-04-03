import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-violet-600"></span>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Access premium AI tools, design assets, templates, and productivity software - all in one place. Start creating faster today. Explore Products
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#products" className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-8 inline-flex items-center justify-center">
            Explore Products
          </a>
          <button className="btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-50 rounded-full px-8">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <img
          src={bannerImg}
          alt="Digital Workflow"
          className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5] lg:aspect-auto"
        />
      </div>
    </div>
  );
}