import Link from "next/link"

export default function Header(){
    return(
        <nav className="flex flex-row items-center justify-between p-3 bg-slate-400">
            <div className="text-blue-600">
                <p>Profile</p>
            </div>
            <div className="flex flex-row text-red-500 gap-3">
                <Link href={'https://facebook.com/yournameyea'}>Facebook</Link>
                <Link href={'https://github.com/KianaKun'}>Github</Link>
            </div>
        </nav>
    )
}