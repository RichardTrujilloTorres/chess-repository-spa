<template>
  <!DOCTYPE html>

  <html lang="en">

  <head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="../assets/img//apple-icon.png">
    <link rel="icon" type="image/png" href="../assets/img//favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>
      {{ appName }}
    </title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">

  </head>

  <body class="landing-page sidebar-collapse">
    <common_navbar :app-name="appName"></common_navbar>
  <!--  <div v-if="!$auth.ready()">-->
  <!--    Loading...-->
  <!--  </div>-->

  <!--  <common_loader v-if="$auth.ready()"></common_loader>-->
    <common_loader></common_loader>
  <!--  <router-view v-if="$auth.ready()"></router-view>-->
    <router-view></router-view>
  </body>
  </html>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapGetters({
      user: 'userModule/getUser',
    }),
    appName() {
      return process.env.VUE_APP_NAME
    },
  },
  methods: {
    ...mapActions({
      fetchUser: 'userModule/fetchUser',
    }),
  },
  async mounted() {
    await this.fetchUser()
  },
}
</script>


<style lang="css" scoped>
@import 'assets/template/demo/demo.css';
@import 'assets/template/css/bootstrap.min.css';
@import 'assets/template/css/paper-kit.css?v=2.2.0';

body { padding-top: 70px; }
</style>