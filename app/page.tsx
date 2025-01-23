import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Academia</h1>
          <p className="text-xl mb-8">Join our virtual study groups and excel in your academic journey</p>
          <Link href="/register" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Collaborative Learning</h3>
              <p>Connect with peers and learn together in our virtual study groups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p>Get access to experienced tutors and mentors who can guide you through challenging topics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
              <p>Study at your own pace with our flexible scheduling options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"Academia has transformed my study habits. The collaborative environment and expert guidance have significantly improved my grades."</p>
              <p className="font-semibold">- Sarah J., Computer Science Student</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"I love the flexibility Academia offers. It allows me to balance my studies with my part-time job effectively."</p>
              <p className="font-semibold">- Mike T., Business Major</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm font-normal">/month</span></p>
              <ul className="mb-6 text-left">
                <li className="mb-2">✓ Access to study groups</li>
                <li className="mb-2">✓ Basic scheduling tools</li>
                <li className="mb-2">✓ Limited chat support</li>
              </ul>
              <Link href="/register" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Get Started
              </Link>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center transform scale-105">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-4">$19.99<span className="text-sm font-normal">/month</span></p>
              <ul className="mb-6 text-left">
                <li className="mb-2">✓ All Basic features</li>
                <li className="mb-2">✓ Advanced scheduling tools</li>
                <li className="mb-2">✓ 24/7 chat support</li>
                <li className="mb-2">✓ Access to recorded sessions</li>
              </ul>
              <Link href="/register" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="mb-6 text-left">
                <li className="mb-2">✓ All Pro features</li>
                <li className="mb-2">✓ Custom integrations</li>
                <li className="mb-2">✓ Dedicated account manager</li>
                <li className="mb-2">✓ Personalized study plans</li>
              </ul>
              <Link href="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

