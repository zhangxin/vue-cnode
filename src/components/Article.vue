<template>
  <div class="article-wrapper">
    <!-- 如果正在加载则显示此页面 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>

    <!-- 加载成功 -->
    <div class="article" v-else>
      <div class="topic">
        <header class="topic-header">
          <h3>{{ posts.title }}</h3>
          <ul>
            <li>•发布于: {{ posts.create_at | formatDate }}</li>
            <li>•作者 {{ posts.author.loginname }}</li>
            <li>•{{ posts.visit_count }} 次浏览</li>
            <li>•最后一次编辑是 {{ posts.last_reply_at | formatDate }}</li>
            <li>•来自 {{ topicType(posts) }}</li>
          </ul>
        </header>
        <main class="topic-content" v-html="posts.content"></main>
      </div>

      <div class="reply">
        <div class="reply-header">回复</div>
        <ul>
          <li
            v-for="(reply, index) in posts.replies"
            class="reply-section"
            :key="reply.id"
          >
            <img :src="reply.author.avatar_url" alt="头像" />

            <span class="username">{{ reply.author.loginname }}</span>
            <span> {{ index + 1 }}楼 </span>
            <span>☝ {{ reply.ups.length }}</span>
            <p class="reply-content" v-html="reply.content"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",

  data() {
    return {
      isLoading: true,
      posts: {}, // 文章的所有信息
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.success) {
            this.posts = res.data.data;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = true;
          console.log(err);
        });
    },

    topicType(tag) {
      if (tag.top) {
        return "置顶";
      } else if (tag.good) {
        return "精华";
      } else if (tag.tab === "ask") {
        return "问答";
      } else if (tag.tab === "job") {
        return "招聘";
      } else if (tag.tab === "share") {
        return "分享";
      }
    },
  },

  beforeMount() {
    this.posts = this.getData();
  },
};
</script>

<style lang="scss">
@import url("../assets/markdown-github.css");

$topic-width: 1180px;

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

.article-wrapper {
  margin-top: 10px;
  padding: 0 15px;

  ul,
  li {
    list-style: none;
  }

  .article {
    max-width: $topic-width;
    margin-left: auto;
    margin-right: auto;

    .topic {
      background-color: #fff;
      .topic-header {
        border-bottom: 1px solid #e1e1e1;
        padding: 10px;
        ul {
          display: flex;
          justify-content: start;
          margin-top: 10px;
        }

        li {
          font-size: 12px;
          color: #838383;
          margin-right: 5px;
        }
      }

      .topic-content {
        padding: 10px;
      }
    }

    .markdown-text img {
      width: 92% !important;
    }

    .reply {
      margin-top: 15px;
      .reply-header {
        padding: 10px;
        background-color: #f6f6f6;
        height: 16px;
        font-size: 12px;
        margin-top: 10px;
      }
      img {
        width: 30px;
        position: relative;
        bottom: -9px;
      }

      a,
      span {
        font-size: 13px;
        color: #666;
        text-decoration: none;
      }

      .reply-content {
        margin: 10px 0 8px 0;
      }

      .reply-section {
        border-bottom: 1px solid #e5e5e5;
        padding: 0 10px;
        background-color: #fff;
        .username {
          margin-left: 2px;
        }
      }
    }
  }
}
</style>