import { Package, Rocket, User } from "lucide-react";

export default function Steps() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-600 mb-16">Start using premium digital tools in minutes, not hours.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              01
            </div>
            <div className="w-20 h-20 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-6 text-violet-600">
              <User size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-sm relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              02
            </div>
            <div className="w-20 h-20 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-6 text-violet-600">
              <Package size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-sm relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              03
            </div>
            <div className="w-20 h-20 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-6 text-violet-600">
              <Rocket size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
}