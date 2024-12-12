<script lang="ts">
	import { base } from '$app/paths';

	let { path, text } = $props();
</script>

<a href="{base}/{path}" class="button">{text}</a>

<style>
	.button {
		border: var(--border-standard);
		border-radius: var(--border-radius-standard);
		padding: var(--spacing-x-small);
		text-decoration: none;
	}

	.button:hover,
	.button:focus {
		background-color: var(--dark-green);
		color: var(--cream);
	}

	.button:active {
		background-color: var(--light-green);
		border-color: var(--light-green);
	}
</style>
