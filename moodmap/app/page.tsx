import NavigationBar from './components/NavigationBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <NavigationBar/>
      <main className="flex flex-col items-center justify-center min-h-screen p-8" style={{ background: 'var(--gradient)'}}>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">Moodmap</h1>
          <h2 className="text-xl md:text-2xl mt-2">Map your journies - Tell your stories</h2>
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
