"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const phrases = [
    "IT Enthusiast",
    "Asia E University Student",
    "Majoring At ICT",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(phrases[currentPhraseIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < phrases[currentPhraseIndex].length) {
          setDisplayText(phrases[currentPhraseIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : 150); // Adjust typing and deleting speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <header className="flex flex-row mt-7 mb-72 mx-5 gap-4">
      <div className="flex p-4 rounded-lg">
        <Image
          className="rounded-md transition ease-in-out delay-200"
          src={'/image/profile.jpg'}
          width={300}
          height={300}
          alt="profile"
        />
      </div>
      <h1 className="flex flex-col ml-32 text-2xl md:text-1xl justify-center font-roboto">
        Hilman Azkia Gibran<br />
        <span className="">{displayText}</span> <br />
        
      </h1>
    </header>
  );
}
