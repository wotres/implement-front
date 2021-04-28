<template>
  <div class="not-support-container">
    <div v-if="isIE" class="wrapper">
      CSS 깨져서 IE 지원 안합니다
    </div>
    <div v-else class="wrapper">
      <router-link to="/">메인페이지로 돌아가기</router-link>
      <div class="text">지원하지 않는 페이지 입니다.</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotSupport',
  computed: {
    isIE () {
      return this.$route.params.reason === 'IE'
    }
  }
}
</script>
<style lang="scss" scoped>
.not-support-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .wrapper {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 20px;
    text-align: center;
    a {
      text-decoration: none;
      background: aliceblue;
    }
    .text {
      margin-top: 20px;
    }
  }
}
</style>
