import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ДЛЯ БИЗНЕСА</span>
        <span className="text-gray-300">Туры под любой корпоративный запрос по всей России</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Находим идеальный тур под запрос вашей компании
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Вы оставляете заявку — мы подбираем лучшие варианты туров по всей России от проверенных операторов. Быстро, выгодно, без лишних звонков.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white">
          Оставить заявку на тур <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Как мы работаем
        </Button>
      </div>
    </section>
  )
}