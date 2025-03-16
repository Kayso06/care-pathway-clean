'use client';\n\nimport type { Metadata } from \"next\";\nimport { Inter } from \"next/font/google\";\nimport { GeistSans, GeistMono } from \"geist/font\";\nimport \"./globals.css\";\n\nconst inter = Inter({\n  subsets: [\"latin\"],\n  variable: \"--font-inter\",\n});\n\nexport const metadata: Metadata = {\n  title: \"Care Pathway Pro - Compliant Solutions for Adult Social Care\",\n  description: \"Transform your adult social care operations with secure, cost-effective software that prioritises management and organisation.\",\n  keywords: \"adult social care, compliance, care pathway, management, organisation\",\n};\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>) {\n  return (\n    <html lang=\"en\" className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning={true}>\n      <body suppressHydrationWarning={true}>\n        {children}\n      </body>\n    </html>\n  );\n}\n