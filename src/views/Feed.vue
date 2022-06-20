<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">
        <div class="row" v-if="user">
          <div class="col-md-8 ml-auto mr-auto" v-if="games.length">
<!--            <h2 class="title">Upload Game (action)</h2>-->
<!--            <h5 class="description"></h5>-->
            <br>

            <div v-for="game in games" :key="game.id" class="card" style="width: 20rem;">
              <div class="card-body">
                <h4 class="card-title">Result: {{ game.result }}</h4>
<!--                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>-->
                <p class="card-text">
                {{ game.moves }}
                </p>
              </div>
            </div>

            <br>
            <button :disabled="!canLoadMore" @click.prevent="onLoadMore" href="" class="btn btn-default btn-round">Load More</button>
          </div>

          <div class="col-md-8 ml-auto mr-auto" v-if="!games.length">
            <h2 class="title">You have no games yet.</h2>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Feed',
  components: {
  },
  computed: {
    ...mapGetters({
      games: 'gameModule/getGames',
      user: 'userModule/getUser',
      canLoadMore: 'gameModule/canLoadMore',
    }),
  },
  methods: {
    ...mapActions({
      fetchGames: 'gameModule/fetchGames',
      fetchUser: 'userModule/fetchUser',
    }),
    onLoadMore() {
      this.fetchGames(this.user.id)
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchUser()
        .then(() => {
          vm.fetchGames(vm.user.id)
        })
    })
  }
}
</script>
