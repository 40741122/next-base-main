// import '@/styles/globals.css'
// import '@/styles/product-table.css'

import { ThemeProvider } from '@/hooks/use-theme'

import { AuthProvider } from '@/hooks/use-auth'

import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CartProvider>
      <AuthProvider>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </AuthProvider>
    </CartProvider>
  )
}
