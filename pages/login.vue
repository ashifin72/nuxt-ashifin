<template>
  <div class="login">
    <div class="ash-register">
      <div class="container page mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{$t('login')}}</h1>
            <p class="text-xs-center">
              <router-link to="/register">
                {{$t('register')}}
              </router-link>
            </p>
            <validation-errors
              v-if="validationErrors"
              :validationErrors="validationErrors"
            />
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right"
                      :disabled="isSubmitting"
              >
                {{$t('login')}}
              </button>
            </form>
            {{isSubmitting}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ValidationErrors from '../components/inclide/ValidationErrors'
  export default {
    name: 'login',
    layout: 'register',
    data(){
      return{
        email: '',
        password: '',
        name: ''
      }
    },
    computed:{
      isSubmitting(){

      },
      validationErrors() {
      }
    },
    methods:{
      onSubmit(){
        return console.log('123')
      }
    },
    components:{
      ValidationErrors
    }
  }
</script>

<style scoped>

</style>
