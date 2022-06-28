<template>
  <div>
    <div class="card">
      <div class="card-title">
        <h1>{{ $t('user.profile') }}</h1>
      </div>
      <div class="card-body" v-if="this.user">
        <form @submit.prevent="onUpdate">
          <div class="form-group">
            <label for="exampleInputEmail1">{{ $t('user.email') }}</label>
            <input disabled type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="user.email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">{{ $t('user.name') }}</label>
            <input v-model="form.name" type="text" class="form-control" id="exampleInputPassword1" :placeholder="user.name">
          </div>

          <button type="submit" class="btn btn-primary">{{ $t('actions.update') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Profile',
  components: {
  },
  data: () => ({
    form: {
      name: null,
      email: null,
    },
  }),
  computed: {
    ...mapGetters({
      'user': 'userModule/getUser',
    })
  },
  methods: {
    ...mapActions({
      'fetchUser': 'userModule/fetchUser',
      'setUser': 'userModule/setUser',
    }),
    onUpdate() {
      this.axios.put(`/users`, {
        name: this.form.name,
      })
      .then(res => {
        this.setUser(res.data.data.user)
        this.toastService.success(`Profile updated!`)
      })
      .catch(err => {
        console.log(err)
        this.toastService.error(`Could not update profile.`)
      })
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchUser())
  }
}
</script>
