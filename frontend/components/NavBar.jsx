import AboutPage from '@/app/about/page';
import Link from 'next/link';
import React from 'react';

function NavBar({item}) {
  return (
    <div>
      <header className="flex">
        <h1>Nav</h1>
        <Link href='/about'>About</Link>
      </header>
    </div>
  );
}

export default NavBar;
