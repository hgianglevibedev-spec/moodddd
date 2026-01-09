import NavigationBar from './components/NavigationBar';
import Link from 'next/link';
import { HeroBackground } from './components/ui/HeroBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <NavigationBar/>
      <HeroBackground />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
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
            <Link href="/learn-more" className="btn-secondary">Learn more</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
