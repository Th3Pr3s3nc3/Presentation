import { Slide } from '../data/slides';

interface SlideRendererProps {
  slide: Slide;
  direction: 'next' | 'prev';
}

export default function SlideRenderer({ slide, direction }: SlideRendererProps) {
  const animationClass = direction === 'next'
    ? 'animate-slide-in-right'
    : 'animate-slide-in-left';

  return (
    <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} ${slide.textColor || 'text-white'} ${animationClass} relative`}>
      <BackgroundDecor type={slide.type} />
      <div className="w-full h-full flex items-center justify-center p-6 md:p-16 relative z-10">
        {slide.type === 'title' && <TitleSlide slide={slide} />}
        {slide.type === 'content' && <ContentSlide slide={slide} />}
        {slide.type === 'stats' && <StatsSlide slide={slide} />}
        {slide.type === 'quote' && <QuoteSlide slide={slide} />}
        {slide.type === 'list' && <ListSlide slide={slide} />}
        {slide.type === 'timeline' && <TimelineSlide slide={slide} />}
        {slide.type === 'closing' && <ClosingSlide slide={slide} />}
        {slide.type === 'split' && <SplitSlide slide={slide} />}
        {slide.type === 'grid' && <GridSlide slide={slide} />}
        {slide.type === 'map' && <MapSlide slide={slide} />}
      </div>
    </div>
  );
}

function BackgroundDecor({ type }: { type: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      {type === 'title' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white/5 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-white/5 -rotate-12" />
        </>
      )}
      {type === 'closing' && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/5" />
        </>
      )}
      {type === 'grid' && (
        <>
          <div className="absolute top-10 right-10 w-32 h-32 rounded-2xl border border-white/5 rotate-12" />
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-white/5" />
        </>
      )}
    </div>
  );
}

function SlideBadge({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium mb-4 opacity-80">
      {text}
    </div>
  );
}

function TitleSlide({ slide }: { slide: Slide }) {
  return (
    <div className="text-center max-w-4xl animate-fade-in-up">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Kibuga Investments Limited
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-orange-200">
          {slide.title}
        </span>
      </h1>
      <p className="text-xl md:text-2xl opacity-80 font-light">
        {slide.subtitle}
      </p>
      <div className="mt-12 flex items-center justify-center gap-3 opacity-50">
        <div className="w-16 h-px bg-current"></div>
        <div className="w-2 h-2 rounded-full bg-current"></div>
        <div className="w-16 h-px bg-current"></div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-50">
        <span>🇺🇬 Uganda</span>
        <span>•</span>
        <span>🛒 E-Commerce</span>
        <span>•</span>
        <span>📱 Digital Marketplace</span>
      </div>
    </div>
  );
}

function ContentSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-4xl w-full animate-fade-in-up">
      <SlideBadge text={slide.badge} />
      <h2 className="text-3xl md:text-5xl font-bold mb-6">{slide.title}</h2>
      <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">{slide.content}</p>
      {slide.items && (
        <ul className="space-y-3">
          {slide.items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-base md:text-lg opacity-90 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-current opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity"></span>
              <span>{typeof item === 'string' ? item : item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatsSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-5xl w-full animate-fade-in-up">
      <div className="text-center mb-10">
        <SlideBadge text={slide.badge} />
        <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {slide.stats?.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 md:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
            <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm opacity-70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-4xl text-center animate-fade-in-up">
      <div className="text-7xl md:text-9xl opacity-10 font-serif leading-none mb-2">"</div>
      <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-relaxed mb-8 -mt-8">
        {slide.quote}
      </blockquote>
      {slide.author && (
        <div className="flex items-center justify-center gap-3 opacity-70">
          <div className="w-8 h-px bg-current"></div>
          <cite className="text-lg md:text-xl not-italic font-medium">{slide.author}</cite>
          <div className="w-8 h-px bg-current"></div>
        </div>
      )}
    </div>
  );
}

function ListSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-4xl w-full animate-fade-in-up">
      <SlideBadge text={slide.badge} />
      <h2 className="text-3xl md:text-5xl font-bold mb-8">{slide.title}</h2>
      <div className="space-y-3">
        {slide.items?.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-lg opacity-90">{item}</span>
              </div>
            );
          }
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-2xl md:text-3xl w-10 text-center">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-4xl w-full animate-fade-in-up">
      <SlideBadge text={slide.badge} />
      <h2 className="text-3xl md:text-5xl font-bold mb-10">{slide.title}</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/20 to-transparent"></div>
        <div className="space-y-6">
          {slide.timeline?.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 md:gap-8 pl-12 md:pl-16 group"
            >
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-white/80 ring-4 ring-white/20 group-hover:ring-white/40 transition-all"></div>
              <div className="flex-shrink-0 w-12">
                <span className="text-sm font-mono opacity-60">{item.year}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm md:text-base opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SplitSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-5xl w-full animate-fade-in-up">
      <div className="text-center mb-10">
        <SlideBadge text={slide.badge} />
        <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
      </div>
      {slide.splitContent && (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl md:text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-base md:text-lg opacity-85 leading-relaxed italic">
              "{slide.splitContent.left}"
            </p>
          </div>
          {/* Vision */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔭</span>
              <h3 className="text-xl md:text-2xl font-bold">Our Vision</h3>
            </div>
            <ul className="space-y-3">
              {slide.splitContent.right.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm md:text-base opacity-85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function GridSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-5xl w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <SlideBadge text={slide.badge} />
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
        {slide.subtitle && (
          <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">{slide.subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {slide.gridItems?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-2xl md:text-3xl mb-2">{item.icon}</span>
            <span className="text-xs md:text-sm font-medium opacity-90">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-5xl w-full animate-fade-in-up">
      <div className="text-center mb-10">
        <SlideBadge text={slide.badge} />
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
        {slide.subtitle && (
          <p className="text-base md:text-lg opacity-70">{slide.subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {slide.countries?.map((country, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 md:p-5 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
              country.status === 'Active'
                ? 'bg-white/15 border-white/30 hover:bg-white/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <span className="text-3xl md:text-4xl">{country.flag}</span>
            <div>
              <h3 className="font-semibold text-lg">{country.name}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                country.status === 'Active'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-white/10 text-white/60 border border-white/10'
              }`}>
                {country.status === 'Active' ? '● Active' : '○ Planned'}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm opacity-60 italic">
          Uganda serves as the initial market and operational base for scalable regional expansion
        </p>
      </div>
    </div>
  );
}

function ClosingSlide({ slide }: { slide: Slide }) {
  return (
    <div className="text-center max-w-4xl animate-fade-in-up">
      <div className="text-5xl mb-6">🛒</div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-orange-200">
          {slide.title}
        </span>
      </h1>
      {slide.subtitle && (
        <p className="text-xl md:text-2xl opacity-80 mb-4">{slide.subtitle}</p>
      )}
      {slide.content && (
        <p className="text-lg opacity-50 mt-6">{slide.content}</p>
      )}
      <div className="mt-10 flex items-center justify-center gap-4">
        <div className="w-16 h-px bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-16 h-px bg-white/30"></div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-50">
        <span>kibuga.com</span>
        <span>•</span>
        <span>Kampala, Uganda</span>
      </div>
    </div>
  );
}
