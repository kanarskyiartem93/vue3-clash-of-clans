<template>
  <div class="wrapper">
    <main-header/>
    <div class="wrapper-content">
      <div class="container">
        <div class="view-sm isCenter">
          <router-view/>
        </div>
      </div>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import {app, links, site} from "@/_config";
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      test: site.home,
      title: app.title,
      links: links
    }
  }
}
</script>

<style lang="scss">
</style>
