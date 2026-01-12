import Link from 'next/link'
import { 
  Target, 
  Users, 
  BarChart3,
  Building2,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Settings,
  UserPlus,
  TrendingUp,
  FileText,
  Calendar
} from 'lucide-react'

// Mock Programme Dashboard
function MockProgrammeDashboard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-medium text-gray-900">Leadership Development 2024</p>
          <p className="text-sm text-gray-500">Q1 Cohort • 24 participants</p>
        </div>
        <span className="inline-flex items-center rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Active
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Coaches', value: '6', icon: Users },
          { label: 'Coachees', value: '24', icon: UserPlus },
          { label: 'Sessions', value: '89', icon: Calendar },
          { label: 'Goals', value: '142', icon: Target },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded-lg p-3 text-center">
            <stat.icon className="w-4 h-4 text-gray-400 mx-auto mb-1" />
            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Progress by stage */}
      <div className="mb-6">
        <p className="text-xs font-medium text-gray-700 mb-3">Goal Progress Across Programme</p>
        <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-gray-100">
          <div className="bg-blue-500" style={{ width: '25%' }} title="Committed" />
          <div className="bg-violet-500" style={{ width: '35%' }} title="Active" />
          <div className="bg-emerald-500" style={{ width: '28%' }} title="Flowing" />
          <div className="bg-amber-500" style={{ width: '12%' }} title="Natural" />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>Committed (25%)</span>
          <span>Active (35%)</span>
          <span>Flowing (28%)</span>
          <span>Natural (12%)</span>
        </div>
      </div>

      {/* Coach list preview */}
      <div>
        <p className="text-xs font-medium text-gray-700 mb-3">Coaches</p>
        <div className="space-y-2">
          {[
            { name: 'Sarah Mitchell', coachees: 4, sessions: 16 },
            { name: 'David Chen', coachees: 4, sessions: 14 },
            { name: 'Emma Williams', coachees: 4, sessions: 18 },
          ].map((coach) => (
            <div key={coach.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium">
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-sm font-medium text-gray-900">{coach.name}</span>
              </div>
              <div className="text-xs text-gray-500">
                {coach.coachees} coachees • {coach.sessions} sessions
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mock Analytics View
function MockEnterpriseAnalytics() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-medium text-gray-900">Organisation Analytics</p>
          <p className="text-sm text-gray-500">All programmes • Last 90 days</p>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Goal Completion Rate</span>
          </div>
          <p className="text-2xl font-semibold text-blue-900">73%</p>
          <p className="text-xs text-blue-600">+12% vs last quarter</p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-700">Session Attendance</span>
          </div>
          <p className="text-2xl font-semibold text-emerald-900">94%</p>
          <p className="text-xs text-emerald-600">+3% vs last quarter</p>
        </div>
      </div>

      {/* Engagement chart placeholder */}
      <div className="mb-6">
        <p className="text-xs font-medium text-gray-700 mb-3">Coaching Engagement Over Time</p>
        <div className="h-24 bg-gray-50 rounded-lg flex items-end justify-around px-2 pb-2">
          {[45, 52, 48, 61, 58, 72, 68, 75, 71, 82, 78, 85].map((height, i) => (
            <div
              key={i}
              className="w-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      {/* Programme comparison */}
      <div>
        <p className="text-xs font-medium text-gray-700 mb-3">Programme Performance</p>
        <div className="space-y-3">
          {[
            { name: 'Leadership Development', progress: 73, color: 'blue' },
            { name: 'New Manager Coaching', progress: 68, color: 'violet' },
            { name: 'Executive Coaching', progress: 81, color: 'emerald' },
          ].map((prog) => (
            <div key={prog.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-700">{prog.name}</span>
                <span className="text-gray-500">{prog.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${prog.color}-500 rounded-full`}
                  style={{ width: `${prog.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ForOrganisations() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>For Organisations</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
              Coaching programmes that 
              <span className="text-blue-600"> deliver results</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Run coaching at scale without losing the personal touch. Mentric gives L&D teams the visibility they need while giving coaches the tools to do their best work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/for-coaches"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                For Independent Coaches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: BarChart3,
                title: 'Visibility into coaching ROI',
                description: 'See exactly how coaching is impacting your organisation with analytics that track goal progression, session engagement, and programme outcomes.',
              },
              {
                icon: Users,
                title: 'Manage coaches and coachees at scale',
                description: 'Onboard coaches, assign coachees to programmes, and manage coaching relationships across your entire organisation from one dashboard.',
              },
              {
                icon: Shield,
                title: 'Enterprise-grade security',
                description: 'Your coaching data is sensitive. Mentric is built with enterprise security standards, role-based access controls, and data privacy at its core.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Management */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Programme management made simple
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create coaching programmes, assign coaches and participants, and track progress — all from a single, intuitive dashboard.
              </p>
              
              <div className="space-y-4">
                {[
                  'Create multiple programmes with different structures',
                  'Assign coaches to coachees with flexible matching',
                  'Set programme goals and track collective progress',
                  'Export reports for stakeholders and leadership',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <MockProgrammeDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Analytics that prove impact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Move beyond session counts. Mentric shows you how coaching is actually changing behaviour — with goal progression data, engagement metrics, and programme comparisons.
              </p>
              
              <div className="space-y-4">
                {[
                  'Track goal progression across all programmes',
                  'Compare performance between cohorts',
                  'Measure coach effectiveness and utilisation',
                  'Generate executive reports with real outcomes',
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
            <div className="lg:order-1">
              <MockEnterpriseAnalytics />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Everything you need to run coaching at scale
            </h2>
            <p className="text-lg text-gray-600">
              Mentric combines the tools coaches love with the visibility organisations need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Multi-tenant architecture', desc: 'Separate organisations with their own branding and settings' },
              { icon: Users, title: 'Role-based access', desc: 'Admins, coaches, and coachees each see what they need' },
              { icon: Target, title: 'Goal journey tracking', desc: 'Track behaviour change, not just task completion' },
              { icon: Sparkles, title: 'AI session insights', desc: 'Automatic transcription and AI-generated summaries' },
              { icon: Calendar, title: 'Integrated scheduling', desc: 'Zoom and Teams integration for seamless sessions' },
              { icon: FileText, title: 'Resource management', desc: 'Central library of coaching materials to share' },
              { icon: BarChart3, title: 'Programme analytics', desc: 'Dashboards showing progress across cohorts' },
              { icon: Settings, title: 'Custom configuration', desc: 'Tailor journey stages and workflows to your needs' },
              { icon: Shield, title: 'Enterprise security', desc: 'SOC 2 Type II compliant with SSO support' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to transform your coaching programmes?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              See how Mentric can help your organisation run coaching that creates lasting change.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
