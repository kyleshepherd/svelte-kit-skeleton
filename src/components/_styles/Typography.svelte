<script lang="ts">
  export let variant: string = "paragraph";

  export let component: string = "p";

  export let theme: string = "dark";
</script>

<style lang="scss">
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em 0;
    font-weight: 600;
    line-height: 1.2;
  }

  p,
  .paragraph {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    text-decoration: none;
  }
</style>

{#if component === "h1"}
  <h1 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h1>
{:else if component === "h2"}
  <h2 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h2>
{:else if component === "h3"}
  <h3 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h3>
{:else if component === "h4"}
  <h4 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h4>
{:else if component === "h5"}
  <h5 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h5>
{:else if component === "h6"}
  <h6 class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </h6>
{:else if component === "paragraph"}
  <p class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </p>
{/if}
