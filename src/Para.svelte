<script>
	export let data;
	import Provider from './Provider.svelte';
</script>

<h3>{data.name}</h3>
<table class = "providers">
    <thead>
		<tr>
			<th colspan="1">Name</th>
			<th colspan="1">Status</th>
			<th colspan="4">Tip</th>
			<th colspan="3">Health</th>
			<th colspan="3">Last</th>
		<tr/>
	</thead>
    <tbody>
    {#each data.providers as provider}
        <Provider data = {provider} target = {data.target}/>
    {/each}
    </tbody>
</table>