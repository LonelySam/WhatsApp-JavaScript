<template lang="html">
  <div class="body-calls">
    <div class="calls">
      <div class="content" v-for="call in calls">
        <div class="image">
          <img src="../assets/logo.png">
        </div>
        <div class="info">
          <div class="user">
            {{call.User}}
          </div>
          <div class="datetime">
            {{call.Datetime}}
          </div>
        </div>
        <div class="icon">
          <span class="material-icons">phone</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calls from '../services/callsUser'
export default {
  name: 'chats',
  mounted() {
    this.getAllCalls();
  },
  data() {
  	return {
  		calls: {},
    };
  },
  methods: {
    getAllCalls() {
      Calls.getCalls()
        .then(data => {
          console.log(data);
          this.calls = data.Calls;
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
.body-calls {
  max-width: 540px;
  margin-top: 80px;
  overflow: hidden;
}

.calls {
  font-family: 'Open Sans', sans-serif;
  margin-top: 1px;
  z-index: 5;
}

.calls .content {
  width: 100%;
  height: 80px;
  background-color: white;
  position: relative;
}

.calls .content .image {
  width: 15%;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  position: relative;
  float: left;
}

.calls .content .image img {
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

.calls .content .info {
  width: 65%;
  height: 100%;
  display: inline-block;
  border-bottom: 1px solid #A2ABBF;
  text-align: left;
  float: left;
}

.calls .content .info .user {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 5%;
  display: inline-block;
  font-weight: bold;
}

.calls .content .info .datetime {
  width: 100%;
  height: 50%;
  text-align: left;
  padding-left: 10px;
  padding-top: 3%;
  display: inline-block;
  color: gray;
  font-size: 14px;
}

.calls .content .icon {
  width: 20%;
  height: 100%;
  display: inline-block;
  text-align: center;
  color: #15910D;
  font-size: 14px;
  border-bottom: 1px solid #A2ABBF;
  float: left;
}

.calls .content .icon span {
  padding-top: 25%;
}

</style>
