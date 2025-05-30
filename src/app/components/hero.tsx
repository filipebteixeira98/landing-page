import Image from 'next/image'

import ArrowWIcon from '@/assets/icons/arrow-w.svg'
import cursorImage from '@/assets/images/cursor.png'
import messageImage from '@/assets/images/message.png'

export function Hero() {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 1.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
              One Task
              <br /> at a Time
            </h1>
            <Image
              src={cursorImage}
              alt=""
              height="200"
              width="200"
              className="absolute"
            />
            <Image
              src={messageImage}
              alt=""
              height="200"
              width="200"
              className="absolute"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
