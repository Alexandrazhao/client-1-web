<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>T</div>
      </span>
      <span v-else>Vida Tia</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">HOME</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-address-card">ABOUT</SidebarLink>
    <SidebarLink to="/aboutjanet" icon="fas fa-address-card">ABOUT JANET </SidebarLink>
    <SidebarLink to="/services" icon="fas fa-bell-concierge">SERVICES</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-question">FAQs</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-connectdevelop">CONNECT</SidebarLink>

    

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #9fac8f;
  --sidebar-item-hover: #e3e3e3 ;
  --sidebar-item-active: #e1d3cf ;
  
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  opacity:0.8;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
  font-family: 'Ghaitsa Personal Use', sans-serif;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

</style>
