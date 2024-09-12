import Image from "next/image"

export default function Skill(){
    const width = 100;
    const height = 100;
    return(
        <div className="flex flex-row">
            <div className=" flex flex-row bg-card mx-auto rounded-lg">
                <Image src={'image/javascript.svg'} width={width} height={height} alt="js" />
                <Image src={'image/typescript.svg'} width={width} height={height} alt="ts"/>
                <Image src={'image/nodejs.svg'} width={width} height={height} alt="nodejs"/>
                <Image src={'image/tailwind.svg'} width={width} height={height} alt="tailwind"/>
                <Image src={'image/kotlin.svg'} width={width} height={height} alt="kotlin"/>
            </div>
        </div>
    )
}