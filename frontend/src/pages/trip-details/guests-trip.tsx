import { CircleDashed, UserCog } from "lucide-react";

export function GuestsTrip() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Pedro Jorge
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              pedrojorge2011@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>

        {/* <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div> */}
      </div>
      <button
        className="flex w-full justify-center items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium hover:bg-zinc-7 00 transition"
      >
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  )
}