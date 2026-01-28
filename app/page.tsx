import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-rose/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Carnation Tour Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-brand-red tracking-tight">
              Carnation Tour
            </span>
          </div>
          <a
            href="https://carnation-tour.vercel.app"
            className="text-sm font-medium text-brand-rose hover:text-brand-red transition-colors"
          >
            웹사이트 방문하기
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden min-h-[900px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Guide helping elderly couple"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/90 text-white text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
              부모님을 위한 프리미엄 도쿄 여행
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
              부모님께 드리는 <br />
              <span className="text-brand-rose">가장 따뜻한 여행</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 drop-shadow-sm max-w-lg">
              5070 세대의 건강과 취향을 고려한 맞춤형 효도 관광.
              <br />
              전문 가이드와 케어 서비스로 안전하고 편안한 여정을 선물하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://carnation-tour.vercel.app"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-red text-white text-lg font-semibold hover:bg-brand-rose transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group border border-white/10"
              >
                여행 상품 보러가기
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-cream/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 <span className="text-brand-red">카네이션 투어</span>인가요?
            </h2>
            <p className="text-gray-600">
              일반 패키지 여행과는 다른, 부모님만을 위한 세심한 배려가 준비되어 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-brand-red" />}
              title="안전 헬스케어"
              description="여행 중 발걸음 하나하나까지, 전문 인솔자가 부모님의 컨디션을 실시간으로 체크합니다."
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-brand-red" />}
              title="맞춤형 도쿄 일정"
              description="많이 걷지 않아도 충분히 즐거운, 중장년층에게 최적화된 편안한 동선과 명소."
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-brand-red" />}
              title="엄선된 식사와 휴식"
              description="소화가 잘 되는 건강식 위주의 식단과 피로를 풀어주는 품격 있는 숙소를 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-brand-rose/10 mt-auto">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p className="mb-4 text-brand-red font-bold text-lg">Carnation Tour</p>
          <p>© 2026 Carnation Tour. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-rose/10 hover:shadow-md hover:border-brand-rose/30 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
