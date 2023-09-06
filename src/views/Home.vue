<template>
  
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-with-tagline-1.png" />
    <HelloWorld />
    <h2 class="responsive-title" :class="$mq"> "Change Your Thoughts. <br> Change Your Behavior. <br>
    Change the World."<br> -Tunde </h2>
  </div>
  <button @click="toggleSidebar">CONNECT</button>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.responsive-title.mobile { font-size: 1em; }
.responsive-title.desktop { font-size: 3em; color: red; }
img{
  left:50;
  top:10;
  max-width:30%
}
h2.responsive-title.desktop { font-size: 3em; color: red; 
  text-align: center top
}
h2.responsive-title.mobile { font-size: 1em; }
button {
  transition-duration: 0.4s;
  padding: 14px 40px;
  background-color: black ;
  color: pink;
  border-radius: 12px;
}

button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

</style>

