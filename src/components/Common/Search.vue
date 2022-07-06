<template>
    <li class="nav-item">
      <a @click.prevent="onSearch" class="nav-link" rel="tooltip" title="Search" data-placement="bottom" href="">
        <i class="fa fa-search"></i>
        <p class="d-lg-none">Search</p>
      </a>
    </li>
</template>

<script>
export default {
  name: 'Search',
  props: {
  },
  methods: {
    onSearch() {
      this.$router.push({name: 'Search'})
      // console.log('show search modal')
    },
  },
}
</script>

