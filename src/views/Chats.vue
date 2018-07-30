<template lang="html">
  <div class="body">
    <div class="chat">
      <div class="content" v-for="chat in chats">
        <router-link :to="{ name: 'privateChat', params: {Id: chat.Id, User: chat.User} }">
          <div class="image">
            <img src="../assets/logo.png">
          </div>
          <div class="info">
            <div class="user">
              {{chat.User}}
            </div>
            <div class="message">
              {{chat.Message}}
            </div>
          </div>
          <div class="date">
            <p>{{chat.Datetime}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ChatsSimplified from '../services/chatSimplified'
export default {
  name: 'chats',
  mounted() {
    this.getSimplifiedChats();
  },
  data() {
  	return {
  		chats: {},
    };
  },
  methods: {
    getSimplifiedChats() {
      ChatsSimplified.getSimplifiedChats()
        .then(data => {
          console.log(data);
          this.chats = data.Chats;
        })
        .catch(error => {
          console.log(error);
          alert(error);
        })
    },
  }
};
</script>

<style>

.body {
  max-width: 540px;
  margin-top: 80px;
  overflow: hidden;
}

.chat {
  font-family: 'Open Sans', sans-serif;
  margin-top: 1px;
  z-index: 5;
}

.chat .content {
  width: 100%;
  height: 80px;
  background-color: white;
  position: relative;
}

.chat .content a {
  color: black;
  text-decoration: none;
}

.chat .content .image {
  width: 15%;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  position: relative;
  float: left;
}

.chat .content .image img {
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

.chat .content .info {
  width: 65%;
  height: 100%;
  display: inline-block;
  border-bottom: 1px solid #A2ABBF;
  text-align: left;
  float: left;
}

.chat .content .info .user {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 5%;
  display: inline-block;
  font-weight: bold;
}

.chat .content .info .message {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 3%;
  display: inline-block;
  color: gray;
}

.chat .content .date {
  width: 20%;
  height: 100%;
  display: inline-block;
  text-align: left;
  color: gray;
  font-size: 14px;
  border-bottom: 1px solid #A2ABBF;
  float: left;
}

.chat .content .date p {
  padding-top: 5%;
}
</style>
