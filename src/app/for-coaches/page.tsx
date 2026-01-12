import Link from 'next/link'
import { 
  Target, 
  Calendar, 
  Sparkles, 
  Users, 
  FileText,
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3
} from 'lucide-react'

function FeatureSection({ 
  title, 
  description, 
  features,
  imageSide = 'right',
  mockUI
}: { 
  title: string
  description: string
  features: string[]
  imageSide?: 'left' | 'right'
  mockUI: React.ReactNode
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${imageSide === 'left' ? 'lg:flex-row-reverse' : ''}`}>
      <div className={imageSide === 'left' ? 'lg:order-2' : ''}>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={imageSide === 'left' ? 'lg:order-1' : ''}>
        {mockUI}
      </div>
    </div>
  )
}

// Mock CoacheeHub UI
function MockCoacheeHub() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-medium">
            JM
          </div>
          <div>
            <p className="font-medium text-gray-900">James Mitchell</p>
            <p className="text-sm text-gray-500">Senior Product Manager</p>
          </div>
        </div>
        <span className="inline-flex items-center rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Active
        </span>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-semibold text-gray-900">6</p>
          <p className="text-xs text-gray-500">Goals</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-semibold text-gray-900">12</p>
          <p className="text-xs text-gray-500">Sessions</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-semibold text-gray-900">2</p>
          <p className="text-xs text-gray-500">Natural</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-4">
        {['Overview', 'Goals', 'Sessions', 'Resources'].map((tab, i) => (
          <button
            key={tab}
            className={`px-3 py-2 text-sm font-medium border-b-2 -mb-px ${
              i === 0
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content preview */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Next Session</p>
              <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
            </div>
          </div>
          <button className="text-xs font-medium text-blue-600">Join</button>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Target className="w-4 h-4 text-violet-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Goal progressed</p>
              <p className="text-xs text-gray-500">"Stakeholder communication" → Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock Session Intelligence UI
function MockSessionIntelligence() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="font-medium text-gray-900">AI Session Insights</p>
          <p className="text-sm text-gray-500">Generated from session transcript</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-violet-50 rounded-lg p-4">
          <p className="text-xs font-medium text-violet-700 mb-2">Session Overview</p>
          <p className="text-sm text-violet-900">
            Deep dive into career trajectory planning. Client expressed clarity about wanting to move toward a leadership role but uncertainty about timeline and skill gaps.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-700 mb-2">Talk Time Distribution</p>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Coach</span>
                <span className="text-gray-900">35%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Coachee</span>
                <span className="text-gray-900">65%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-violet-500 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-700 mb-2">Key Questions Asked</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex items-start gap-2">
              <span className="text-amber-500">❓</span>
              "What would success look like in 18 months?"
            </p>
            <p className="flex items-start gap-2">
              <span className="text-amber-500">❓</span>
              "Who in your network has made a similar transition?"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock Analytics Dashboard
function MockAnalytics() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-medium text-gray-900">Practice Overview</p>
          <p className="text-sm text-gray-500">Last 30 days</p>
        </div>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600">
          <option>Last 30 days</option>
        </select>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Active Coachees', value: '12', color: 'blue' },
          { label: 'Sessions', value: '28', color: 'violet' },
          { label: 'Goals Progressed', value: '15', color: 'emerald' },
          { label: 'Hours Coached', value: '42', color: 'amber' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mock chart */}
      <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-around px-4 pb-4">
        {[40, 65, 45, 80, 60, 75, 55].map((height, i) => (
          <div
            key={i}
            className="w-8 bg-gradient-to-t from-blue-500 to-violet-500 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-around mt-2 text-xs text-gray-400">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  )
}

export default function ForCoaches() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-white -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>For Independent Coaches</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
              Your coaching practice, 
              <span className="text-violet-600"> elevated</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stop juggling spreadsheets, calendars, and note-taking apps. Mentric brings everything together in one beautiful platform — so you can focus on what you do best: coaching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-violet-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sound familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              'Spending more time on admin than actual coaching',
              'Scrambling to find notes before sessions',
              'No clear way to show clients their progress',
            ].map((problem, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24 lg:space-y-32">
          <FeatureSection
            title="Everything about each client, in one place"
            description="The Coachee Hub gives you a complete view of every coaching relationship. Goals, sessions, notes, resources — all connected and always up to date."
            features={[
              'See goal progress at a glance with the visual pipeline',
              'Access full session history and notes instantly',
              'Track what resources you\'ve shared',
              'Never lose context between sessions',
            ]}
            mockUI={<MockCoacheeHub />}
          />

          <FeatureSection
            title="AI that saves you hours every week"
            description="Connect with Fireflies to automatically transcribe your sessions. Mentric's AI generates summaries, action items, and insights — so you can stay present in the conversation."
            features={[
              'Automatic session transcription via Fireflies',
              'AI-generated session summaries and key points',
              'Action items extracted and tracked',
              'Talk time analysis and coaching insights',
            ]}
            imageSide="left"
            mockUI={<MockSessionIntelligence />}
          />

          <FeatureSection
            title="See how your practice is growing"
            description="Get a bird's-eye view of your coaching practice with analytics that actually matter. Track sessions, goal progression, and client engagement over time."
            features={[
              'Dashboard showing all your key metrics',
              'Session trends and coaching hours',
              'Goal progression across all clients',
              'Identify which clients need attention',
            ]}
            mockUI={<MockAnalytics />}
          />
        </div>
      </section>

      {/* Benefit List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              What you'll love about Mentric
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Calendar, title: 'Easy scheduling', desc: 'Book sessions with Zoom and Teams integration built in' },
                { icon: Target, title: 'Visual goal tracking', desc: 'Show clients exactly where they are on their journey' },
                { icon: Sparkles, title: 'AI assistance', desc: 'Let AI handle notes so you can be fully present' },
                { icon: MessageSquare, title: 'In-app messaging', desc: 'Keep conversations with clients in context' },
                { icon: FileText, title: 'Resource library', desc: 'Build and share your coaching resources' },
                { icon: BarChart3, title: 'Practice analytics', desc: 'Understand and grow your coaching business' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-violet-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to upgrade your practice?
            </h2>
            <p className="text-lg text-violet-100 mb-8">
              Join coaches who are spending less time on admin and more time making a difference.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-violet-600 shadow-sm hover:bg-violet-50 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
