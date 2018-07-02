<template>
  <footer>
    <ul class="ui-footer-wrapper">
      <li v-for="(item,index) in footers" :key="index" :class = "{active:index === num}" @click = footers(item)>
        <router-link to="{routes}">
          <span>{{item}}</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
name: 'Footer',
  data: {
    footers: [ '首页', '商城', '生活', '我的' ],
    routes: [ '/', '/mall', '/life', 'member' ]
},
method: {
  footers (index) {
    this.num = index
  }
}
}
</script>
