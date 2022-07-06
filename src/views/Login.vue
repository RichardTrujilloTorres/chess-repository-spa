<template>
<!--  <div class="main">-->
<!--    <div class="section text-center">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-md-8 ml-auto mr-auto">-->
<!--            <h2 class="title">User Feed</h2>-->
<!--            <h5 class="description"></h5>-->
<!--            <br>-->
<!--            <a @click.prevent="onLoadMore" href="" class="btn btn-default btn-round">Load More</a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <br/>-->
<!--        <br/>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div class="page-header" style="background-image: url('/assets/img/login-background.jpg');">
    <div class="filter"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 ml-auto mr-auto">
          <div class="card card-register">
            <h3 class="title mx-auto">Login</h3>

<!--            <div class="social-line text-center">-->
<!--              <a href="#pablo" class="btn btn-neutral btn-facebook btn-just-icon">-->
<!--                <i class="fa fa-facebook-square"></i>-->
<!--              </a>-->
<!--              <a href="#pablo" class="btn btn-neutral btn-google btn-just-icon">-->
<!--                <i class="fa fa-google-plus"></i>-->
<!--              </a>-->
<!--              <a href="#pablo" class="btn btn-neutral btn-twitter btn-just-icon">-->
<!--                <i class="fa fa-twitter"></i>-->
<!--              </a>-->
<!--            </div>-->

            <form @submit.prevent="onSubmit" class="register-form">
              <label>Email</label>
              <input v-model="form.email" type="text" class="form-control" placeholder="Email">
              <label>Password</label>
              <input v-model="form.password" type="password" class="form-control" placeholder="Password">
              <button type="submit" class="btn btn-danger btn-block btn-round">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    form: {
      email: null,
      password: null,
    },
  }),
  methods: {
    ...mapActions({
      setUser: 'userModule/setUser',
    }),
    onSubmit() {
      this.$auth.login({
        data: {...this.form},
        staySignedIn: true,
        fetchUser: false,
        remember: 'User',
        rememberMe: true,
      })
      .then(res => {
        this.$auth.token(this.$auth.options.tokenDefaultKey, res.data.access_token)

        this.fetchUser()
      })
      .catch(err => {
        this.toastService.error(this.$t('messages.auth.invalidCredentials'))
        console.log(err)
      })
    },
    fetchUser() {
      this.$auth.fetch()
          .then(res => {
            this.setUser(res.data.data.user)
          })
          .catch(err => {
            console.log(err)
          })
    },
  },
}
</script>

<style lang="css" scoped>
.card-register {
  background-color: #FF8F5E;
}

</style>
