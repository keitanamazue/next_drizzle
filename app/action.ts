"use server";

import { db } from "@/db/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const CreateUser = async (formData: FormData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const usersRes = await db.insert(users).values(rawFormData).returning({
    name: users.name,
    email: users.email,
  });
};

export const CreatePost = async (formData: FormData) => {
  const rawFormData = {
    userId: "82a0c42e-02c8-4012-9e94-666516c62881",
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const usersRes = await db.insert(posts).values(rawFormData).returning({
    userId: posts.userId, // 修正: user_id -> userId
    title: posts.title,
    content: posts.content, // 修正: email -> content
  });

  formData.set("title", "");
  formData.set("content", "");
  redirect("/");
};

export const DeletePost = async (formData: FormData) => {
  const deleteId = formData.get("id");

  const deletedId = await db
    .delete(posts)
    .where(eq(posts.id, deleteId as string)) // 型キャストを追加
    .returning({ deletedId: posts.id });

  redirect("/");

  return deletedId;
};
