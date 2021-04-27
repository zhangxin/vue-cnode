import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../components/PostList.vue'
import Article from '../components/Article.vue'
import UserInfo from '../component/UserInfo.vue'

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
    path: '/topic/:id',
    components: {
      main: Article
    }
  },

  {
    name: 'userinfo',
    path: '/user/:id',
    component: {
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
