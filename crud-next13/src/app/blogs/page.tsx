"use client";
import AppTable from "@/components/app-table";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const BlogsPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log("check data", data);

  if (isLoading) {
    return (
      <>
        <div className="h3 text-info text-center">Loading...</div>
      </>
    );
  }
  return (
    <>
      <div className="mt-4">
        <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []} />
      </div>
    </>
  );
};
export default BlogsPage;
