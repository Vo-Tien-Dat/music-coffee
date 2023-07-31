import { GetStaticProps, GetStaticPropsContext } from "next";
export interface PostListProps {
  posts: any[];
}

export async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    posts: [...data],
  };
}

export default async function PostListPage() {
  const data = await getData();
  const { posts }: any = data;
  console.log(posts);
  return (
    <div className="h-full w-full px-16 py-8">
      <div className="flex flex-col">
        {posts?.map((post: any, index: number) => {
          return (
            <div className="flex flex-row" key={index}>
              {post.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
