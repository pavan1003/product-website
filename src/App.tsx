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
  Users,
  Award,
  Zap,
  Shield,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Network error. Please try again later.");
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-700 transition-colors"
              >
                Contact
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
              <button
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors"
              >
                Contact
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

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied audiophiles worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Absolutely incredible sound quality. The noise cancellation is game-changing for my
                daily commute. Best headphones I've ever owned!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Music Producer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The battery life is phenomenal and the comfort level is unmatched. I wear these for
                8+ hours during work calls without any discomfort."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Premium build quality and the wireless connection is rock solid. These headphones
                have elevated my entire audio experience."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emma Rodriguez</p>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-700 to-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Upgrade Your Audio?
              </h2>
              <p className="text-xl text-blue-100">
                Experience premium sound quality with our flagship headphones
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">SoundWave Pro</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-5xl font-bold text-white">$299</span>
                    <span className="text-blue-200 line-through text-xl">$399</span>
                  </div>
                  <p className="text-blue-100">Limited time offer - Save $100</p>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3 text-white">
                    <Zap className="h-5 w-5 text-blue-300" />
                    <span>40-hour battery life</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <Award className="h-5 w-5 text-blue-300" />
                    <span>Active noise cancellation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <Shield className="h-5 w-5 text-blue-300" />
                    <span>2-year warranty included</span>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-700 py-4 px-8 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Order Now - Free Shipping</span>
                </button>

                <p className="text-sm text-blue-200">Free 30-day returns • 24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about SoundWave Pro? We're here to help you find the perfect audio
              solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">support@soundwave.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">1-800-SOUNDWAVE</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Audio Street
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Support Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 8:00 PM PST
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 10:00 AM - 6:00 PM PST
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> 12:00 PM - 5:00 PM PST
                  </p>
                </div>
                <p className="text-sm text-blue-700 mt-4 font-medium">Live chat available 24/7</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              {submitMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg border ${
                    submitMessage.toLowerCase().includes("thank")
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-red-50 border-red-200 text-red-700"
                  }`}
                >
                  <p>{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
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
