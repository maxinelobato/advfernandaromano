'use client'

import Script from 'next/script'
import './globals.css'
import { Gruppo } from 'next/font/google'
import { GTM_ID } from '../../lib/gtm'
import { Suspense } from 'react'

const gruppo = Gruppo({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Fernanda Romano Advocacia - Especialista em Direito de Família',
  description:
    'Pensão Alimentícia, Divórcio, Regulamentção de Visita e Partilha de Bens'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* Google Tag Manager - Global base code */}
      <Suspense>
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-PCQ5JSR');
          `
        }}
      ></Script>
      </Suspense>
      <body className={gruppo.className}>
        <Suspense><main>{children}</main></Suspense>
        <Suspense>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        </Suspense>
      </body>
    </html>
  )
}
