import NavigationBar from './components/NavigationBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative" style={{ background: 'var(--gradient)' }}>
      <NavigationBar/>
      <main>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center text-white mt-20">
            <h1 className="text-5xl md:text-7xl font-bold">
              Map your journies <br />
              Tell your stories
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Create and share beautiful maps of your life's moments.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/get-started" className="btn-primary">Get started</Link>
              <Link href="#features" className="btn-secondary">Learn more</Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="bg-black py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Why Moodmap?</h2>
              <p className="text-gray-400 mt-2">All the tools you need to beautifully document your travels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-3xl font-bold text-white leading-tight">Interactive<br/>Mapping</h3>
                <p className="text-gray-400">
                  Add locations, draw routes, and customize your map. Your journey, your style.
                </p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-white leading-tight">Rich Journaling</h3>
                <p className="text-gray-400">
                  Bring your memories to life with photos, videos, and rich text entries for every step of the way.
                </p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-white leading-tight">Community &<br/>Sharing</h3>
                <p className="text-gray-400">
                  Share your adventures with friends, family, and community. Inspire and be inspired.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
