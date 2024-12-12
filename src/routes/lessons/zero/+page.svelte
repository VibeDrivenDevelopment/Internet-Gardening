<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<article>
	<h2>Introduction</h2>
	<div class="content">
		<p>
			Internet Gardening? Yeah, websites are basically vegetables. Some people grow them on an
			industrial scale, others in pots in their backyard. That's what we're doing today.
		</p>
		<p>For this first course, our end goal is to build a static website:</p>
		<ul class="reverse-padding">
			<li>That looks pretty</li>
			<li>Allows people to input their favorite song</li>
			<li>Shows a list of songs people have submitted</li>
		</ul>
		<h3>Where Do We Start?</h3>
		<p>
			Let's get our environment setup. The perk of building a simple website is we don't need that
			many tools.
		</p>
		<p>
			First, if you don't have one let's go ahead and set up a <a href="https://github.com/join"
				>GitHub Account</a
			>. Github is where we'll keep track of our progress <span>and</span>
			host our first couple websites.
		</p>
		<p>
			Once we've set that up we'll need to install <a href="https://code.visualstudio.com/"
				>VSCode</a
			>
			(<span>you can get that from kanji</span>). This will be the text editor we use to write all
			of the files that make up our site.
		</p>
	</div>
	<div class="next-button">
		<Button path="lessons/one" text="Next" />
	</div>
</article>

<style>
	.next-button {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& .content {
			max-width: 80ch;

			display: flex;
			flex-direction: column;
			row-gap: var(--spacing-small);

			& .reverse-padding {
				margin-top: calc(var(--spacing-xx-small) * -1);
			}

			& span {
				font-style: italic;
			}
		}
	}
</style>
