<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">

        <div class="row" v-if="user">

          <div class="col-md-8 ml-auto mr-auto">
          <div class="card card-nav-tabs">
            <div class="card-header card-header-warning">
            </div>
            <div class="card-body">
              <h4 class="card-title">Got more games lately?</h4>
<!--              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
                  <p class="card-text"></p>
              <router-link :to="{name: 'Upload'}" class="btn btn-default">Upload</router-link>
            </div>
          </div>
          </div>
        </div>

        <div class="row" v-if="user">
          <common_loader></common_loader>

          <div class="col-md-8 ml-auto mr-auto" v-if="games.length">
              <div v-for="game in games" :key="game.id" class="card">
                <div @click="onShowGame(game.id)" class="card-body">
                  <h4 class="card-title">Result: {{ game.result }}</h4>
                  <br>
                  <div class="card-text">
                    <div :id="`board-${game.id}`"></div>
                  </div>
                </div>
              </div>

              <br>
            <button :disabled="!canLoadMore" @click.prevent="onLoadMore" href="" class="btn btn-default btn-round">Load More</button>
          </div>

          <div class="col-md-8 ml-auto mr-auto" v-if="!games.length && !loading">
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
import chessMoments from 'chess-moments';
import ChessBoard from "chessboardjs-vue";

export default {
  name: 'Feed',
  components: {
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      games: 'gameModule/getGames',
      user: 'userModule/getUser',
      canLoadMore: 'gameModule/canLoadMore',
      loading: 'isLoading',
    }),
  },
  watch: {
    games(newGames, oldGames) {
      const gamesRenderedIds = oldGames.map((game) => game.id)
      const gamesToRender = newGames.filter(game => !gamesRenderedIds.includes(game.id))

      this.$nextTick(() => gamesToRender.forEach(game => this.onDisplayGame(game)))
    },
  },
  methods: {
    ...mapActions({
      fetchGames: 'gameModule/fetchGames',
      fetchUser: 'userModule/fetchUser',
    }),
    onLoadMore() {
      this.fetchGames(this.user.id)
    },
    getEndPosition(pgn) {
      const moment = chessMoments.flat(pgn)

      return moment[moment.length - 1].fen
    },
    onDisplayGame(game) {
      ChessBoard(`board-${game.id}`, this.getEndPosition(game.moves))
    },
    onShowGame(id) {
      this.$router.push({name: 'Game', params: {id}})
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchUser()
        .then(() => {
          vm.fetchGames(vm.user.id)
          vm.$nextTick(() => vm.games.forEach(game => vm.onDisplayGame(game)))
        })
    })
  },
}
</script>
