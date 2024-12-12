<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const lesson = $page.url.href.split('/').pop();

	const getLesson = (key: string | undefined) => {
		const lessons: { [key: string]: string } = {
			zero: 'Lesson Zero: Intro',
			one: 'Lesson One: HTML'
		};

		return lessons[key!] ?? '';
	};
	let { children } = $props();
</script>

<nav class="flex-row-spread">
	<a href="{base}/">Internet Gardening</a>
	<p>{getLesson(lesson) ?? ''}</p>
</nav>

<div class="content">
	{@render children?.()}
</div>

<style>
	.flex-row-spread {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.content {
		padding-top: 5rem;
	}

	nav {
		position: absolute;
		width: calc(100% - 2rem);
		left: 0;
		top: 0;
		padding: 1rem;
		border-bottom: 1px solid var(--dark-green);

		a,
		a:visited {
			text-decoration: none;
			color: var(--dark-green);
		}

		a:hover,
		a:focus {
			color: var(--light-green);
		}
	}
</style>
