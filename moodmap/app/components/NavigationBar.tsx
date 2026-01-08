import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center text-white absolute top-0 z-10">
      <div className="logo">
        <Link href="/">Moodmap</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/library" className="hover:text-gray-300">Library</Link>
        <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:text-gray-300">Log In</Link>
        <Link href="/signup" className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
