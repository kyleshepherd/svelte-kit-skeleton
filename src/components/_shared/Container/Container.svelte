<style lang="scss">
  div {
    max-width: 100%;
    width: 1024px;
    padding: 0 1rem;
    margin: 0 auto;

    @include breakpoint(lg) {
      width: 1280px;
    }

    @include breakpoint(xl) {
      width: 1440px;
    }
  }
</style>

<div {...$$props}>
  <slot />
</div>
