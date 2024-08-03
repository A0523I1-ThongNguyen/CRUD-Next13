"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";
const ViewDetail = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div className="h3 text-center text-info">loading...</div>;
  }

  return (
    <>
      <Link className="underline text-green-900" href={`/blogs`}>
        Go back
      </Link>
      <Card className="text-center">
        <Card.Header>
          <span className="underline">Tittle</span>: {data?.title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {" "}
          <span className="underline">Author</span>: {data?.author}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ViewDetail;
