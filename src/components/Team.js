import { useContext } from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { MenuContext } from "../pages/DemoOne";

const teams = [
    { name: "Joe Antonio", position: "Founder CEO" },
    { name: "Daniel Emo", position: "Marketing" },
    { name: "Sarah Daeva", position: "Sales manager" },
    { name: "Toni Lana", position: "UI/UX Designer" }
];

const Teams = () => {
    const menuContext = useContext(MenuContext);

    return (<div id="team" className="content-center min-h-screen grid py-8 pt-8 pb-24" ref={menuContext.teamRef}>
        <h2 className="font-bold pb-8 text-center text-gray-800 text-2xl">
            <span className="font-light">Our</span> Team
        </h2>
        <div className="flex flex-wrap flex-row gap-24 justify-center">
            {
                teams.map((team, key) => (
                    <div key={key} className={`duration-150 ${menuContext.menuId === "team" ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
                        <div className="cursor-pointer flex group overflow-hidden relative rounded-full">
                            <img src={`https://tailone.tailwindtemplate.net/src/img/dummy/avatar${key+1}.png`} className="bg-indigo-100 duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-125 rounded-full" alt="Team" />
                            <div className="absolute bg-indigo-50 duration-500 group-hover:opacity-0 opacity-50 w-full h-full" />
                        </div>
                        <div className="my-2 text-center">
                            <p className="font-bold text-lg">{team.name}</p>
                            <p className="font-light text-gray-500">{team.position}</p>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <SiFacebook className="cursor-pointer duration-300 hover:text-indigo-400 text-xl" />
                            <SiInstagram className="cursor-pointer duration-300 hover:text-indigo-400 text-xl" />
                            <SiTwitter className="cursor-pointer duration-300 hover:text-indigo-400 text-xl" />                    
                        </div>
                    </div>
                ))
            }
        </div>
    </div>)
}

export default Teams;