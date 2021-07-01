<script>
	export let data;
	import Provider from './Provider.svelte';
	import Para from './Para.svelte';
</script>

<div class="container">
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
    {#each data.paras as para_data}
        <Para data = {para_data}/>
    {/each}
</div>

<style>
    .container {
        font-size: 1.2em;
        padding: 1em;
        background-color: #cbc5dd;
        border-top: 1em solid #5e0f87;
        border-radius: 0.5em;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
</style>