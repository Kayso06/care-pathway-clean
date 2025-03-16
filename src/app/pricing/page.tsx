'use client';\n\nimport Link from \"next/link\";\nimport MainLayout from \"@/components/MainLayout\";\nimport { useState } from 'react';\n\nexport default function PricingPage() {\n  const [isAnnual, setIsAnnual] = useState(true);\n\n  const toggleBilling = () => {\n    setIsAnnual(!isAnnual);\n  };\n\n  return (\n    <MainLayout>\n      {/* Hero Section */}\n      <section className=\"py-20 bg-gray-50\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"text-center mb-12\">\n            <h1 className=\"text-4xl sm:text-5xl font-bold mb-6\">Simple, Transparent Pricing</h1>\n            <p className=\"text-lg text-text-light max-w-3xl mx-auto\">\n              Choose the plan that works best for your care organization.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      {/* Pricing Toggle */}\n      <section className=\"py-8\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"flex justify-center items-center space-x-4\">\n            <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-text-light'}`}>Annual Billing</span>\n            <button \n              onClick={toggleBilling}\n              className=\"relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200\"\n            >\n              <span className=\"sr-only\">Toggle billing period</span>\n              <span \n                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-1' : 'translate-x-6'}`}\n              />\n            </button>\n            <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-text-light'}`}>Monthly Billing</span>\n          </div>\n          <div className=\"text-center mt-2\">\n            <span className=\"text-sm text-text-light\">{isAnnual ? 'Save 20% with annual billing' : ''}</span>\n          </div>\n        </div>\n      </section>\n\n      {/* Pricing Plans */}\n      <section className=\"py-12\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">\n            {/* Starter Plan */}\n            <div className=\"bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100\">\n              <div className=\"p-8\">\n                <h3 className=\"text-xl font-bold mb-4\">Starter</h3>\n                <div className=\"mb-6\">\n                  <span className=\"text-4xl font-bold\">{isAnnual ? '£39' : '£49'}</span>\n                  <span className=\"text-text-light\">/month per user</span>\n                </div>\n                <p className=\"text-text-light mb-6\">Perfect for small care providers just getting started.</p>\n                <Link href=\"/contact\" className=\"btn btn-primary w-full mb-6\">\n                  Get Started\n                </Link>\n                <ul className=\"space-y-3\">\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Up to 10 clients</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Basic client management</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Standard reports</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Email support</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n            {/* Professional Plan */}\n            <div className=\"bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border-2 border-primary relative\">\n              <div className=\"absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg\">\n                POPULAR\n              </div>\n              <div className=\"p-8\">\n                <h3 className=\"text-xl font-bold mb-4\">Professional</h3>\n                <div className=\"mb-6\">\n                  <span className=\"text-4xl font-bold\">{isAnnual ? '£79' : '£99'}</span>\n                  <span className=\"text-text-light\">/month per user</span>\n                </div>\n                <p className=\"text-text-light mb-6\">Ideal for growing care providers with more complex needs.</p>\n                <Link href=\"/contact\" className=\"btn btn-primary w-full mb-6\">\n                  Get Started\n                </Link>\n                <ul className=\"space-y-3\">\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Up to 50 clients</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Advanced client management</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Custom reports</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Staff scheduling</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Priority email & phone support</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n            {/* Enterprise Plan */}\n            <div className=\"bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100\">\n              <div className=\"p-8\">\n                <h3 className=\"text-xl font-bold mb-4\">Enterprise</h3>\n                <div className=\"mb-6\">\n                  <span className=\"text-4xl font-bold\">Custom</span>\n                  <span className=\"text-text-light\"></span>\n                </div>\n                <p className=\"text-text-light mb-6\">Tailored solutions for large care organizations with specific requirements.</p>\n                <Link href=\"/contact\" className=\"btn btn-primary w-full mb-6\">\n                  Contact Us\n                </Link>\n                <ul className=\"space-y-3\">\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Unlimited clients</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Full platform access</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Advanced analytics</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>API access</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Dedicated account manager</span>\n                  </li>\n                  <li className=\"flex items-start\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-5 h-5 text-primary mt-0.5 mr-2\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n                    </svg>\n                    <span>Custom integrations</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div className=\"text-center mt-12\">\n            <p className=\"text-text-light mb-4\">\n              Need a custom solution? <Link href=\"/contact\" className=\"text-primary font-medium hover:underline\">Contact us</Link> for tailored pricing and features.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      {/* FAQ Section */}\n      <section className=\"py-20 bg-gray-50\">\n        <div className=\"container mx-auto px-4\">\n          <div className=\"text-center mb-16\">\n            <h2 className=\"text-3xl sm:text-4xl font-bold mb-4\">Frequently Asked Questions</h2>\n            <p className=\"text-text-light max-w-2xl mx-auto\">\n              Have questions about our pricing? Find answers to common questions below.\n            </p>\n          </div>\n          \n          <div className=\"max-w-3xl mx-auto space-y-6\">\n            <div className=\"bg-white p-6 rounded-lg shadow-sm\">\n              <h3 className=\"text-xl font-bold mb-2\">Can I change plans later?</h3>\n              <p className=\"text-text-light\">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>\n            </div>\n            \n            <div className=\"bg-white p-6 rounded-lg shadow-sm\">\n              <h3 className=\"text-xl font-bold mb-2\">Is there a free trial available?</h3>\n              <p className=\"text-text-light\">Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.</p>\n            </div>\n            \n            <div className=\"bg-white p-6 rounded-lg shadow-sm\">\n              <h3 className=\"text-xl font-bold mb-2\">What payment methods do you accept?</h3>\n              <p className=\"text-text-light\">We accept all major credit cards, direct debit, and bank transfers for annual plans.</p>\n            </div>\n            \n            <div className=\"bg-white p-6 rounded-lg shadow-sm\">\n              <h3 className=\"text-xl font-bold mb-2\">Can I get a demo before deciding?</h3>\n              <p className=\"text-text-light\">Absolutely! Contact us to schedule a personalized demo with one of our product specialists.</p>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      {/* CTA Section */}\n      <section className=\"py-20 bg-primary text-white\">\n        <div className=\"container mx-auto px-4 text-center\">\n          <h2 className=\"text-3xl sm:text-4xl font-bold mb-6\">Ready to get started?</h2>\n          <p className=\"text-lg mb-8 max-w-2xl mx-auto opacity-90\">Join hundreds of care providers who have improved their operations with Care Pathway Pro.</p>\n          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">\n            <Link href=\"/contact\" className=\"bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-colors inline-block\">\n              Contact Sales\n            </Link>\n            <Link href=\"/contact\" className=\"bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors inline-block\">\n              Request a Demo\n            </Link>\n          </div>\n        </div>\n      </section>\n    </MainLayout>\n  );\n}