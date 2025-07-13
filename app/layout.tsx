// app/layout.tsx
import "./globals.css"; // must match your globals file

export const metadata = {
  title: "ASPIRE Project",
  description: "Austrian Study on Post-Intervention Recovery and Employment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
