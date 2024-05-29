// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { ISourceOptions } from "tsparticles-engine";

export const SITE_TITLE = "Khoj";
export const SITE_DESCRIPTION =
    "Khoj blog and thoughts for a better future with AI.";

export const AUTHOR_METADATA = {
    saba: {
        name: "Saba Imran",
        bio: "Co-Founder, CTO. I like biking, hiking, and coding.",
        avatar: "https://avatars.githubusercontent.com/u/65192171?v=4",
        twitter: "https://twitter.com/sabaimran_go",
        github: "https://github.com/sabaimran",
    },
    debanjum: {
        name: "Debanjum Singh Solanky",
        bio: "Co-Founder, CEO. I travel, code, write.",
        avatar: "https://avatars.githubusercontent.com/u/6413477?v=4",
        twitter: "https://twitter.com/debanjum",
        github: "https://github.com/debanjum",
    },
    khoj: {
        name: "Khoj",
        bio: "Khoj is an application where people can have personalized AI that works for them.",
        avatar: "https://avatars.githubusercontent.com/u/134046886?s=200&v=4",
        twitter: "https://twitter.com/khoj_ai",
        github: "https://github.com/khoj-ai",
    },
};


export const background_config: ISourceOptions = {
    autoPlay: true,
    background: {
        color: {
            value: "#F9F5DE"
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle"
            },
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                    enable: false,
                    force: 0.5,
                    smooth: 10
                }
            },
            resize: {
                delay: 0.5,
                enable: true
            }
        },
        modes: {
            trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1
            },
            attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 10
            },
            bounce: {
                distance: 200
            },
            bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: []
                }
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5
                },
                radius: 10
            },
            grab: {
                distance: 100,
                links: {
                    blink: false,
                    consent: false,
                    opacity: 1
                }
            },
            push: {
                default: true,
                groups: [],
                quantity: 4
            },
            remove: {
                quantity: 2
            },
            repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: []
                }
            },
            slow: {
                factor: 3,
                radius: 200
            },
            light: {
                area: {
                    gradient: {
                        start: {
                            value: "#ffffff"
                        },
                        stop: {
                            value: "#000000"
                        }
                    },
                    radius: 1000
                },
                shadow: {
                    color: {
                        value: "#000000"
                    },
                    length: 2000
                }
            }
        }
    },
    manualParticles: [],
    particles: {
        bounce: {
            horizontal: {
                value: 1
            },
            vertical: {
                value: 1
            }
        },
        collisions: {
            absorb: {
                speed: 2
            },
            bounce: {
                horizontal: {
                    value: 1
                },
                vertical: {
                    value: 1
                }
            },
            enable: false,
            maxSpeed: 50,
            mode: "bounce",
            overlap: {
                enable: true,
                retries: 0
            }
        },
        color: {
            value: ["#1E1D1E", "#FAD705"],
            animation: {
                h: {
                    count: 0,
                    enable: false,
                    speed: 20,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                },
                s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                },
                l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0
                }
            }
        },
        effect: {
            close: true,
            fill: true,
            options: {},
            type: []
        },
        groups: {},
        move: {
            angle: {
                offset: 0,
                value: 90
            },
            attract: {
                distance: 200,
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000
                }
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50
            },
            path: {
                clamp: true,
                delay: {
                    value: 0
                },
                enable: false,
                options: {}
            },
            outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            },
            random: false,
            size: false,
            speed: 6,
            spin: {
                acceleration: 0,
                enable: false
            },
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fill: {}
            },
            vibrate: false,
            warp: false
        },
        number: {
            density: {
                enable: true,
                width: 3000,
                height: 2000
            },
            limit: 5000,
            value: 400
        },
        opacity: {
            value: 0.5,
            animation: {
                count: 0,
                enable: false,
                speed: 2,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none"
            }
        },
        reduceDuplicates: false,
        shadow: {
            blur: 0,
            color: {
                value: "#000"
            },
            enable: false,
            offset: {
                x: 0,
                y: 0
            }
        },
        shape: {
            close: true,
            fill: true,
            options: {},
            type: "circle"
        },
        size: {
            value: {
                min: 1,
                max: 8
            },
            animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none"
            }
        },
        stroke: {
            width: 0
        },
        zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1
        },
        destroy: {
            bounds: {},
            mode: "none",
            split: {
                count: 1,
                factor: {
                    value: 3
                },
                rate: {
                    value: {
                        min: 4,
                        max: 9
                    }
                },
                sizeOffset: true,
                particles: {}
            }
        },
        roll: {
            darken: {
                enable: false,
                value: 0
            },
            enable: false,
            enlighten: {
                enable: false,
                value: 0
            },
            mode: "vertical",
            speed: 25
        },
        tilt: {
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            enable: false
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            }
        },
        wobble: {
            distance: 5,
            enable: false,
            speed: {
                angle: 50,
                move: 10
            }
        },
        life: {
            count: 0,
            delay: {
                value: 0,
                sync: false
            },
            duration: {
                value: 0,
                sync: false
            }
        },
        rotate: {
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            path: false
        },
        orbit: {
            animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false
            },
            enable: false,
            opacity: 1,
            rotation: {
                value: 45
            },
            width: 1
        },
        links: {
            blink: false,
            color: {
                value: "#F8C481"
            },
            consent: false,
            distance: 150,
            enable: true,
            frequency: 1,
            opacity: 0.4,
            shadow: {
                blur: 5,
                color: {
                    value: "#000"
                },
                enable: false
            },
            polygon: {
                enable: false,
                frequency: 1
            },
            width: 1,
            warp: false
        },
        repulse: {
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1
        }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {
        width: "100%",
        height: "100vh",
        top: "0px",
    },
    themes: [],
    zLayers: 100,
    name: "Basic",
    motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true
        }
    }
}