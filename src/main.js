import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import initMetaballs from "metaballs-js";
import VueMq from 'vue3-mq'


const options = {
    numMetaballs: 50,
    minRadius: 5,
    maxRadius: 10,
    speed: 10.0,
    color: '#cdd7ce',
    backgroundColor: '#d6cdc3',
    interactive: false,
    useDevicePixelRatio: true
  }
   
  const cssSelector = '#canvasId'
  initMetaballs(cssSelector, options)


createApp(App).use(router, VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
}).mount('#app')
