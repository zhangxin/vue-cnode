<template>
  <div class="pagination">
    <button @click="changePage(1)" class="pagebtn">首页</button>
    <button
      @click="changePage(currentPage - 1)"
      class="pagebtn"
      :disabled="disabled"
    >
      上一页
    </button>
    <button v-if="currentPage > 4" class="pagebtn">...</button>
    <button
      v-for="page in pageArray"
      :key="page"
      @click="changePage(page)"
      :class="[{ active: currentPage === page }, 'pagebtn']"
    >
      {{ page }}
    </button>
    <button class="pagebtn">...</button>
    <button @click="changePage(currentPage + 1)" class="pagebtn">下一页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["resetPage"],
  data() {
    return {
      currentPage: 1,
      pageArray: [1, 2, 3, 4, 5],
      disabled: false,
    };
  },

  methods: {
    changePage(page) {
      this.currentPage = page;

      if (this.currentPage < 1) {
        return;
      }

      // 当前为第一页时  上一页按钮禁止点击
      if (this.currentPage === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }

      // 点击首页
      if (page === 1) {
        this.pageArray = [1, 2, 3, 4, 5];
      }

      if (page == this.pageArray[4]) {
        this.pageArray.shift();
        this.pageArray.splice(4, 0, this.pageArray[3] + 1);
      } else if (page == this.pageArray[0] && page != 1) {
        this.pageArray.unshift(this.pageArray[0] - 1);
        this.pageArray.pop();
      }

      this.$emit("handleList", this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #8194426e;
}

[disabled] {
  background-color: #ddd;
}

.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}
.pagebtn {
  position: relative;
  bottom: 1px;
  margin: 0 4px;
}

@media screen and (max-width: 880px) {
  .pagination {
    padding: 3px 0;
  }
  button {
    border-radius: 2px;

    height: 20px;
    font-size: 12px;
    padding: 0 1px;
  }
}
</style>