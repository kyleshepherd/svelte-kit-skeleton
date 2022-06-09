<style lang="scss">
  :global {
    @import "../styles/global.scss";
  }

  main {
    position: relative;
    max-width: 56em;
    background-color: $light;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
