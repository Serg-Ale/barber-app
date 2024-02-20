import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Prisma } from "@prisma/client";
import { Badge } from "./ui/badge";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: { service: true; barbershop: true };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isPast(booking.date);
  return (
    <Card>
      <CardContent className="px-0 py-0 flex">
        <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
          <Badge
            className="w-fit"
            variant={isBookingConfirmed ? "secondary" : "default"}
          >
            {isBookingConfirmed ? "Finalizado" : "Confirmado"}
          </Badge>
          <h2>{booking.service.name}</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={booking.barbershop.imageUrl} />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">{booking.barbershop.name}</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 border-l border-solid border-secondary">
          <p className="text-sm capitalize">
            {format(booking.date, "MMMM", { locale: ptBR })}
          </p>
          <p className="text-2xl font-bold">
            {format(booking.date, "dd", { locale: ptBR })}
          </p>
          <p className="text-sm">
            {format(booking.date, "hh:mm", { locale: ptBR })}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
