<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <div class="nav-menu">
        <div class="nav-menu top">
          <div class="logo">
            <span>WhatsApp</span>
          </div>
          <div class="search">
            <span class="material-icons">search</span>
          </div>
          <div class="more">
            <span class="material-icons">more_vert</span>
          </div>
        </div>
        <div class="nav-menu down">
          <div class="camera">
            <a class="material-icons" @click="openCamera">camera_alt</a>
          </div>
          <div class="tabs">
            <ul>
              <li>
              <router-link :to="{name:'chats'}">
                <a @click="activeTabChats" v-bind:class="{ active: isActiveChats }">Chats</a>
              </router-link>
              </li>
              <li>
                <router-link :to="{name:'status'}">
                <a @click="activeTabStatus" v-bind:class="{ active: isActiveStatus }">Status</a>
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'calls'}">
                <a @click="activeTabCalls" v-bind:class="{ active: isActiveCalls }">Calls</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'principal',
  data() {
    return {
      isActiveChats: true,
      isActiveStatus: false,
      isActiveCalls: false,
    };
  },
  methods: {
    openCamera() {
      this.$router.push({ path: '/camera' })
    },
    activeTabChats() {
      this.isActiveChats = true;
      this.isActiveStatus = false;
      this.isActiveCalls = false;
      // this.$router.go(1);
    },
    activeTabStatus() {
      this.isActiveChats = false;
      this.isActiveStatus = true;
      this.isActiveCalls = false;
    },
    activeTabCalls() {
      this.isActiveChats = false;
      this.isActiveStatus = false;
      this.isActiveCalls = true;
    },
  },
};
</script>

<style>
.router-link-exact-active {
  color: white;
  text-decoration: none;
}

.home {
  font-family: 'Open Sans', sans-serif;
  max-width: 540px;
  max-height: 800px;
  overflow: auto;
}

.home .nav-menu {
  height: 80px;
  width: 100%;
  max-width: 540px;
  background-color: #025A41;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.home .nav-menu .top {
  height: 40px;
  width: 100%;
  color: white;
  position: relative;
}

.home .nav-menu .top .logo {
  width: 80%;
  display: inline-block;
  text-align: left;
  font-weight: 550;
  padding-left: 10px;
}

.home .nav-menu .top .search {
  width: 10%;
  display: inline-block;
  max-height: 100%;
  font-size: 18px;
  padding-top: 5px;
}

.home .nav-menu .top .more {
  width: 10%;
  display: inline-block;
}

.home .nav-menu .down {
  height: 40px;
  width: 100%;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  position: relative;
  box-shadow: 0 3px 3px #888888;
}

.home .nav-menu .down .camera {
  width: 10%;
  display: inline-block;
  padding-top: 10px;
  padding-left: 10px;
  float: left;
}

.home .nav-menu .down .camera:hover {
  cursor: pointer;
}


.home .nav-menu .down .tabs {
  width: 90%;
  display: inline-block;
  height: 100%;
  float: right;
}

.home .nav-menu .down .tabs a {
  text-decoration: none;
  color: white;
}

.home .nav-menu .down .tabs ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 13px;
}

.home .nav-menu .down .tabs ul li {
  display: inline-block;
  padding: 0 7%;
  padding-bottom: 2%;
}

.home .nav-menu .down .tabs ul li .active {
  border-bottom: 2px solid white;
  padding-bottom: 7.5px;
}
</style>
