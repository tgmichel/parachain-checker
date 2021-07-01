<script>
	export let config;
	import Relay from './Relay.svelte';
</script>

<main>
	{#each config.relays as data}
		<Relay data = {data}/>
	{/each}
</main>

<style>
	:global(body) {
		background-color: #edeaf6;
		font-family: 'Titillium Web', sans-serif;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		position: relative;
	}

	@media (min-width: 1024px) {
		main {
			max-width: 50%;
		}
	}

	:global(table.providers) {
		border: 1px solid #FFF;
		background-color: #EEEEEE;
		width: 100%;
		text-align: left;
		border-collapse: collapse;
	}

	:global(table.providers td) {
		border: 1px solid #FFF;
		padding: 3px 2px;
	}

	:global(table.providers th) {
		border: 1px solid #FFF;
		padding: 3px 2px;
	}

	:global(table.providers tbody td) {
		
        font-size: 1.2em;
	}

	:global(table.providers tr:nth-child(even)) {
		background: #e1ddee;
	}

	:global(table.providers thead) {
		background: #1C6EA4;
		background: -moz-linear-gradient(top, #9855bb 0%, #8932ad 66%, #761ca4 100%);
		background: -webkit-linear-gradient(top, #9855bb 0%, #8932ad 66%, #761ca4 100%);
		background: linear-gradient(to bottom, #9855bb 0%, #8932ad 66%, #761ca4 100%);
		border-bottom: 2px solid #FFF;
	}

	:global(table.providers thead th) {
		font-size: 15px;
		font-weight: bold;
		color: #FFFFFF;
		border-left: 2px solid #FFF;
	}

	:global(table.providers thead th:first-child) {
		border-left: none;
	}
</style>