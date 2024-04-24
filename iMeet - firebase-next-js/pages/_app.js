import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <AuthProvider>
      <div className="bg-gray-900">
        <Header/>
      <div className="min-h-screen">
      <Component {...pageProps} />
      </div>
      <Footer/>
      </div>
      </AuthProvider>
  </>
}
