import Image from 'next/image'
import clsx from 'clsx'
import image1 from '/public/images/photos/image1.png'
import image2 from '/public/images/photos/image2.png'
import image3 from '/public/images/photos/image3.png'
import image4 from '/public/images/photos/image4.png'
import image5 from '/public/images/photos/image5.png'

export default function PhotoReel() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2']
  return (
    <div className="py-10 max-sm:hidden">
      <div className="flex justify-center gap-2 overflow-hidden sm:gap-5">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[10/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
