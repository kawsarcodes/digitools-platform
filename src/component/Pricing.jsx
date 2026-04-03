import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500" /> Basic templates
              </li>
            </ul>
            <button className="btn w-full bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full">Get Started Free</button>
          </div>
          
          <div className="bg-violet-600 rounded-3xl p-8 shadow-xl relative transform lg:-translate-y-4 text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-violet-200 text-sm mb-6">Best for professionals</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-violet-200">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-white" /> Access to all premium tools
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-white" /> Unlimited templates
              </li>
            </ul>
            <button className="btn w-full bg-white text-violet-600 hover:bg-gray-50 border-none rounded-full">Start Pro Trial</button>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500" /> Team collaboration
              </li>
            </ul>
            <button className="btn w-full bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}