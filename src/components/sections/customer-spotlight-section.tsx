import React from 'react';
import Image from 'next/image';

const CustomerSpotlightSection = () => {
    return (
        <section className="bg-[#f9f9f9] py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 bg-accent rounded-full"></span>
                        <p className="font-semibold text-xs text-black/50 tracking-[0.05em] uppercase">
                            USE CASES
                        </p>
                    </div>
                    <h2 className="mt-4 font-display text-4xl sm:text-5xl text-gray-900 max-w-4xl">
                        Built for businesses across every industry
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl text-gray-900 mb-3">Reception & Scheduling</h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Handle incoming calls, book appointments, and manage your calendar 24/7 with intelligent voice automation.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl text-gray-900 mb-3">Customer Support</h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Provide instant support and resolve common inquiries with AI that understands your products and services.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl text-gray-900 mb-3">Operations Management</h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Streamline workflows, process orders, and coordinate tasks with AI-powered operational assistance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSpotlightSection;