"use client"

// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3c/Logo_CS_Sedan_Ardennes_-_2022.svg/1200px-Logo_CS_Sedan_Ardennes_-_2022.svg.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop navigation - visible on medium screens and up */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/classement" className="text-gray-700 hover:text-blue-600 font-medium">
              Classement
            </Link>
            <Link href="/calendrier" className="text-gray-700 hover:text-blue-600 font-medium">
              Calendrier
            </Link>
            <Link href="/joueurs" className="text-gray-700 hover:text-blue-600 font-medium">
              Joueurs
            </Link>
          </nav>

          {/* Mobile menu button - visible on small screens */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation - conditionally visible */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pb-3">
              <Link 
                href="/classement" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Classement
              </Link>
              <Link 
                href="/calendrier" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Calendrier
              </Link>
              <Link 
                href="/joueurs" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Joueurs
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;