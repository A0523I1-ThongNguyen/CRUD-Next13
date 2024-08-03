// "use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="font-sora overflow-y-auto overflow-x-hidden text-white h-screen px-4 py-4 bg-gradient-to-b from-purple-900 to-purple-400 border border-2 border-gray-500">
        <section className="blog-intro">
          <div className="container">
            <h1 className="block h3 text-center mb-5 shadow-md text-amber-700 blog-title">
              Welcome to My Blog
            </h1>
            <p className="blog-description">
              This blog page is simply a blog management page with CRUD (Create,
              Read, Update, Delete) function. Click on{" "}
              <span className="text-blue-200 font-bold">
                <Link href="/blogs">Here</Link>
              </span>{" "}
              if you want to manage this blog page.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
