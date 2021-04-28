<template>
  <div class="main">
    <div class="search-container">
      <div class="search-box">
        <input type="text" v-model="searchText" placeholder="원하는 기능을 입력하세요"/>
      </div>
      <div class="function-list">
        <div v-for="(description, index) in discriptions" :key="index">
          <router-link :to="description.link" target="_blank">
            {{ description.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      searchText: '',
      discriptions: [
        {
          text: '테스트',
          link: '/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
