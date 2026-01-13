import Link from 'next/link'
import { 
  Target, 
  Zap, 
  CheckCircle, 
  Sparkles,
  Calendar,
  Users,
  BarChart3,
  ArrowRight,
  Lightbulb,
  Heart,
  Trophy,
} from 'lucide-react'

// Compact Goal Pipeline Preview
function GoalPipelinePreview() {
  const stages = [
    { name: 'Curious', icon: Lightbulb, bgColor: 'bg-blue-100', textColor: 'text-blue-600', goals: ['Improve public speaking', 'Time management'] },
    { name: 'Committed', icon: Target, bgColor: 'bg-purple-100', textColor: 'text-purple-600', goals: ['Leadership presence', 'Strategic thinking'] },
    { name: 'Active', icon: Zap, bgColor: 'bg-amber-100', textColor: 'text-amber-600', goals: ['Difficult conversations'] },
    { name: 'Flowing', icon: Heart, bgColor: 'bg-pink-100', textColor: 'text-pink-600', goals: ['Delegate effectively'] },
    { name: 'Natural', icon: Trophy, bgColor: 'bg-green-100', textColor: 'text-green-600', goals: ['Active listening'] },
  ]

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200/80 p-3 w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-900">Goals</span>
          <span className="text-[10px] text-gray-400">Drag to progress</span>
        </div>
        <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-[10px] font-medium">
          <Target className="w-2.5 h-2.5" />
          7 Active
        </div>
      </div>
      
      <div className="flex gap-1.5">
        {stages.map((stage) => {
          const Icon = stage.icon
          return (
            <div key={stage.name} className="flex-1 min-w-0">
              <div className="bg-gray-50/80 rounded-lg p-1.5">
                <div className="bg-white rounded border border-gray-100 p-1.5 mb-1.5">
                  <div className="flex items-center gap-1">
                    <div className={`p-0.5 rounded ${stage.bgColor}`}>
                      <Icon className={`h-2.5 w-2.5 ${stage.textColor}`} />
                    </div>
                    <span className="text-[9px] font-medium text-gray-700 truncate">{stage.name}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {stage.goals.map((goal, i) => (
                    <div key={i} className="bg-white rounded border border-gray-100 p-1.5">
                      <p className="text-[8px] text-gray-700 leading-tight truncate">{goal}</p>
                      <div className="mt-1 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${30 + i * 25}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Floating Session Card
function SessionCard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-64">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">Session Complete</p>
          <p className="text-[10px] text-gray-500">AI insights ready</p>
        </div>
      </div>

      <div className="bg-violet-50 rounded-lg p-2.5 mb-3">
        <p className="text-[9px] font-semibold text-violet-600 uppercase tracking-wide mb-1">Summary</p>
        <p className="text-[11px] text-violet-900 leading-relaxed">
          Great progress on delegation. Identified key blockers and set clear next steps.
        </p>
      </div>

      <div className="space-y-1.5">
        {['Delegate Q2 report', 'Schedule team check-in'].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
            <span className="text-[10px] text-gray-600">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Analytics Mini Card
function AnalyticsCard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3 w-48">
      <div className="flex items-center gap-1.5 mb-2">
        <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
        <span className="text-[10px] font-semibold text-gray-900">This Month</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">12</p>
          <p className="text-[8px] text-gray-500">Sessions</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-emerald-600">+5</p>
          <p className="text-[8px] text-gray-500">Goals progressed</p>
        </div>
      </div>
      <div className="h-8 flex items-end gap-0.5">
        {[35, 50, 40, 65, 55, 70, 60].map((h, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

// Feature bucket component
function FeatureBucket({ 
  icon: Icon, 
  title, 
  description, 
  features,
  color
}: { 
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: 'blue' | 'violet' | 'emerald'
}) {
  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', check: 'text-blue-500' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200', check: 'text-violet-500' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200', check: 'text-emerald-500' },
  }

  const colors = colorClasses[color]

  return (
    <div className={`bg-white rounded-2xl border ${colors.border} p-6 h-full`}>
      <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className={`w-4 h-4 ${colors.check} flex-shrink-0 mt-0.5`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Compact */}
      <section className="relative pt-8 pb-6 lg:pt-12 lg:pb-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Copy */}
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                The coaching platform for{' '}
                <span className="text-blue-600">lasting change</span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                Help your coachees build habits that stick. Track goal progression, capture session insights with AI, and see the full picture of every coaching relationship.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/for-coaches"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right - Overlapping UI previews */}
            <div className="relative h-[320px] lg:h-[350px]">
              {/* Main pipeline - base layer */}
              <div className="absolute top-6 left-0 right-0 lg:right-[-20px]">
                <GoalPipelinePreview />
              </div>
              
              {/* Session card - floating top right */}
              <div className="absolute top-0 right-0 lg:right-[-10px] z-10 transform hover:scale-105 transition-transform">
                <SessionCard />
              </div>
              
              {/* Analytics card - overlapping bottom left of pipeline */}
              <div className="absolute bottom-[-10px] left-[-10px] lg:left-[-20px] z-10 transform hover:scale-105 transition-transform">
                <AnalyticsCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Buckets */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
              Everything you need to coach effectively
            </h2>
            <p className="text-gray-600">
              Goals, sessions, and insights — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            <FeatureBucket
              icon={Target}
              title="Goal Journeys"
              description="Track where each coachee is in their journey — not just whether goals are done."
              features={[
                'Visual pipeline with custom stages',
                'Drag-and-drop progression',
                'Confidence tracking',
              ]}
              color="blue"
            />
            <FeatureBucket
              icon={Calendar}
              title="Sessions"
              description="Book, run, and document sessions without the admin headache."
              features={[
                'Zoom & Teams integration',
                'AI transcription & summaries',
                'Action item tracking',
              ]}
              color="violet"
            />
            <FeatureBucket
              icon={BarChart3}
              title="Insights"
              description="See the full picture with analytics that matter."
              features={[
                'Progress dashboards',
                'Coaching hours tracking',
                'Engagement metrics',
              ]}
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Goal Journey Stages */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
              Goals move through stages
            </h2>
            <p className="text-gray-600">
              Sustainable change happens in stages. Track where each coachee is — from first commitment to natural habit.
            </p>
          </div>

          <div className="flex justify-center gap-3 lg:gap-6 max-w-3xl mx-auto overflow-x-auto pb-2">
            {[
              { name: 'Curious', icon: Lightbulb, color: 'bg-blue-100 text-blue-600', desc: 'Exploring' },
              { name: 'Committed', icon: Target, color: 'bg-purple-100 text-purple-600', desc: 'Ready' },
              { name: 'Active', icon: Zap, color: 'bg-amber-100 text-amber-600', desc: 'Practising' },
              { name: 'Flowing', icon: Heart, color: 'bg-pink-100 text-pink-600', desc: 'Easier' },
              { name: 'Natural', icon: Trophy, color: 'bg-green-100 text-green-600', desc: 'Habit' },
            ].map((stage) => (
              <div key={stage.name} className="text-center flex-shrink-0">
                <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-xl ${stage.color} flex items-center justify-center mx-auto mb-2`}>
                  <stage.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{stage.name}</h3>
                <p className="text-xs text-gray-500">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>AI-powered</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
              Let AI handle the notes
            </h2>
            <p className="text-gray-600 mb-8">
              Connect Fireflies to transcribe sessions automatically. Get AI summaries, action items, and insights — so you can be fully present.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {['Auto transcription', 'Session summaries', 'Action items', 'Talk time analysis'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-violet-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Coaches & Organisations */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200">
              <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Coaches</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stop juggling spreadsheets. Get everything about each client in one place, with AI handling the admin.
              </p>
              <Link href="/for-coaches" className="inline-flex items-center text-violet-600 text-sm font-medium hover:text-violet-700">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Organisations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Run coaching programmes at scale. Manage coaches, track outcomes, and prove ROI.
              </p>
              <Link href="/for-organisations" className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 lg:py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
              Ready to transform your coaching?
            </h2>
            <p className="text-gray-400 mb-6">
              Join coaches and organisations making lasting change possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
