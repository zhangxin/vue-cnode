<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <div class="topiclist">
      <ul>
        <li class="toobar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
      </li> 
        <li
          v-for="topic in topicList"
          :key="topic.id"
          class="topic-wrapper clearfix"
        >
          <img :src="topic.author.avatar_url" alt="用户头像" />

          <span class="reply-and-visit">
            <span class="reply-count">{{ topic.reply_count }}</span
            >/<span class="visit-count">{{ topic.visit_count }}</span>
          </span>

          <span :class="[topicTabClass,{'put-top': (topic.top===true),'put-good':(topic.good) === true}]">
            {{ topicType(topic) }}
          </span>

          <span class="last-replay">{{
            topic.last_reply_at | formatDate
          }}</span>
          <span class="topic-title">
            {{ topic.title }}
          </span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      isLoading: true,
      topicList: [],
      topicTabClass: "topiclist-tab"
    };
  },

  methods: {
    gteDate() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            limit: 25,
            page: 1,
          },
        })
        .then((res) => {
          this.isLoading = false;
          this.topicList = res.data.data;
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

  computed: {},

  beforeMount: function () {
    this.gteDate();
  },
};
</script>

<style lang="scss" scoped>
$topic-list-width: 1180px;
$loading-height: 400px;
$loading-width: 100%;

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}


@media screen and (max-width: 860px) {
  .topic-wrapper {
    .topic-title {
      width: 55%;
    }
  }
}

@media screen and (max-width: 480px) {
  .topic-wrapper {
    .topic-title {
      width: 45%;
    }
  }
}
@media screen and (max-width: 395px) {
  .topic-wrapper {
    .topic-title {
      width: 40%;
    }
  }
}
@media screen and (max-width: 360px) {
  .topic-wrapper {
    .topic-title {
      width: 30%;
    }
  }
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

  .toobar{
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 30px;
    span {
      margin-right: 10px;
      color: #8fbd50;
      background-color: #ccc;
      padding: 3px 8px;
    }
  }
  .topic-wrapper {
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
    font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma,
      Hiragino Sans GB, STHeiti, sans-serif;
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
      display: inline-block;
      width: 68px;
      color: #9e78c0;
      margin-left: 8px;

      .reply-count {
        font-size: 14px;
      }
      .visit-count {
        color: #b4bbce;
        font-size: 12px;
      }
    }

    .topiclist-tab {
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

    

    .topic-title {
      display: inline-block;
      margin-left: 5px;
      max-width: 75%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .last-replay {
      float: right;
      min-width: 50px;

      text-align: right;
      white-space: nowrap;
      color: #778087;
      font-size: 12px;
    }
  }

 
}
</style>