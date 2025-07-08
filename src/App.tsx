import React, { useState } from "react";
import {
  Menu,
  X,
  Headphones,
  Battery,
  Wifi,
  Volume2,
  Star,
  ShoppingCart,
  Shield,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Headphones className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">SoundWave</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("specs")}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Specs
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("specs")}
                className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors"
              >
                Specs
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  SoundWave
                  <span className="text-blue-700"> Pro</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience audio like never before with our flagship wireless headphones. Premium
                  sound quality meets cutting-edge technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Buy Now - $299</span>
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-900">4.9/5</span>
                  <span className="text-gray-600">(2,847 reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 scale-110"></div>
                <img
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="SoundWave Pro Headphones"
                  className="relative z-10 w-96 h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Premium Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail engineered for the ultimate listening experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Battery className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">40H Battery</h3>
              <p className="text-gray-600">
                Extended playtime with fast charging technology. Get 8 hours from just 15 minutes of
                charging.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Wifi className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bluetooth 5.3</h3>
              <p className="text-gray-600">
                Latest wireless technology for stable connection up to 30 feet with minimal latency.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Volume2 className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Active ANC</h3>
              <p className="text-gray-600">
                Advanced noise cancellation blocks up to 95% of external noise for immersive audio.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Resistant</h3>
              <p className="text-gray-600">
                IPX4 rating protects against sweat and light rain for worry-free workouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Headphones Detail"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h2>
                <p className="text-xl text-gray-600">
                  Precision engineering meets audiophile-grade components
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Driver Size</span>
                  <span className="text-gray-600">40mm Dynamic</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Frequency Response</span>
                  <span className="text-gray-600">20Hz - 40kHz</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Impedance</span>
                  <span className="text-gray-600">32 Ohms</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Weight</span>
                  <span className="text-gray-600">290g</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Charging</span>
                  <span className="text-gray-600">USB-C, Wireless</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="font-medium text-gray-900">Compatibility</span>
                  <span className="text-gray-600">Universal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Headphones className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">SoundWave</span>
              </div>
              <p className="text-gray-400">
                Premium audio experiences for discerning listeners worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#specs" className="hover:text-white transition-colors">
                    Specifications
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@soundwave.com</li>
                <li>1-800-SOUNDWAVE</li>
                <li>Live Chat 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SoundWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
