import Link from "next/link"
import Image from "next/image"

export default function Nav(){
    return(
        <nav className="flex flex-row items-center justify-between p-3 bg-navbar">
            <div className="text-text ml-5">
                <p>Profile</p>
            </div>
            <div className="flex flex-row text-red-500 gap-3">
                <Link className="p-1 hover:bg-card rounded-md transition ease-in-out delay-100" href={'https://facebook.com/yournameyea'}>
                    <Image src={'/image/facebook.svg'} height={50} width={50} alt="facebook"/>
                </Link>
                <Link className="p-1 hover:bg-card rounded-md transition ease-in-out delay-100" href={'https://github.com/KianaKun'}>
                    <Image src={'/image/github.svg'} height={50} width={50} alt="github"/>
                </Link>
                <Link className="p-1 hover:bg-card rounded-md transition ease-in-out delay-100" href={'https://www.linkedin.com/in/hilmanazkia/'}>
                    <Image src={'/image/linkedin.svg'} height={50} width={50} alt="linkedin"/>
                </Link>
            </div>
        </nav>
    )
}
