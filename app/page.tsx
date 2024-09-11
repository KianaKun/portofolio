import Nav from "@/app/component/nav"
import Header from "@/app/component/header"
import Skill from "@/app/component/skill"
import Experience from "@/app/component/experience"
import Portofolio from "@/app/component/portofolio"
import Footer from "@/app/component/footer"

export default function Page(){
  return(
    <>
      <Nav/>
      <Header/>
      <Skill/>
      <Experience/>
      <Portofolio/>
      <Footer/>
    </>
  )
}