<template lang="html">
  <div class="home-private">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <div class="nav-menu">
        <div class="nav-menu top">
          <router-link :to="{ name: 'chats'}">
            <div class="back">
              <span class="material-icons">search</span>
            </div>
          </router-link>
          <div class="image">
            <img src="../assets/logo.png">
          </div>
          <div class="user">
            {{user}}
          </div>
          <div class="camera">
            <span class="material-icons">videocam</span>
          </div>
          <div class="call">
            <span class="material-icons">phone</span>
          </div>
          <div class="more">
            <span class="material-icons">more_vert</span>
          </div>
        </div>
        <div class="body-private">
          <div class="chat" v-for="message in messages">
            <div :class="{ from: message.From === 'Contact', to: message.From === 'You' }">
              <span>{{message.Text}} &nbsp; </span>
              <span>{{message.Hour}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PrivateMessaging from '../services/privateChat'
export default {
  name: 'privateChat',
  mounted() {
    this.user = this.$route.params.User;
    let id = this.$route.params.Id;
    this.getPrivateChat(id);
  },
  data() {
    return {
      user: '',
      messages: {},
    }
  },
  methods: {
    getPrivateChat(id) {
      PrivateMessaging.getChat(id)
        .then(data => {
          console.log(data);
          this.messages = data.Messages;
        })
        .catch(error => {
          console.log(error);
          alert(error);
        })
    },
  }
}
</script>

<style lang="css">
.home-private {
  font-family: 'Open Sans', sans-serif;
  max-width: 540px;
  max-height: 800px;
  overflow: auto;
  height: 800px;
}

.home-private .nav-menu {
  height: 48px;
  width: 100%;
  max-width: 540px;
  background-color: #025A41;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.home-private .nav-menu .top {
  height: 48px;
  width: 100%;
  color: white;
}

.home-private .nav-menu .top a {
  text-decoration: none;
  color: white;
}

.home-private .nav-menu .top .back {
  width: 10%;
  display: inline-block;
  text-align: center;
  float: left;
  padding-top: 2%;
}

.home-private .nav-menu .top .image {
  width: 10%;
  display: inline-block;
  text-align: center;
  position: relative;
  float: left;
  border-radius: 50%;
  background-color: white;
  padding-top: 8%;
}

.home-private .nav-menu .top .image img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
}

.home-private .nav-menu .top .user {
  width: 50%;
  display: inline-block;
  max-height: 100%;
  padding-top: 5px;
  padding-left: 10px;
  font-weight: bold;
}

.home-private .nav-menu .top .camera {
  width: 10%;
  display: inline-block;
  max-height: 100%;
  font-size: 18px;
  padding-top: 1%;
}

.home-private .nav-menu .top .call {
  width: 10%;
  display: inline-block;
  max-height: 100%;
  font-size: 18px;
  padding-top: 1%;
}

.home-private .nav-menu .top .more {
  width: 10%;
  display: inline-block;
  max-height: 100%;
  font-size: 18px;
  padding-top: 1%;
}

.home-private .nav-menu .top::after {
  clear: both;
	content: '';
	display: block;
}

.body-private {
  margin-top: 48px;
  width: 100%;
  height: 800px;
  background-color: #DCD1BD;
}

.body-private .chat {
  display: block;
}

.body-private .chat .from {
  background-color: white;
  padding-top: 5%;
  padding-left: 2%;
  padding-bottom: 5%;
  float: left;
  width: 60%;
  margin-top: 2%;
}

.body-private .chat .to {
  background-color: #AAC59D;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 2%;
  margin-top: 2%;
  float: right;
  width: 60%;
}
</style>
