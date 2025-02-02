<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
  export let variant: string = "paragraph";

  export let component: string = "p";

  export let theme: string = "dark";
</script>

<style lang="postcss">
  .common-type {
    @apply mb-2 font-semibold leading-tight;
  }

  p,
  .paragraph {
    @apply font-normal text-base;
  }
</style>

{#if component === "h1"}
  <h1 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h1>
{:else if component === "h2"}
  <h2 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h2>
{:else if component === "h3"}
  <h3 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h3>
{:else if component === "h4"}
  <h4 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h4>
{:else if component === "h5"}
  <h5 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h5>
{:else if component === "h6"}
  <h6 class="common-type {variant}" style="color: var(--{theme});" {...$$props}>
    <slot />
  </h6>
{:else if component === "paragraph"}
  <p class={variant} style="color: var(--{theme});" {...$$props}>
    <slot />
  </p>
{/if}
