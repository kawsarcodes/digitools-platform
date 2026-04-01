export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-violet-600 mb-4">DigiTools</h2>
          <p className="text-gray-500 max-w-sm mb-6">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-gray-900 font-bold mb-4">Product</h3>
          <ul className="space-y-3">
            <li><a className="hover:text-violet-600 cursor-pointer">Features</a></li>
            <li><a className="hover:text-violet-600 cursor-pointer">Pricing</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2026 DigiTools. All rights reserved.</p>
      </div>
    </footer>
  );
}