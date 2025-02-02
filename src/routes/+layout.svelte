<script lang="ts">
  import "../styles/global.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<main>
  {@render children?.()}
</main>
