<template>
  <div class="header">
    <div class="wrap">
      <img src="../assets/conde-logo.svg" alt="logo">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
  $logo-size: 28px;
  $heager-bgc: #444;
  $a-color: #ccc;
  $wrap-width: 1180px;
 
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
      a {
        text-decoration: none;
        color: $a-color;
      }
    }

  }

  @media screen and (max-width: 680px) {
    .header {
      .wrap {
        justify-content: space-around;
        >ul {
          display: none;
        }
      }
    }
    

     
    
    
  }
</style>
