import "./globals.css";

export const metadata = {
  title: "POS System",
  description: "Next.js POS System",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
