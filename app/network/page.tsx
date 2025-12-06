'use client';

import { useState } from 'react';

export default function Network() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vehicleType: '',
    vehicleRegistration: '',
    trailerType: '',
    hasInsurance: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Transporter application submitted:', formData);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden py-12 sm:py-0">
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 py-8">
            <div className="space-y-3 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
                <span className="block">The Vuyela Network</span>
                <span className="block text-yellow-400">The Human Platform</span>
              </h1>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto animate-fade-in-delay">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-snug">
                Enterprise Supplier Development Through Logistics
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                Connecting blue-chip clients with pre-vetted SMME transporters. We manage compliance, safety, and payments—you get the capacity and B-BBEE points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                For Clients: Achieve Your ESD Targets
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Transform your logistics service into a compliance solution. Partner with Vuyela Network to achieve your Enterprise Supplier Development (ESD) targets while we manage the complexity of working with SMME transporters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">B-BBEE Points</h3>
                    <p className="text-gray-600 leading-relaxed">Earn Enterprise Development points by partnering with our network of pre-vetted, black-owned SMME transporters. We handle the verification and reporting.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Compliance Management</h3>
                    <p className="text-gray-600 leading-relaxed">We manage all compliance requirements—insurance verification, driver licensing, vehicle registration, and safety standards. One contract, zero administrative burden.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Risk Mitigation</h3>
                  <p className="text-gray-600 leading-relaxed">Vuyela acts as the main contractor, taking on all operational and financial risk. Your cargo is protected by our insurance and operational oversight.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Scalable Capacity</h3>
                  <p className="text-gray-600 leading-relaxed">Access a network of pre-vetted transporters without the capital expenditure of fleet ownership. Scale up or down based on your operational needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Client Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">B-BBEE Level 1 Compliance</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Zero Administrative Burden</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pre-Vetted Transporters</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated Account Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full Insurance Coverage</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Operational Risk Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Transporters Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                For Transporters: Join Our Network
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Get paid on time. Get access to blue-chip contracts. Join the Vuyela Network—the human-centric alternative to automated platforms. We provide the contracts, you provide the capacity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Guaranteed Payment</h3>
                    <p className="text-gray-600 leading-relaxed">Get paid on time, every time. No chasing invoices or delayed payments. Vuyela handles all payment processing and ensures prompt settlement.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Access to Blue-Chip Contracts</h3>
                    <p className="text-gray-600 leading-relaxed">Work with major mining companies, retailers, and manufacturers. Access contracts that would be difficult to secure independently as an SMME.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dedicated Support</h3>
                  <p className="text-gray-600 leading-relaxed">Unlike automated platforms, you get dedicated account management. Real people who understand your business and can help solve operational challenges.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Operational Support</h3>
                  <p className="text-gray-600 leading-relaxed">We handle route planning, documentation, and compliance. Focus on driving while we manage the administrative complexity.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Transporter Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">On-Time Payment Guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Major Client Access</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Human Account Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Administrative Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Route & Load Optimization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Compliance Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Portal Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Register as a Transporter
              </h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Join our network of pre-vetted transporters. Complete the application below to get started.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
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
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      required
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="side-tipper">Side Tipper</option>
                      <option value="tautliner">Tautliner (Curtain Sider)</option>
                      <option value="flat-deck">Flat Deck</option>
                      <option value="interlink">Interlink Combination</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="trailerType" className="block text-sm font-medium text-gray-700 mb-2">
                      Trailer Type
                    </label>
                    <select
                      id="trailerType"
                      name="trailerType"
                      value={formData.trailerType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    >
                      <option value="">Select trailer type</option>
                      <option value="single">Single Axle</option>
                      <option value="tandem">Tandem Axle</option>
                      <option value="tri-axle">Tri-Axle</option>
                      <option value="extendable">Extendable</option>
                      <option value="none">No Trailer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicleRegistration" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Registration Number *
                  </label>
                  <input
                    type="text"
                    id="vehicleRegistration"
                    name="vehicleRegistration"
                    required
                    value={formData.vehicleRegistration}
                    onChange={handleChange}
                    placeholder="e.g., ABC 123 GP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="hasInsurance" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have GIT Insurance? *
                  </label>
                  <select
                    id="hasInsurance"
                    name="hasInsurance"
                    required
                    value={formData.hasInsurance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I have GIT Insurance</option>
                    <option value="no">No, but I can obtain it</option>
                    <option value="pending">Application in progress</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience, routes you typically operate, or any other relevant information..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    <p className="mb-2">
                      <strong className="text-gray-900">Note:</strong> After submitting this application, you will be contacted to provide additional documentation including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>Vehicle registration papers</li>
                      <li>Driver&apos;s license</li>
                      <li>Insurance documentation</li>
                      <li>Company registration (if applicable)</li>
                    </ul>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-yellow-400 px-8 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re a client seeking ESD solutions or a transporter looking for opportunities, the Vuyela Network is here to connect you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-10 py-4 text-lg font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Contact Us
                </a>
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

