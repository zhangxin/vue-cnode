<template>
  <div class="header">
    <div class="wrap">
      <router-link :to="{ name: 'postlist' }">
        <img src="../assets/conde-logo.svg" alt="logo" />
      </router-link>
      <ul>
        <router-link :to="{ name: 'postlist' }">
          <li>首页</li>
        </router-link>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="https://github.com/zhangxin">关于作者</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style lang="scss" scoped>
$logo-size: 28px;
$heager-bgc: #444;
$a-color: #ccc;
$wrap-width: 1600px;

.header {
  background-color: $heager-bgc;
  padding: 0 30px;
  .wrap {
    display: flex;
    justify-content: space-between;
    max-width: $wrap-width;
    padding: 15px 0;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: $a-color;
  }
  img {
    height: $logo-size;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      padding: 0 10px;
    }
  }
}

@media screen and (max-width: 680px) {
  .header {
    .wrap {
      justify-content: space-around;
      > ul {
        display: none;
      }
    }
  }
}
</style>
