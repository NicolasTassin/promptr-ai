// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";
import { connectToDb } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    newPrompt.save();
    return NextResponse.json(newPrompt, { status: 201 });
  } catch (error) {
    return NextResponse.json("Failed to create a new prompt", {
      message: error.message,
    });
  }
};
