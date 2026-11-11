import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function Home() {
  const listings = await prisma.listing.findMany();

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {listings.map((listing) => (
          <div key={listing.id} className="group cursor-pointer">
            <div className="aspect-square relative overflow-hidden rounded-xl">
              <img src={listing.imageSrc} alt="Listing" className="object-cover h-full w-full group-hover:scale-110 transition" />
            </div>
            <div className="font-semibold text-lg mt-2">{listing.locationValue}</div>
            <div className="font-light text-neutral-500">{listing.category}</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">{listing.price} €</div>
              <div className="font-light">par nuit</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}