export const metadata = {
  title: "Detail blog",
  description: "this is the detail blog page",
};

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
