particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },

    color: {
      value: "#ffffff",
    },

    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        height: 100,
        width: 100,
      },
    },

    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        sync: false,
        opacity_min: 0.1,
      },
    },

    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        sync: false,
        size_min: 0.1,
      },
    },

    line_linked: {
      enable: true,
      distance: 150,
      width: 1,
      color: "#ffffff",
      opacity: 0.4,
    },

    move: {
      enable: true,
      speed: 6,
      random: false,
      straight: false,
      direction: "none",
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },

    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        speed: 3,
        opacity: 8,
      },

      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },

  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_repeat: "no-repeat",
    background_image: "",
    background_size: "cover",
    background_position: "50% 50%",
  },
});