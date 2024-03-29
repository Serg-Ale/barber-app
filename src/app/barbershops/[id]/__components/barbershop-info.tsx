"use client";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace("/");
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          onClick={handleBackClick}
          variant={"outline"}
          size={"icon"}
          className="z-50 absolute top-4 left-4"
        >
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="z-50 absolute top-4 right-4"
            >
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{ objectFit: "cover" }}
          className="opacity-85"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold ">{barbershop.name}</h1>

        <div className="flex items-center gap-2 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (432 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
