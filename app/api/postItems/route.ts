import dbConnect from "../../../config/db";
import PostItem from "../../../models/PostItem";

dbConnect();

export async function GET() {
  // return all PostItem model data exept "-__v"
  const postItems = await PostItem.find().select("-__v");
  return Response.json(postItems);
}

export async function POST(request: Request) {
  const postItem = await request.json();
  try {
    const savedItem = await new PostItem({ ...postItem }).save();
    return new Response(JSON.stringify(savedItem), {
      headers: {
        "Content-type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ messaje: "Server error" }), {
      status: 500,
    });
  }
}
