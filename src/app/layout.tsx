import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: 'Estrelas Além do Tempo',
  description: 'Aqui, mergulhamos nas histórias inspiradoras de mulheres que, apesar de muitas vezes esquecidas, deixaram uma marca indelével no mundo da ciência. Enquanto figuras masculinas costumam dominar as narrativas históricas, este espaço destaca a notável contribuição feminina que moldou e continua a moldar o panorama científico.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
