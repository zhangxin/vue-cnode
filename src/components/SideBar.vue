<template>
  <div class="sidebar">
    <header class="header">
      <p>作者</p>
      <router-link
        :to="{ name: 'userinfo', params: { username: asideInfo.loginname } }"
      >
        <img :src="asideInfo.avatar_url" alt="头像" />
      </router-link>

      <span>{{ asideInfo.loginname }}</span>
      <p>积分: {{ asideInfo.score }}</p>
    </header>

    <section class="recent-topics">
      <p>作者其它话题</p>
      <ul>
        <li v-for="topic in otherTopic" :key="topic.length">
          <router-link
            :to="{
              name: 'article',
              params: { id: topic.id, name: topic.author.loginname },
            }"
          >
            {{ topic.title }}
          </router-link>
        </li>
      </ul>
    </section>

    <section class="recent-reply">
      <p>作者最近回复</p>
      <ul>
        <li v-for="reply in otherReplies" :key="reply.length">
          <router-link
            :to="{
              name: 'article',
              params: { id: reply.id, name: reply.author.loginname },
            }"
          >
            {{ reply.title }}
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      asideInfo: {},
    };
  },
  computed: {
    otherTopic() {
      if (this.asideInfo.recent_topics) {
        let otherTopic = this.asideInfo.recent_topics;
        return otherTopic.splice(0, 5);
      } else {
        return this.asideInfo.recent_topics;
      }
    },
    otherReplies() {
      if (this.asideInfo.recent_replies) {
        let otherReplies = this.asideInfo.recent_replies;
        return otherReplies.splice(0, 5);
      } else {
        return this.asideInfo.recent_replies;
      }
    },
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.username}`)
        .then((res) => {
          if (res.data.success) {
            this.asideInfo = res.data.data;
          }
        })
        .catch((err) => {
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
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.sidebar {
  width: 328px;
  font-size: 14px;

  .header {
    background-color: #fff;
    margin-bottom: 15px;
    p {
      padding: 5px 10px;
    }
    p:first-child {
      background-color: #f6f6f6;
      padding: 6px 10px;
      margin: 0;
    }

    img {
      height: 48px;
      border-radius: 3px;
      margin: 10px;
      vertical-align: middle;
    }

    // span 是用户名
    span {
      vertical-align: middle;
      color: #808087;
    }
  }

  .recent-topics,
  .recent-reply {
    margin-bottom: 15px;
    background-color: #fff;

    p {
      background-color: #f6f6f6;
      margin: 0;
      padding: 10px;
    }
    li {
      padding: 5px 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      a {
        font-size: 12px;
        text-decoration: none;
        color: #778087;
      }
      &:first-child {
        padding-top: 10px;
      }

      &:last-child {
        padding-bottom: 10px;
      }
    }
  }
}
</style>