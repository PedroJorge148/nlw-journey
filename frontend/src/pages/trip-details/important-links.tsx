import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition">
              https://www.airbnb.com.br/rooms/104700011asdasdasdasdasd
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        {/* <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition">
              https://www.airbnb.com.br/rooms/104700011asdasdasdasdasd
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div> */}
      </div>
      <button
        className="flex w-full justify-center items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium hover:bg-zinc-7 00 transition"
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  )
}