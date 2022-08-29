import Particles from "react-tsparticles";
import config from "./config";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={config}
        />
    )
}

export default ParticlesBackground;