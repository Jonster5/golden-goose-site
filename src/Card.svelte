<script lang="ts">
export let click: () => void;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article
	on:click={click}
	on:keydown={click}
	class="w-full p-3 flex flex-col justify-center items-center bg-[#ffffff55] shadow-lg rounded-md text-white font-light hover:cursor-pointer hover:-translate-y-1">
	<blockquote class="text-sm">
		<slot />
	</blockquote>
</article>
