'use client';\n\nimport Header from './Header';\nimport Footer from './Footer';\n\nexport default function MainLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className=\"min-h-screen flex flex-col\">\n      <Header />\n      <main className=\"flex-grow pt-24\">\n        {children}\n      </main>\n      <Footer />\n    </div>\n  );\n}