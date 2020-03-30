<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">

html, body {
  margin: 0;
  font-family: system-ui;
}

// general VUE
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
