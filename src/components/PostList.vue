<template>
  <!-- 是否正在加载 -->
  <div class="topiclist-wrapper">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>

    <div v-else class="topiclist">
      <ul>
        <!-- 第一行 -->
        <li class="toobar" @click="changeTab($event)">
          <span name="all">全部</span>
          <span name="good">精华</span>
          <span name="share">分享</span>
          <span name="ask">问答</span>
          <span name="job">招聘</span>
          <span name="dev">客户端测试</span>
        </li>
        <!-- 主题列表 -->
        <li v-for="topic in topicList" :key="topic.id" class="topic-wrapper">
          <!-- 点击列表头像跳转 -->
          <router-link
            :to="{
              name: 'userinfo',
              params: { username: topic.author.loginname },
            }"
          >
            <img :src="topic.author.avatar_url" alt="用户头像" />
          </router-link>

          <span class="reply-and-visit">
            <span class="reply-count">{{ topic.reply_count }}</span
            >/<span class="visit-count">{{ topic.visit_count }}</span>
          </span>

          <span
            :class="[
              topicTabClass,
              {
                'put-top': topic.top === true,
                'put-good': topic.good === true,
              },
            ]"
          >
            {{ topicType(topic) }}
          </span>

          <router-link
            :to="{
              name: 'article',
              params: { id: topic.id, username: topic.author.loginname },
            }"
          >
            <!-- 帖子标题 -->
            <span class="topic-title">
              {{ topic.title }}
            </span>
          </router-link>
          <span class="last-replay">{{
            topic.last_reply_at | formatDate
          }}</span>
        </li>
      </ul>
      <Pagination @handleList="renderList" ref="Pagination"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  name: "PostList",
  components: { Pagination },

  data() {
    return {
      isLoading: true,
      topicList: [], // 关于主题列表的全部数据
      topicTabClass: "topiclist-tab",
      tagName: "all",
      resetPage: 1,
    }; 
  },

  methods: {
    // 获取数据
    gteData(page = 1, tab="all") {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            limit: 20,
            page: page,
            tab: tab,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.topicList = res.data.data;
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
      } else if (tag.tab === "dev") {
        return "测试";
      }
    },

    // 切换精华 分享等
    changeTab(e) {
      const typeName = e.target.getAttribute("name");
      // 切换类型
      this.tagName = typeName;
      this.gteData(1, this.tagName);
      this.$refs.Pagination.currentPage = 1
    },

    // 分页
    renderList(page) {
      this.gteData(page, this.tagName);
    },
  },

  beforeMount() {
    this.gteData(1, "all");
  },
};
</script>

<style lang="scss" scoped>
$topic-list-width: 1380px;

.topiclist-wrapper {
  padding: 0 30px;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  padding-bottom: 2px;
  color: #000;
}

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

.topiclist {
  margin-top: 10px;
  max-width: $topic-list-width;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;

  .toobar {
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 30px;
    span {
      margin-right: 10px;
      color: #8fbd50;
      background-color: #ccc;
      padding: 3px 8px;
      cursor: pointer;
      border-radius: 2px;
    }
  }
  .topic-wrapper {
    justify-content: flex-start;
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
    font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma,
      Hiragino Sans GB, STHeiti, sans-serif;

    display: flex;

    span {
      line-height: 30px;
      vertical-align: middle;
    }

    &:hover {
      background-color: #e1e1e1;
    }

    img {
      height: 30px;
      vertical-align: middle;
    }

    .reply-and-visit {
      // display: inline-block;
      flex-basis: 65px;
      flex-shrink: 0;
      color: #9e78c0;
      margin-left: 8px;
      margin-right: 3px;

      .reply-count {
        font-size: 14px;
      }
      .visit-count {
        color: #b4bbce;
        font-size: 12px;
      }
    }

    .topiclist-tab {
      flex-shrink: 0;
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
      margin-right: 8px;
    }
    .put-good,
    .put-top {
      background: #80bd01;
      padding: 2px 4px;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
      margin-right: 8px;
    }

    a:nth-child(4) {
      .topic-title {
        &:hover {
          border-bottom: 1px solid #999;
        }
      }

      flex-grow: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .last-replay {
      flex-basis: 50px;
      flex-shrink: 0;
      text-align: right;
      color: #778087;
      font-size: 12px;
    }
  }
}
</style>