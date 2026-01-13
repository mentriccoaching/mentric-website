import Link from 'next/link'
import { 
  Target, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Sparkles,
  Calendar,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  ArrowRight,
  Lightbulb,
  Heart,
  Trophy,
  Video,
  ClipboardCheck
} from 'lucide-react'

// Goal Pipeline Preview - styled like the actual platform
function GoalPipelinePreview() {
  const stages = [
    { name: 'Curious', icon: Lightbulb, color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { name: 'Committed', icon: Target, color: 'purple', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { name: 'Active', icon: Zap, color: 'amber', bgColor: 'bg-amber-100', textColor: 'text-amber-600' },
    { name: 'Flowing', icon: Heart, color: 'pink', bgColor: 'bg-pink-100', textColor: 'text-pink-600' },
    { name: 'Natural', icon: Trophy, color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' },
  ]

  const goals = [
    { stage: 0, title: 'Improve public speaking', confidence: 25 },
    { stage: 0, title: 'Learn time management', confidence: 15 },
    { stage: 1, title: 'Build leadership presence', confidence: 45 },
    { stage: 1, title: 'Strategic thinking', confidence: 40 },
    { stage: 2, title: 'Difficult conversations', confidence: 65 },
    { stage: 2, title: 'Executive presence', confidence: 70 },
    { stage: 3, title: 'Delegate effectively', confidence: 82 },
    { stage: 4, title: 'Active listening', confidence: 95 },
    { stage: 4, title: 'Decision making', confidence: 100 },
  ]

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Goals</h3>
          <p className="text-xs text-gray-500">Drag goals between stages to track progress</p>
        </div>
        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">
          <Target className="w-3 h-3" />
          <span className="text-xs font-medium">9 Active</span>
        </div>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {stages.map((stage, stageIndex) => {
          const Icon = stage.icon
          const stageGoals = goals.filter(g => g.stage === stageIndex)
          
          return (
            <div key={stage.name} className="flex-1 min-w-[120px]">
              <div className="bg-gray-50 rounded-lg border border-gray-100 h-full">
                <div className="p-2">
                  <div className="bg-white rounded-md border border-gray-100 p-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className={`p-1 rounded ${stage.bgColor}`}>
                          <Icon className={`h-3 w-3 ${stage.textColor}`} />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{stage.name}</span>
                      </div>
                      <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                        {stageGoals.length}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-2 pb-2 space-y-1.5">
                  {stageGoals.map((goal, i) => (
                    <div key={i} className="bg-white rounded-md border border-gray-100 p-2">
                      <p className="text-[11px] font-medium text-gray-800 mb-1.5 line-clamp-2">{goal.title}</p>
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${goal.confidence}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-gray-500">{goal.confidence}%</span>
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

// Session Report Preview
function SessionReportPreview() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Session Complete</p>
          <p className="text-xs text-gray-500">AI insights generated</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-violet-50 rounded-lg p-3">
          <p className="text-[10px] font-semibold text-violet-700 uppercase tracking-wide mb-1">Overview</p>
          <p className="text-xs text-violet-900 leading-relaxed">
            Productive session on delegation. Sarah showed strong self-awareness about her tendency to micromanage.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Topics</p>
          <div className="flex flex-wrap gap-1.5">
            {['Delegation', 'Trust', 'Team dynamics'].map((topic) => (
              <span key={topic} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Action Items</p>
          <div className="space-y-1.5">
            {['Delegate Q2 report to James', 'Practice "ask don\'t tell" in 1:1s'].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Analytics Preview
function AnalyticsPreview() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">Analytics</p>
          <p className="text-xs text-gray-500">Last 30 days</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'Coachees', value: '12', color: 'blue' },
          { label: 'Sessions', value: '28', color: 'violet' },
          { label: 'Goals Progressed', value: '15', color: 'green' },
          { label: 'Hours Coached', value: '42', color: 'amber' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded-lg p-2 text-center">
            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
            <p className="text-[10px] text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="h-16 flex items-end justify-around gap-1 px-2">
        {[40, 65, 45, 80, 60, 75, 90].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-500 to-violet-500 rounded-t"
            style={{ height: `${height}%` }}
          />
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
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
  }

  const colors = colorClasses[color]

  return (
    <div className={`bg-white rounded-2xl border ${colors.border} p-6 h-full`}>
      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
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
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
              The coaching platform for 
              <span className="text-blue-600"> lasting change</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Help your coachees build habits that stick. Track goal progression, capture session insights with AI, and see the full picture of every coaching relationship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/for-coaches"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero images - overlapping cards */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              <div className="md:col-span-2">
                <GoalPipelinePreview />
              </div>
              <div className="space-y-4">
                <SessionReportPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Buckets */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Everything you need to coach effectively
            </h2>
            <p className="text-lg text-gray-600">
              Goals, sessions, and insights — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <FeatureBucket
              icon={Target}
              title="Goal Journeys"
              description="Track not just what goals are done, but where each coachee is in their journey with each goal."
              features={[
                'Visual pipeline with custom stages',
                'Drag-and-drop goal progression',
                'Confidence tracking over time',
                'Milestone celebrations'
              ]}
              color="blue"
            />
            <FeatureBucket
              icon={Calendar}
              title="Sessions"
              description="Book, run, and document coaching sessions without the admin headache."
              features={[
                'Zoom and Teams integration',
                'AI-powered transcription',
                'Automatic session summaries',
                'Action item tracking'
              ]}
              color="violet"
            />
            <FeatureBucket
              icon={BarChart3}
              title="Insights"
              description="See the full picture with analytics that show what's actually working."
              features={[
                'Progress dashboards',
                'Coaching hours tracking',
                'Goal stage distribution',
                'Coachee engagement metrics'
              ]}
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* How it works - Goal Journey explanation */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Goals move through stages
            </h2>
            <p className="text-lg text-gray-600">
              Sustainable change happens in stages. Mentric tracks where each coachee is in their journey — from first commitment to natural habit.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Curious', icon: Lightbulb, color: 'blue', desc: 'Exploring the idea' },
              { name: 'Committed', icon: Target, color: 'purple', desc: 'Ready to work on it' },
              { name: 'Active', icon: Zap, color: 'amber', desc: 'Practising consistently' },
              { name: 'Flowing', icon: Heart, color: 'pink', desc: 'Becoming easier' },
              { name: 'Natural', icon: Trophy, color: 'green', desc: 'Second nature' },
            ].map((stage, i) => {
              const colorMap: Record<string, string> = {
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                amber: 'bg-amber-100 text-amber-600',
                pink: 'bg-pink-100 text-pink-600',
                green: 'bg-green-100 text-green-600',
              }
              
              return (
                <div key={stage.name} className="text-center">
                  <div className={`w-12 h-12 rounded-xl ${colorMap[stage.color]} flex items-center justify-center mx-auto mb-3`}>
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">{stage.name}</h3>
                  <p className="text-xs lg:text-sm text-gray-500">{stage.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>AI-powered</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Let AI handle the notes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Connect Fireflies to automatically transcribe your sessions. Mentric's AI generates summaries, extracts action items, and captures key insights — so you can be fully present in the conversation.
              </p>
              <ul className="space-y-3">
                {[
                  'Automatic session transcription',
                  'AI-generated summaries and key points',
                  'Action items extracted and tracked',
                  'Talk time analysis',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <AnalyticsPreview />
            </div>
          </div>
        </div>
      </section>

      {/* For Coaches & Organisations */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Coaches */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Coaches</h3>
              <p className="text-gray-600 mb-6">
                Stop juggling spreadsheets and calendars. Get everything about each client in one place, with AI doing the admin work.
              </p>
              <Link
                href="/for-coaches"
                className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* For Organisations */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Organisations</h3>
              <p className="text-gray-600 mb-6">
                Run coaching programmes at scale with the visibility you need. Manage coaches, track outcomes, and prove ROI.
              </p>
              <Link
                href="/for-organisations"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to transform your coaching?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join coaches and organisations who are making lasting change possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}