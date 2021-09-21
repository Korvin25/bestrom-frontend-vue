<template>
  <app-nav-menu></app-nav-menu>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import appNavMenu from "@/components/appNavMenu";
import appFooter from "@/components/appFooter";

export default {
  methods: {
    ...mapActions([
        "GET_CONTENT"
    ])
  },

  mounted() {
    /*
    this.GET_CONTENT('1')
    for (const argument of this.$store.state.content) {
      console.log(argument.content)
    }
    */
  },

  computed:{
    ...mapGetters([
      'CONTENT'
    ])
  },

  components: {
    appNavMenu, appFooter
  }
}
</script>