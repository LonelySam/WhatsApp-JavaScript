import Vue from 'vue';
import Router from 'vue-router';
import Principal from './views/Principal.vue';
import Chats from './views/Chats.vue';
import Status from './views/Status.vue';
import Calls from './views/Calls.vue';
import Camera from './views/Camera.vue';
import PrivateChat from './views/PrivateChat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Principal,
      children: [
        {
          path: '',
          name: 'parent',
          redirect: { name: 'chats' }
        },
        {
          path: '/chats',
          name: 'chats',
          component: Chats,
        },
        {
          path: '/status',
          name: 'status',
          component: Status,
        },
        {
          path: '/calls',
          name: 'calls',
          component: Calls,
        },
      ],
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera,
    },
    {
      path: '/privateChat/:id',
      name: 'privateChat',
      component: PrivateChat,
    }
  ],
});
