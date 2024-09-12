"use client"
import Image from "next/image"
import { useState } from "react";

export default function Skill() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const width = 100;
    const height = 100;

    const skills = [
        { name: 'JavaScript', src: '/image/javascript.svg', description: 'JavaScript adalah bahasa pemrograman untuk pengembangan web yang dinamis. Digunakan di sisi klien dan server.' },
        { name: 'TypeScript', src: '/image/typescript.svg', description: 'TypeScript adalah superset dari JavaScript yang menambahkan pengetikan statis, meningkatkan pengembangan skala besar.' },
        { name: 'Node.js', src: '/image/nodejs.svg', description: 'Node.js adalah lingkungan runtime untuk JavaScript yang memungkinkan pengembangan aplikasi server-side menggunakan JavaScript.' },
        { name: 'Tailwind CSS', src: '/image/tailwind.svg', description: 'Tailwind CSS adalah framework CSS berbasis utility-first untuk membangun desain UI yang cepat dan efisien.' },
        { name: 'Kotlin', src: '/image/kotlin.svg', description: 'Kotlin adalah bahasa pemrograman modern yang kompatibel dengan Java, sering digunakan untuk pengembangan aplikasi Android.' }
    ];

    return (
        <div className="flex flex-col justify-center mt-10">
            <div className="mx-auto">
                <h2>Tech Stack</h2>
            </div>
            <div className="flex flex-row bg-gradient-to-tl from-navbar1 to-navbar mx-auto rounded-lg p-3 relative transition ease-in-out delay-300">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        className="relative mx-2"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <Image
                            className="cursor-pointer"
                            src={skill.src}
                            width={width}
                            height={height}
                            alt={skill.name.toLowerCase()}
                        />
                        {/* Floating Card muncul saat dihover */}
                        {hoveredSkill === skill.name && (
                            <div className="absolute top-[-180%] left-0 bg-white text-black p-3 rounded-lg shadow-lg w-52 z-10 bg-opacity-80">
                                <p><strong>{skill.name}</strong>: {skill.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
