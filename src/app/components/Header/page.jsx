import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return(
        <header className="w-screen bg-header-color fixed top-0">
            <nav className="m-auto max-w-[1920px] w-full h-20 flex justify-around">
                <figure>
                    <Link href={"/"}>
                        <Image
                            src={'/logo.png'}
                            width={150}
                            height={150}
                            alt="Logo Speed iRose Online"
                            title="Speed iRose Online"
                        />
                    </Link>
                </figure>

                <ul className="h-full flex justify-center items-center gap-3 text-base text-white font-semibold">
                    <li className="hover:underline hover:underline-offset-4"><Link href={'/'}>Donated</Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href={'/'}>Download</Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href={'/'}>Cadastre-se</Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href={'/'}>Conta</Link></li>
                </ul>
            </nav>
        </header>
    )
}