import { Building2, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const recipients = [
  { name: "Алексей Петров", info: "Получено: +24 500 ₽", code: "P-52112", image: "/professional-man-portrait.png" },
  { name: "Мария Иванова", info: "Получено: +8 200 ₽", code: "P-52132", image: "/professional-woman-portrait.png" },
  { name: "ООО «Ромашка»", info: "Получено: +145 000 ₽", code: "P-52184", initials: "ОР", color: "bg-teal-600" },
  { name: "ИП Козлов Д.А.", info: "Получено: +32 700 ₽", code: "P-52114", initials: "ИП", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Building2 className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Приём платежей от клиентов</h3>
      <p className="mb-4 text-sm text-gray-400">Принимайте деньги от физлиц и юрлиц на один счёт — карты, СБП, банковские переводы</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {recipients.map((recipient, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {recipient.image ? (
                  <AvatarImage src={recipient.image || "/placeholder.svg"} alt={recipient.name} />
                ) : null}
                <AvatarFallback className={`${recipient.color || "bg-gray-600"} text-white text-xs`}>
                  {recipient.initials ||
                    recipient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{recipient.name}</p>
                <p className="text-xs text-gray-500">{recipient.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{recipient.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Новый плательщик
        </Button>
      </div>
    </div>
  )
}