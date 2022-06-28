<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">

        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">

<!--            <pre>{{ fileContent }}</pre>-->

            <div class="card" >
              <div class="card-body">
                <h4 class="card-title"></h4>
                <br>
                <div class="card-text">

                  <div style="height: 500px; border: 1px solid; position: relative;">
                    <DropZone
                        :maxFiles="Number(1)"
                        :uploadOnDrop="false"
                        :acceptedFiles="['pgn']"
                        @addedFile="onAddedFile"
                        @removedFile="onRemovedFile"
                    />
                  </div>

                  <button :disabled="!fileContent" @click.prevent="onUpload" href="" class="btn btn-default btn-round">{{ $t('actions.upload') }}</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

export default {
  name: 'Upload',
  props: {
    uploadUrl: {
      type: String,
      required: true,
    },
  },
  components: {
    DropZone
  },
  data: () => ({
    fileContent: null,
  }),
  mounted() {
  },
  computed: {
    ...mapGetters({
      game: 'gameModule/getCurrentGame',
      user: 'userModule/getUser',
    }),
  },
  methods: {
    ...mapActions({
      fetchGame: 'gameModule/fetchGame',
    }),
    onAddedFile(item) {
      const reader = new FileReader()
      reader.addEventListener('load', event => {
        this.fileContent = event.target.result
        console.log(event.target.result)
      })
      reader.readAsText(item.file)
    },
    onRemovedFile() {
      this.fileContent = null
    },
    onUpload() {
      console.log('upload')
      console.log(this.fileContent)
    },
  },
}
</script>