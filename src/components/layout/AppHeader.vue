<template>
  <header>
    <div class="container">
      <nav class="row align-items-center my-1">
        <div class="col">
          <RouterLink to="/">
            <img src="/img/logo.png" class="logo align-text-top" alt="Vue logo" />
          </RouterLink>
        </div>
        <div class="col-auto">
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
</script>


<style lang="scss" scoped>
.logo {
  width: 5em;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #ffffff);
}
</style>