<template>
  <div class="user-infomation-wrapper">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <div id="user" v-else>
      <div class="user-infomation">
        <!-- 头部 -->
        <section class="header">
          <img :src="userinfo.avatar_url" alt="头像" />
          <span>{{ userinfo.loginname }}</span>
          <p>积分: {{ userinfo.score }}</p>
          <p>注册时间:{{ userinfo.create_at | formatDate }}</p>
        </section>

        <!-- 最近回复 -->
        <section class="replies">
          <p>回复的主题</p>
          <ul>
            <li v-for="reply in userinfo.recent_replies" :key="reply.length">
              <router-link
                :to="{
                  name: 'article',
                  params: { id: reply.id, username: reply.author.loginname },
                }"
              >
                {{ reply.title }}
              </router-link>
            </li>
          </ul>
        </section>

        <!-- 创建主题 -->
        <section class="topics">
          <p>创建的主题</p>
          <ul>
            <li v-for="topic in userinfo.recent_topics" :key="topic.length">
              <router-link
                :to="{
                  name: 'article',
                  params: { id: topic.id, username: topic.author.loginname },
                }"
              >
                {{ topic.title }}
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: true,
      userinfo: {},
    };
  },

  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.username}`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.userinfo = res.data.data;
          }
        })
        .catch((err) => {
          this.isLoading = true;
          console.log(123);
          console.log(err);
        });
    },
  },

  beforeMount() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
$userinfomation-width: 1180px;

.loading {
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    transform: scale(2.5);
  }
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.user-infomation-wrapper {
  padding: 0 30px;
}
@media screen and (max-width: 680px) {
  .user-infomation-wrapper {
    padding: 0 8px;
  }
}

.user-infomation {
  background: white;
  max-width: $userinfomation-width;
  margin: 10px auto;
}

.header {
  padding: 12px;
  img {
    width: 30px;
    vertical-align: middle;
  }
  span {
    line-height: 30px;
    vertical-align: middle;
    margin-left: 10px;
    color: #778087;
  }
  p {
    font-size: 0.85rem;
    margin: 0;
    vertical-align: middle;
    margin-top: 10px;
  }
}

.replies,
.topics {
  border-top: 10px #dddddd solid;
  p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
}
ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>