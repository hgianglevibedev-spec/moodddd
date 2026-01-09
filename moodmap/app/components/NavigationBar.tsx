import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center text-white absolute top-0 z-10">
      <div className="logo">
        <Link href="/" className="logo-font">Moodmap</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="navbartext">Home</Link>
        <Link href="/library" className="navbartext">Library</Link>
        <Link href="/pricing" className="navbartext">Pricing</Link>
        <Link href="/blog" className="navbartext">Blog</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="navbartext">Log In</Link>
        <Link href="/signup" className="btn-secondary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
