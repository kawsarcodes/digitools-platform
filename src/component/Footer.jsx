export default function Footer() {
    return (
        <footer className="bg-[#101727] text-white py-16 font-sans">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                <div className="lg:col-span-4">
                    <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">DigiTools</h2>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-6 text-white">Social Links</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://kawsar.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
                            aria-label="Portfolio"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </a>

                        <a
                            href="https://github.com/kawsarcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>

                        <a
                            href="https://linkedin.com/in/mdkawsarahmed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}