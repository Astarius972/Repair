import './globals.css'

export const metadata = {
  title: 'Artisan & Oak — Тавилга сэргээн засварлалт',
  description: 'Монгол улсын тавилга сэргээн засварлалтын тэргүүлэгч үйлчилгээ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
