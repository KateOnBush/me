import {ISourceOptions} from "@tsparticles/engine/types";

const options: ISourceOptions = {
    "autoPlay": true,
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
        "enable": true,
        "zIndex": 0
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
        "detectsOn": "window",
        "events": {
            "onClick": {
                "enable": true,
                "mode": ["slow"]
            },
            "onDiv": {
                "enable": false,
                "mode": [],
            },
            "onHover": {
                "enable": true,
                "mode": ["grab"],
            },
            "resize": {
                "delay": 500,
                "enable": true
            }
        },
        "modes": {
            "trail": {
                "delay": 1,
                "pauseOnStop": false,
                "quantity": 1
            },
            "attract": {
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
            },
            "bounce": {
                "distance": 400,
                "duration": 0.5,
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
            },
            "bubble": {
                "distance": 200,
                "duration": 0.4,
                "mix": false
            },
            "connect": {
                "distance": 80,
                "links": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 100,
                "links": {
                    "blink": true,
                    "consent": true,
                    "opacity": 0.5
                }
            },
            "push": {
                "default": true,
                "groups": [],
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4,
                "factor": 10,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-in-out-expo"
            },
            "slow": {
                "factor": 0.05,
                "radius": 2000,
                "duration": 0.4,
                "speed": 1,
                "maxSpeed": 50,
            },
            "light": {
                "area": {
                    "gradient": {
                        "start": {
                            "value": "#ffffff"
                        },
                        "stop": {
                            "value": "#000000"
                        }
                    },
                    "radius": 1000
                },
                "shadow": {
                    "color": {
                        "value": "#000000"
                    },
                    "length": 2000
                }
            }
        }
    },
    "manualParticles": [],
    "particles": {
        "bounce": {
            "horizontal": {
                "value": 1
            },
            "vertical": {
                "value": 1
            }
        },
        "collisions": {
            "absorb": {
                "speed": 2
            },
            "bounce": {
                "horizontal": {
                    "value": 1
                },
                "vertical": {
                    "value": 1
                }
            },
            "enable": false,
            "maxSpeed": 50,
            "mode": "bounce",
            "overlap": {
                "enable": true,
                "retries": 0
            }
        },
        "color": {
            "value": "#fff",
            "animation": {
                "h": {
                    "count": 0,
                    "enable": false,
                    "speed": 20,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                },
                "s": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                },
                "l": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                }
            }
        },
        "effect": {
            "close": true,
            "fill": true,
            "options": {},
            "type": []
        },
        "move": {
            "angle": {
                "offset": 0,
                "value": 10
            },
            "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                    "x": 3000,
                    "y": 3000
                }
            },
            "center": {
                "x": 50,
                "y": 50,
                "mode": "percent",
                "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "right",
            "drift": 0,
            "enable": true,
            "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "inverse": false,
                "maxSpeed": 50
            },
            "path": {
                "clamp": true,
                "delay": {
                    "value": 0
                },
                "enable": false,
                "options": {}
            },
            "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "random": false,
            "size": false,
            "speed": {
                "max": 2,
                "min": 0.2
            },
            "spin": {
                "acceleration": 0,
                "enable": false
            },
            "straight": false,
            "trail": {
                "enable": false,
                "length": 10,
                "fill": {}
            },
            "vibrate": false,
            "warp": false
        },
        "number": {
            "density": {
                "enable": false,
                "width": 1920,
                "height": 1080
            },
            "value": 200
        },
        "opacity": {
            "value": 0.2,
            "animation": {
                "count": 0,
                "enable": false,
                "speed": 2,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
            }
        },
        "reduceDuplicates": false,
        "shadow": {
            "blur": 0,
            "color": {
                "value": "#000"
            },
            "enable": false,
            "offset": {
                "x": 0,
                "y": 0
            }
        },
        "shape": {
            "close": true,
            "fill": true,
            "options": {},
            "type": "circle"
        },
        "size": {
            "value": {
                "max": 3,
                "min": 0.1,
            },
            "animation": {
                "count": 0,
                "enable": false,
                "speed": 5,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
            }
        },
        "stroke": {
            "width": 0
        },
        "zIndex": {
            "value": 0
        },
        "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
                "count": 1,
                "factor": {
                    "value": 3
                },
                "rate": {
                    "value": {
                        "min": 4,
                        "max": 9
                    }
                },
                "sizeOffset": true,
                "particles": {}
            }
        },
        "roll": {
            "darken": {
                "enable": false,
                "value": 0
            },
            "enable": false,
            "enlighten": {
                "enable": false,
                "value": 0
            },
            "mode": "vertical",
            "speed": 25
        },
        "tilt": {
            "value": 0,
            "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
            },
            "direction": "clockwise",
            "enable": false
        },
        "twinkle": {
            "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
            },
            "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
            }
        },
        "wobble": {
            "distance": 5,
            "enable": false,
            "speed": {
                "angle": 50,
                "move": 10
            }
        },
        "life": {
            "count": 0,
            "delay": {
                "value": 0,
                "sync": false
            },
            "duration": {
                "value": 0,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
            },
            "direction": "clockwise",
            "path": false
        },
        "orbit": {
            "animation": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
                "value": 45
            },
            "width": 1
        },
        "links": {
            "blink": false,
            "color": {
                "value": "#fff"
            },
            "consent": false,
            "distance": 100,
            "enable": false,
            "frequency": 1,
            "opacity": 1,
            "shadow": {
                "blur": 5,
                "color": {
                    "value": "#000"
                },
                "enable": false
            },
            "triangles": {
                "enable": false,
                "frequency": 1
            },
            "width": 1,
            "warp": false
        },
        "repulse": {
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
        }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "smooth": false,
    "style": {},
    "themes": [],
    "zLayers": 100,
    "emitters": {
        "autoPlay": true,
        "fill": true,
        "life": {
            "wait": false
        },
        "rate": {
            "quantity": 1,
            "delay": 7
        },
        "shape": {
            "options": {},
            "replace": {
                "color": false,
                "opacity": false
            },
            "type": "square"
        },
        "startCount": 0,
        "size": {
            "mode": "percent",
            "height": 0,
            "width": 0
        },
        "position": {
            "x": -5,
            "y": 55
        }
    },
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": true
        }
    }
};

export default options;