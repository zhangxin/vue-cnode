import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../components/PostList.vue'
import Article from '../components/Article.vue'
import UserInfo from '../components/UserInfo.vue'
import SideBar from '../components/SideBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'postlist',
    path: '/',
    components: {
      main: PostList
    }
  },

  {
    name: 'article',
    // 一个路由传递多个参数
    path: '/topic/:id',
    components: {
      main: Article,
      aside: SideBar
    }
  },

  {
    name: 'userinfo',
    path: '/user/:username',
    components: {
      main: UserInfo
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
