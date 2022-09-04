@@ -0,0 +1,85 @@
<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  name: 'SidebarLink',
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>K</div>
        <div>L</div>
      </span>
      <span v-else>
        <div>Kediri</div>
        <div>Lagi</div>
      </span>
    </h1>

    <SidebarLink to="/dashboard" icon="fas fa-home">Dashboard</SidebarLink>
    <SidebarLink to="/alam" icon="fas fa-mountain">Alam/Buatan</SidebarLink>
    <SidebarLink to="/sejarah" icon="fas fa-landmark">Sejarah</SidebarLink>
    <SidebarLink to="/religi" icon="fas fa-mosque">Religi</SidebarLink>
    <SidebarLink to="/kuliner" icon="fas fa-utensils">Kuliner</SidebarLink>    
    <SidebarLink to="/pasar" icon="fas fa-store">Pasar/Mall</SidebarLink>    
    <SidebarLink to="/cafe" icon="fas fa-mug-hot">Cafe</SidebarLink>

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
  --sidebar-bg-color: #F4F5F9;
  --sidebar-item-hover: #a8dbcc;
  --sidebar-item-active: #62b99f;
}
</style>

<style scoped>
.nav-link {}
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);

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
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.5em;

  color: black;

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>