<template>
  <div>
    <vue-particles
      :move-speed="4"
      color="#000"
      lines-color="#959494"/>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="level">
                <div class="level-item has-text-centered">
                  <div class="box">
                    <b-field
                      :type="seed != '' ? 'is-success' : 'is-danger'"
                      message="This is not a valid seed">
                      <b-input
                        v-model="seed"
                        placeholder="Error"/>
                    </b-field>
                    <button
                      class="button is-primary"
                      @click="doLogin">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Iota } from 'iota-basic'

const iota = new Iota('YOURSEED9999999999999999999999999999999999999999999999999999999999999')

export default {
  data: () => ({
    seed: ''
  }),
  methods: {
    doLogin () {
      iota.getBalance().then(console.log)
      iota.sendTransaction("RECEIVEADDRESS9999",1).then((success)=>{
        console.log("success",success);
      })
    }
  }
}
</script>

<style scoped>
#particles-js {
  position:absolute!important;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow: hidden;
}
</style>
