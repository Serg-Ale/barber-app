import BookingItem from "@/components/booking-item";
import Header from "@/components/header";
import Search from "./_components/Search";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, usuário!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase text-gray-400 font-bold mb-3">
          agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
