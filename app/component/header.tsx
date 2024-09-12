import Image from "next/image"

export default function Header(){
    return(
        <header className="flex flex-row mt-7 mb-72 mx-5 gap-4">
            <div className="">
                <Image className="rounded-md transition ease-in-out delay-200" src={'/image/profile.jpg'} width={300} height={300} alt="profile"/>
            </div>
            <h1 className="flex items-center ml-32 text-3xl">Hi, My Name is Hilman Azkia Gibran <br /> IT Enthusiast <br /> CCIT-FTUI Student And Asia E University <br />
            Majoring At Information Communication and Technology</h1>
        </header>
    )
}