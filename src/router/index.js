import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CameraPannel from '@/components/CameraPannel'
import Broadcasts from "@/components/IndexMoudles/Broadcasts";
import Destinations from "@/components/IndexMoudles/Destinations";
import BroadcastsPast from "@/components/IndexMoudles/BroadcastsPast";


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/broadcasts',
      children: [
        // 当 / 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        {
          path: 'broadcasts',
          name: 'broadcasts',
          component: Broadcasts,
          children: [
            { path: 'past', name: 'past', component: BroadcastsPast }
          ]
        },
        { path: 'destinations', name: 'destinations', component: Destinations }
        // ...其他子路由
      ]
    }, {
      path: '/camerapannel',
      name: 'camerapannel',
      component: CameraPannel
    }
  ]
})
