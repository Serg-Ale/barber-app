import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 py-0 flex flex-row justify-between">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221c3d] w-fit">
            Confirmado
          </Badge>
          <h2>Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border-l border-solid border-secondary px-3 pl-8">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl font-bold">06</p>
          <p className="text-sm">08:30</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
