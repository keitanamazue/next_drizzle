import { CreatePost, DeletePost } from "@/app/action";
import { db } from "@/db/db";
import { posts } from "@/db/schema";

export default async function Page() {
  const data = await db.select().from(posts);

  console.log({ "💩💩💩💩💩💩": data });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <form action={CreatePost} className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mr-2"
          name="title"
        />

        <input
          type="text"
          placeholder="Content"
          className="border p-2 mr-2"
          name="content"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Post
        </button>
      </form>
      <form action={DeletePost}>
        <ul>
          {data.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center mb-2"
            >
              <input type="hidden" name="id" value={task.id} />
              <span>タイトル: {task.title}</span>
              <span>コンテンツ: {task.content}</span>
              <div>
                <button
                  className="bg-red-500 text-white p-2 mr-2"
                  type="submit"
                >
                  Delete
                </button>
                <button className="bg-yellow-500 text-white p-2" type="submit">
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
