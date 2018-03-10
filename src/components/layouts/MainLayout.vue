<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28">
          </a>

          <div class="navbar-burger">
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a
              class="navbar-item"
              href="#">Hello</a>
          </div>

          <div class="navbar-end">
            <a
              class="navbar-item"
              href="#">Hello</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
