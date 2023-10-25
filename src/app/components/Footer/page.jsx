import Link from 'next/link'
import { BsFacebook, BsInstagram, BsDiscord } from 'react-icons/bs'
import Image from 'next/image'

export default function Footer() {
    return(
        <footer className="max-w-[1920px] w-full m-auto mt-5 flex flex-wrap justify-around p-3 max_1024:gap-3 max_1024:items-center max_1024:justify-center">
            <div className='max-w-[300px] max_1024:text-center'>
                <p className='text-white'>ROSE Online é um MMORPG 3D gratuito. Registre-se gratuitamente, baixe o jogo, junte-se a nós e explore esse mundo repleto de maravilhas.</p>
            </div>

            <div className='max_1024:border-b-8'>
                <Link href={'/'}>
                    <Image
                        className='m-auto max_1024:hidden'
                        src={'/logo.png'}
                        width={100}
                        height={100}
                        alt='Logo Speed Irose'
                        title='Speed iRose Online'
                    />
                </Link>
            </div>

            <div className='flex gap-3'>
                <Link href={'/'}>
                    <BsFacebook size={30} color='white'/>
                </Link>
                <Link href={'/'}>
                    <BsInstagram size={30} color='white'/>
                </Link>
                <Link href={'/'}>
                    <BsDiscord size={30} color='white'/>
                </Link>
            </div>
        </footer>
    )
}