<template>
  <div  id="particles-js"></div>
</template>

<script>

const cfg = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: '#EAECED',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#EAECED',
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
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
};


export default {
  mounted() {
    /* eslint-disable */
    require('particles.js');
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS() {
       /* eslint-disable */
      particlesJS('particles-js', cfg);
    },
  },
};
</script>

<style lang="less" scoped>
    #particles {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;   //这个z-index 要是不设置 会对登录表单的点击产生干扰，会去抢风头，不好好做一个安静的背景。
        background-color: #26AFE3;
    }
</style>


