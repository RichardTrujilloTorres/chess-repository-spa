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
  name: 'Navbar',
  props: {
  },
  methods: {
    onSearch() {
      console.log('show search modal')
    },
  },
}
</script>

