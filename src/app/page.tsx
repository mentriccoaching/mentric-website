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
  Play
} from 'lucide-react'

// Mock Goal Pipeline visualization component
function GoalPipeline() {
  const stages = [
    { name: 'Committed', color: 'bg-blue-500', goals: 2 },
    { name: 'Active', color: 'bg-violet-500', goals: 3 },
    { name: 'Flowing', color: 'bg-emerald-500', goals: 2 },
    { name: 'Natural', color: 'bg-amber-500', goals: 1 },
  ]

  const mockGoals = [
    { title: 'Lead weekly team standups with confidence', stage: 0 },
    { title: 'Delegate effectively to direct reports', stage: 0 },
    { title: 'Give constructive feedback in the moment', stage: 1 },
    { title: 'Active listening in 1:1 meetings', stage: 1 },
    { title: 'Manage energy throughout the day', stage: 1 },
    { title: 'Morning reflection practice', stage: 2 },
    { title: 'Weekly planning ritual', stage: 2 },
    { title: 'Daily inbox zero', stage: 3 },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">SA</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Sarah Anderson</p>
            <p className="text-xs text-gray-500">Leadership Development Journey</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            8 goals
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-500" />
            1 natural
          </span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {stages.map((stage, stageIndex) => (
          <div key={stage.name} className="flex-1 min-w-[160px]">
            {/* Stage header */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${stage.color}`} />
              <span className="text-xs font-medium text-gray-700">{stage.name}</span>
              <span className="text-xs text-gray-400">{stage.goals}</span>
            </div>
            
            {/* Goals in stage */}
            <div className="space-y-2">
              {mockGoals
                .filter(g => g.stage === stageIndex)
                .map((goal, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
                  >
                    {goal.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Feature card component
function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ElementType
  title: string
  description: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    violet: 'bg-violet-100 text-violet-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
  }

  return (
    <div className="group">
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-powered coaching platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
                Goals shouldn't just be done.{' '}
                <span className="text-primary-600">They should become natural.</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most coaching software tracks whether goals are complete. Mentric tracks whether they're becoming second nature — because sustainable change is about transforming behaviours, not ticking boxes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
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

            {/* Right: Pipeline visualization */}
            <div className="lg:pl-8">
              <GoalPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              A different philosophy of goal tracking
            </h2>
            <p className="text-lg text-gray-600">
              Traditional coaching tools ask "is this goal done?". We ask "where is this person in their journey with this goal?" — because mastery happens in stages.
            </p>
          </div>

          {/* Journey stages explanation */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                stage: 'Committed',
                icon: Target,
                color: 'blue',
                description: 'The coachee has committed to the goal. It takes conscious effort and deliberate practice.',
              },
              {
                stage: 'Active',
                icon: Zap,
                color: 'violet',
                description: 'The behaviour is becoming more consistent. Less resistance, but still requires attention.',
              },
              {
                stage: 'Flowing',
                icon: TrendingUp,
                color: 'emerald',
                description: 'The new behaviour feels natural in familiar contexts. Confidence is building.',
              },
              {
                stage: 'Natural',
                icon: CheckCircle,
                color: 'amber',
                description: 'The behaviour is now second nature. It happens automatically, even under pressure.',
              },
            ].map((item, index) => (
              <div key={item.stage} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-0.5 bg-gray-200 -z-10" />
                )}
                
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center mb-4`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.stage}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Everything you need to coach effectively
            </h2>
            <p className="text-lg text-gray-600">
              Mentric brings together goal tracking, session management, AI insights, and analytics in one seamless platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            <FeatureCard
              icon={Target}
              title="Dynamic Goal Journeys"
              description="Create custom journey stages for each coachee. Track progression through stages, not just completion percentages."
              color="blue"
            />
            <FeatureCard
              icon={Calendar}
              title="Session Management"
              description="Book sessions, sync with Zoom and Teams, and keep everything organised in one place. No more juggling calendars."
              color="violet"
            />
            <FeatureCard
              icon={Sparkles}
              title="AI Session Intelligence"
              description="Automatically transcribe sessions and generate insights, action items, and summaries. Your AI-powered coaching assistant."
              color="emerald"
            />
            <FeatureCard
              icon={BarChart3}
              title="Coaching Analytics"
              description="See the full picture with dashboards that show progress across all your coachees, sessions, and goals."
              color="amber"
            />
            <FeatureCard
              icon={MessageSquare}
              title="In-App Messaging"
              description="Keep conversations with coachees in context. Share resources, check in between sessions, and maintain momentum."
              color="blue"
            />
            <FeatureCard
              icon={FileText}
              title="Resource Sharing"
              description="Build your library of coaching resources and share them with coachees at exactly the right moment."
              color="violet"
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Built for coaches who believe in lasting change
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're an independent coach building your practice or an organisation running coaching programmes at scale, Mentric gives you the tools to make every coaching relationship count.
              </p>
              
              <div className="space-y-4">
                {[
                  'Track the journey, not just the destination',
                  'AI that augments your coaching, never replaces it',
                  'One platform for sessions, goals, and insights',
                  'Beautiful, intuitive interface you\'ll enjoy using',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock session completion UI */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Session Complete</p>
                  <p className="text-xs text-gray-500">AI insights generated</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs font-medium text-blue-700 mb-2">Session Overview</p>
                  <p className="text-sm text-blue-900">
                    Productive session focused on delegation challenges. Sarah showed strong self-awareness about her tendency to micromanage and identified specific triggers.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {['Delegation', 'Trust', 'Team dynamics', 'Letting go'].map((topic) => (
                      <span key={topic} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Action Items</p>
                  <div className="space-y-2">
                    {[
                      'Delegate the Q2 report entirely to James',
                      'Practice the "ask, don\'t tell" approach in 1:1s',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to transform your coaching practice?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join coaches and organisations who are making lasting change possible with Mentric.
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Talk to Us
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
