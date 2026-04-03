import "./globals.css";

export const metadata = {
  title: "Artisan & Oak — Тавилга сэргээн засварлалт",
  description: "Tавилга сэргээн засварлалт",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
