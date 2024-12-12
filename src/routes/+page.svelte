<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/Button.svelte';

	let dialog: HTMLDialogElement;

	const openDialog = (event: KeyboardEvent) => {
		const openCmdPalette = event.metaKey && event.shiftKey && event.key == 'l';
		if (!openCmdPalette) return;

		dialog.showModal();
	};
</script>

<svelte:window on:keypress={openDialog} />

<div id="home">
	<main>
		<article>
			<h2>Growing An Internet Garden</h2>
			<p>A small course on building websites</p>
		</article>
		<div class="start-button">
			<Button path="lessons/zero" text="Begin" />
		</div>
	</main>
	<!-- <dialog bind:this={dialog} id="command-palette">
		<h2>Quick Actions</h2>
		<details>
			<summary>Open Lessons</summary>
			<a href="lessons/one/intro.html" tabindex="0">Lesson One: HTML</a>
			<a href="lessons/two.html" tabindex="0">Lesson Two: CSS</a>
			<a href="lessons/three.html" tabindex="0">Lesson Three: Interactive HTML</a>
		</details>
	</dialog> -->
	<div class="forest">
		🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴🥕🌳🪴
	</div>
</div>

<style>
	.start-button {
		margin-top: var(--spacing-xx-small);
		position: absolute;
		bottom: 2.5rem;
		right: 1rem;
	}

	#home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;

		& article {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: var(--spacing-xx-small);

			& h2 {
				margin-block-start: 0;
				margin-block-end: 0;
				width: 100%;
			}

			& p {
				flex-grow: 1;
				width: 100%;
			}
		}

		& dialog[open] {
			display: flex;
			flex-direction: column;
		}

		& dialog {
			border-radius: var(--border-radius-standard);
			border-color: var(--dark-green);
			min-width: 40vw;

			background-color: var(--cream);

			row-gap: 0.5rem;

			& h2 {
				font-size: 1.5rem;
				margin-top: unset;
				font-family: 'Karla', sans-serif;
				font-optical-sizing: auto;
				font-weight: 500;
				font-style: normal;
			}

			& details:focus-visible {
				outline-color: var(--dark-green);
				outline-width: 1px;
				outline-style: auto;
			}

			& details[open] summary {
				border-bottom: 1px solid var(--dark-green);
			}

			& a:focus-visible,
			& summary:focus-visible {
				outline-color: var(--dark-green);
				outline-width: 1px;
				outline-style: auto;
			}

			& details {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: start;

				border: solid 1px var(--dark-green);
				border-radius: 0.125rem;

				& summary {
					font-family: 'Karla', sans-serif;
					font-optical-sizing: auto;
					font-weight: 500;
					font-style: normal;

					padding: 0.125rem 0.5rem;
					background-color: var(--caramel);
				}

				& a {
					font-family: 'Karla', sans-serif;
					font-optical-sizing: auto;
					font-weight: 500;
					font-style: normal;

					padding: 0.25rem;
				}
			}
		}
	}
</style>
