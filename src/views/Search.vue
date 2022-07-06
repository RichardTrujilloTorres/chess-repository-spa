<template>
  <div class="main">
    <div class="section text-center">
      <div class="container">

        <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
          <ais-search-box placeholder="Search..." />
          <ais-hits>
            <template v-slot:item="{ item: game }">
              <router-link :to="{name: 'Game', params: {id: game.id}}">
                <h3>Result: {{ game.result }}</h3> <span>{{ String(game.moves).substr(0, 200) }}</span>
              </router-link>
            </template>
          </ais-hits>
        </ais-instant-search>


      </div>
    </div>
  </div>
</template>

<script>
import {searchClient} from "../services/search.service";
import { AisInstantSearch, AisSearchBox } from 'vue-instantsearch/vue3/es';
import 'instantsearch.css/themes/satellite-min.css';


export default {
  name: 'Search',
  components: {
    AisInstantSearch,
    AisSearchBox,
  },
  data: () => ({
    searchClient,
  }),
  computed: {
  },
  methods: {
  },
}
</script>
