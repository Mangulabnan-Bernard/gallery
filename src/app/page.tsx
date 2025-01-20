import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc (model.id),
  });
  

  return (
    <main>
      <div className="flex justify-center gap-4 mb-6">
        {/* Button for "All Photos" */}
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            All Photos
          </button>
        </Link>

        {/* Button for "Favorites" */}
      </div>
    

      <div className="flex flex-wrap gap-4 justify-center">

 
        {images.map((image) => (
          <div
            key={image.id}
            className="w-48 overflow-hidden border-2 border-black cursor-pointer flex flex-col items-center"
           
          >
             {/* ulet " */}
             
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                width={222}
                height={223}
                className="object-cover w-full h-48"
                />
            <div className="mt-2 text-center text-sm font-medium">{image.name}</div>
            </div>
        ))}
      </div>
    </main>
  );
}
