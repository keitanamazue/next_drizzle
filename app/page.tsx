"use client";
import { useState } from "react";

const insertUser = async (userData: {
  name: string;
  email: string;
  discriminator: string;
}) => {
  try {
    const response = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 400) {
        console.error("Validation error:", errorData.validateError);
      } else if (response.status === 409) {
        console.error("Unique constraint error:", errorData.constraintError);
      } else {
        console.error("Unexpected error:", errorData.error);
      }
    } else {
      const result = await response.json();
      console.log("User inserted successfully:", result.data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discriminator, setDiscriminator] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await insertUser({ name, email, discriminator });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Discriminator"
        value={discriminator}
        onChange={(e) => setDiscriminator(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
