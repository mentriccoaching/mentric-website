import Link from 'next/link'
import { ArrowRight, Target, Heart, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
              We believe coaching should create lasting change
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Not just completed tasks. Not just ticked boxes. Real, sustainable behaviour change that sticks long after the coaching engagement ends.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              The problem with most coaching software
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Most coaching platforms treat goals like todo items. Set a goal, work on it, mark it done. Move to the next one. But anyone who's worked in coaching knows that's not how real change happens.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A goal isn't truly achieved when someone does it once. It's achieved when that new behaviour becomes second nature — when it happens automatically, even under pressure, without conscious effort.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                That's the insight behind Mentric. We track not just whether goals are done, but where someone is in their journey with each goal. Are they still consciously working at it? Is it becoming easier? Has it become natural?
              </p>
              <p className="text-gray-600 leading-relaxed">
                This isn't just a different way of tracking goals. It's a different philosophy of what coaching success looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">
            What we believe
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Behaviour change takes time
              </h3>
              <p className="text-gray-600">
                New habits don't form overnight. They move through stages — from conscious effort to automatic response. Our tools should reflect that reality, not fight against it.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Coaches know best
              </h3>
              <p className="text-gray-600">
                AI should augment coaching, never replace it. We build tools that save coaches time on admin so they can focus on what matters: the human connection that makes coaching work.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Simple beats complex
              </h3>
              <p className="text-gray-600">
                The best tools stay out of the way. We obsess over making Mentric intuitive and enjoyable to use, so coaches and coachees can focus on the work, not the software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Want to learn more?
            </h2>
            <p className="text-gray-400 mb-8">
              We'd love to show you how Mentric can transform your coaching practice.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
