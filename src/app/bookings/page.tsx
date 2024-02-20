import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/header";
import { db } from "@/lib/prisma";
import BookingItem from "@/components/booking-item";
import { isFuture, isPast } from "date-fns";

const BookingPage = async () => {
  // recuperar a sessão do usuário (ver se está logado ou não)
  const session = await getServerSession(authOptions);

  // se não estiver logado, redirecionar para página de login
  if (!session?.user) {
    redirect("/");
  }

  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: true,
      barbershop: true,
    },
  });

  const confirmedBookings = bookings.filter((booking) =>
    isFuture(booking.date)
  );
  const finishedBookings = bookings.filter((booking) => isPast(booking.date));

  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        <div>
          <h2 className="uppercase text-gray-400 text-sm font-bold mt-6 mb-3">
            Confirmados
          </h2>
          <div className="flex flex-col gap-3">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>

          <div>
            <h2 className="uppercase text-gray-400 text-sm font-bold mt-6 mb-3">
              Finalizados
            </h2>
            <div className="flex flex-col gap-3">
              {finishedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
