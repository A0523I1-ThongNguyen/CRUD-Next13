export const metadata = {
  title: "Blog lists",
  description: "this is the blog lists",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
