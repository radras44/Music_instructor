import '../styles/globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'musicTheory_instructor',
  description: 'Aplicacion cliente para el estudio de la teoria funcional para algun instrumentos como guitarra o piano',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
            {children}
      </body>
    </html>
  )
}
