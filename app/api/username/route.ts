import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/db";

export async function GET(req: NextRequest) {
  const userId: string | null = req.nextUrl.searchParams.get("userId");
  let user;
  if (userId) {
    user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
      },
    });
    console.log(user?.email[0]);
    const firstLetter = user?.email[0];

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let word = "";
    for (let i = 0; i < 4; i++) {
      const random = letters[Math.floor(Math.random() * letters.length)];
      word += random;
    }
    const username = firstLetter + word;

    const uniqueUsername = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
      },
    });
    return NextResponse.json(uniqueUsername);
  }
}
