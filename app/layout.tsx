// app/layout.tsx
export const metadata = {
  title: "Noesis",
  description: "A recursive reflection engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
