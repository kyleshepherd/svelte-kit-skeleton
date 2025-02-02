<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let { ...props }: Props = $props();
</script>

<div
  {...props}
  class="w-full max-w-screen-lg px-4 mx-auto lg:max-w-screen-xl xl:max-w-[1440px]"
>
  {@render props.children?.()}
</div>
