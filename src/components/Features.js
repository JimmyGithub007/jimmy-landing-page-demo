import { useContext } from "react";
import { DiResponsive } from "react-icons/di";
import { SiAntdesign, SiMaterialui, SiReact, SiStyledcomponents, SiTailwindcss } from "react-icons/si"
import { MenuContext } from "../pages/DemoOne";

const features = [
    { name: "ReactJS", icon: <SiReact className="w-12 h-12" />, duration: 150 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" />, duration: 200 },
    { name: "Styled Components", icon: <SiStyledcomponents className="w-12 h-12" />, duration: 300 },
    { name: "Material UI", icon: <SiMaterialui className="w-12 h-12" />, duration: 500 },
    { name: "Ant Design", icon: <SiAntdesign className="w-12 h-12" />, duration: 700 },
    { name: "Responsive design", icon: <DiResponsive className="w-12 h-12" />, duration: 1000 }
];

const Features = () => {
    const menuContext = useContext(MenuContext);

    return (<div id="features" className="bg-gray-200 content-center min-h-screen grid pb-24 pt-12" ref={menuContext.featuresRef}>
        <h2 className="font-bold pb-8 text-center text-gray-800 text-2xl">
            <span className="font-light">Our</span> Features
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
            {
                features.map((feature, key) => (
                    <div key={key} className={`duration-${feature.duration} ${menuContext.menuId === "features" ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
                        <div className="bg-white cursor-pointer duration-100 hover:-translate-y-2 max-w-xs p-10 rounded-[20px] shadow-md">
                            <div className="bg-indigo-500 flex h-16 items-center justify-center mb-8 rounded-xl shadow-md text-white w-16">
                                {feature.icon}
                            </div>
                            <h4 className="font-semibold text-xl text-dark mb-3">
                                {feature.name}
                            </h4>
                            <p className="text-body-color">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>)
}

export default Features;