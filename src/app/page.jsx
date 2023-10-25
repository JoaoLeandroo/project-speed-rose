import Image from 'next/image'


export default function Home() {
  return (
    <main className='mt-28 max-w-[1920px] m-auto text-center relative -z-[1] min-h-screen'>
          <div className='flex items-center flex-wrap justify-center h-[300px]'>
            <div className='w-2/4 max_1024:w-full'>
              <h1 className='text-white text-6xl font-bold max_1024:text-4xl'>Speed iRose <br /> Seu Rose PvP</h1>
            </div>
            <div>
              <Image
                className='img-main m-auto rounded-lg mt-6 max_1024:w-[80%]'
                src={'/junon.png'}
                width={500}
                height={500}
              />
            </div>
          </div>
    </main>
  )
}
