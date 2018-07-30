<template lang="html">
  <div class="body-status">
    <div class="my-status">
      <div class="image">
        <img src="../assets/logo.png">
      </div>
      <div class="info">
        <div class="title">
          My status
        </div>
        <div class="help">
          Tap to add status update
        </div>
      </div>
    </div>
    <div class="status">
      <div class="separation">
        Updates
      </div>
      <div class="content" v-for="status in stories">
        <div class="image">
          <img src="../assets/logo.png">
        </div>
        <div class="info">
          <div class="user">
            {{status.User}}
          </div>
          <div class="datetime">
            {{status.Datetime}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Status from '../services/status'
export default {
  name: 'status',
  mounted() {
    this.getStories();
  },
  data() {
  	return {
  		stories: {},
    };
  },
  methods: {
    getStories() {
      Status.getStatusContacts()
        .then(data => {
          console.log(data);
          this.stories = data.Stories;
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
.body-status {
  max-width: 540px;
  margin-top: 80px;
  font-family: 'Open Sans', sans-serif;
}

.my-status {
  margin-top: 1px;
  width: 100%;
  height: 80px;
  background-color: white;
}

.my-status .image {
  width: 15%;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  position: relative;
  float: left;
}

.my-status .image img {
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

.my-status .info {
  width: 85%;
  height: 100%;
  display: inline-block;
  text-align: left;
  float: left;
}

.my-status .info .title {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 5%;
  display: inline-block;
  font-weight: bold;
}

.my-status .info .help {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  display: inline-block;
  color: gray;
  font-size: 14px;
}

.status {
  z-index: 5;
}

.status .separation {
  background-color: #f1f1f1;
  color: #15910D;
  padding-left: 5px;
  font-weight: bold;
}

.status .content {
  width: 100%;
  height: 80px;
  background-color: white;
  position: relative;
}

.status .content .image {
  width: 15%;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  position: relative;
  float: left;
}

.status .content .image img {
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

.status .content .info {
  width: 80%;
  height: 100%;
  display: inline-block;
  border-bottom: 1px solid #A2ABBF;
  text-align: left;
  float: left;
}

.status .content .info .user {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 5%;
  display: inline-block;
  font-weight: bold;
}

.status .content .datetime {
  width: 100%;
  height: 50%;
  display: inline-block;
  text-align: left;
  color: gray;
  font-size: 14px;
  float: left;
  padding-left: 10px;
}

.status .content .datetime p {
  padding-top: 5%;
}
</style>
