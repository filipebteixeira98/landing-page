import Image from 'next/image'

import logoImage from '@/assets/images/logosaas.png'
import MenuIcon from '@/assets/icons/menu.svg'

export function Navbar() {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] blur-md"></div>
            <Image
              src={logoImage}
              alt="SaaS logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
