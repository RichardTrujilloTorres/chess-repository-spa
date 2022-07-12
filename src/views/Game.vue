<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">
        <div class="row" v-if="game">
          <div class="col-md-8 ml-auto mr-auto">

            <h4 class="card-title">{{ $t('game.result') }}: {{ game.result }}</h4>
            <div :id="`board-${game.id}`"></div>
            <br>

            <button @click.prevent="onPreviousMove" class="btn btn-sm btn-default btn-round">{{ $t('game.moves.previous') }}</button>
            <button @click.prevent="onNextMove" class="btn btn-sm btn-default btn-round">{{ $t('game.moves.next') }}</button>
            <button @click.prevent="onFlipBoard" class="btn btn-sm btn-default btn-round">
              <i class="nc-icon nc-refresh-69"></i>
            </button>

            <br/>
            <br/>
            <button @click.prevent="onDownloadGif" class="btn btn-sm btn-link">{{ $t('game.screenshot.download') }}</button>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ChessBoard from "chessboardjs-vue";
import chessMoments from "chess-moments";

export default {
  name: 'Game',
  inject: ['mediaService'],
  components: {
  },
  data: () => ({
    currentMoveIndex: 0,
    moment: null,
    chessboard: null,
  }),
  mounted() {
    this.fetchGame(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      game: 'gameModule/getCurrentGame',
    })
  },
  watch: {
    game() {
      this.$nextTick(() => this.displayGame())
    },
  },
  methods: {
    ...mapActions({
      fetchGame: 'gameModule/fetchGame',
    }),
    displayGame() {
      this.moment = chessMoments.flat(this.game.moves)
      this.chessboard = ChessBoard(`board-${this.game.id}`, {
        position: this.moment[0].fen,
      })
    },
    onPreviousMove() {
      this.currentMoveIndex = this.currentMoveIndex > 0 ?
          this.currentMoveIndex - 1 :
          this.currentMoveIndex
      this.chessboard.position(this.moment[this.currentMoveIndex].fen)
    },
    onNextMove() {
      this.currentMoveIndex = this.currentMoveIndex < (this.moment.length - 1) ?
          this.currentMoveIndex + 1 :
          this.currentMoveIndex
      this.chessboard.position(this.moment[this.currentMoveIndex].fen)
    },
    onFlipBoard() {
      this.chessboard.orientation('flip')
    },
    onDownloadGif() {
      this.mediaService.positionScreenshot(this.moment[this.currentMoveIndex].fen)
        .then(res => {
          this.displayScreenshot(res.data)
        })
        .catch(err => {
          this.toastService.error(this.$t('messages.game.couldNotDownloadScreenshot'))
          console.log(err)
        })
    },
    displayScreenshot(data) {
      const screenshot = new Image()
      const w = window.open('')
      screenshot.src = URL.createObjectURL(data)
      w.document.write(screenshot.outerHTML)
    },
  },
}
</script>

<style lang="css" scoped>
.card-register {
  background-color: #FF8F5E;
}

</style>
