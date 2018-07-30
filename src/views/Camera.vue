<template>
  <div class="camera-view">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="actions-menu">
      <div class="slide">
        <div class="image"></div>
        <div class="image"></div>
        <div class="image"></div>
        <div class="image"></div>
        <div class="image"></div>
      </div>
      <div class="buttons">
        <div class="flash">
          <span class="material-icons">flash_auto</span>
        </div>
        <div class="take">
          <span class="material-icons md-ligth">panorama_fish_eye</span>
        </div>
        <div class="flip">
          <span class="material-icons md-ligth">switch_camera</span>
        </div>
      </div>
      <div class="text">
        <span>Hold, for video, tap for photo</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'camera',
};
</script>

<style>
.camera-view {
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  max-width: 540px;
  height: 800px;
  overflow: hidden;
  color: white;
  text-align: center;
}

.actions-menu {
  position: fixed;
  bottom: calc(17%);
  left: 0;
  margin: auto;
  width: 100%;
  height: 160px;
  z-index: 10px;
  max-width: 540px;
}

.actions-menu .slide {
  width: 100%;
  height: 80px;
  display: block;
}

.actions-menu .slide .image{
  width: 18%;
  padding: 2%;
  display: inline-block;
  border: 1px solid white;
  height: 100%;
}

.actions-menu .buttons {
  width: 100%;
  height: 40px;
  display: block;
  position: relative;
}

.actions-menu .buttons .flash {
  width: 30%;
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}

.actions-menu .buttons .flash span {
  padding-top: 5%;
}

.actions-menu .buttons .take {
  width: 40%;
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.actions-menu .buttons .take span {
  padding-top: 5%;
}

.actions-menu .buttons .flip {
  width: 30%;
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.actions-menu .buttons .flip span {
  padding-top: 5%;
}

.actions-menu .text {
  width: 100%;
  height: 20px;
  display: block;
  font-size: 14px;
}
</style>
