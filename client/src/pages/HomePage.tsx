import LayoutPage from "../Layout/LayoutPage"
import Trebol from "../assets/components/Trebol"
import github from '../assets/githubicon.png'
import web from '../assets/webicon.png'
import linkedin from '../assets/linkedinicon.png'

const HomePage = () => {

  const links = [
    {
      name: "Github",
      url: "https://github.com/Ismaelnelro",
      icon: github
    },
    {
      name: "Linkedin",
      url: "https://github.com/rosas",
      icon: linkedin
    },
    {
      name: "Web",
      url: "https://github.com/ismael",
      icon: web
    }
  ]

  return (
    <LayoutPage>
      <div className="flex flex-col justify-center items-center w-full min-h-[350px] h-full  gap-3 mb-20">
        {links.map((net, index) => (
          <Trebol key={index} net={net} />
        ))}
      </div>
    </LayoutPage>
  )
}

export default HomePage