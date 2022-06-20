<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title">User Feed</h2>
            <h5 class="description"></h5>
            <br>
            <a @click.prevent="onLoadMore" href="" class="btn btn-default btn-round">Load More</a>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feed',
  components: {
  },
  methods: {
    onLoadMore() {
      console.log('load more')
    },
  },
}
</script>
