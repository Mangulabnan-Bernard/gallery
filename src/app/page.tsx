import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function Images(){
       const user = await auth();
       if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model) => eq(model.userId, user.userId),
    orderBy: (model, {asc}) => asc (model.id),
    
  });
  return (
    <><div className="flex justify-center gap-4 mb-6">

    </div><div className="flex flex-wrap gap-4 justify-center">


        {images.map((image) => (
          <div
            key={image.id}
            className="w-48 overflow-hidden border-2 border-black cursor-pointer flex flex-col items-center"

          >
            {/* try 1" */}

            <img
              src={image.url}
              alt={`Image ${image.id}`}
              width={222}
              height={223}
              className="object-cover w-full h-48" />
            <div className="mt-2 text-center text-sm font-medium">{image.name}</div>
          </div>
        ))}
      </div></>
    
  );
}

export default async function HomePage() {
 
  

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2x1 text-center">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
