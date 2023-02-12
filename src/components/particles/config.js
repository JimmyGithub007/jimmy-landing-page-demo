const config = {
    background: {
        color: {
            value: "#fff"
        },
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    fullScreen: {
        zIndex: -1
    },
    particles: {
        links: {
            color: {
                value: "#123"
            },
            distance: 150,
            enable: true,
            opacity: 0.4
        },
        move: {
            attract: {
                rotate: {
                    x: 600,
                    y: 1200
                }
            },
            enable: true,
            outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            }
        },
        number: {
            density: {
                enable: true
            }
        },
        opacity: {
            random: {
                enable: true
            },
            value: {
                min: 0.1,
                max: 0.5
            },
            animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1
            }
        },
        size: {
            random: {
                enable: true
            },
            value: {
                min: 0.1,
                max: 10
            },
            animation: {
                enable: true,
                speed: 20,
                minimumValue: 0.1
            }
        }
    }
}
export default config;