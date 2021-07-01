<script>
	export let data;
	export let target;
    import { WsProvider, ApiPromise } from "@polkadot/api";
    import { options } from '@acala-network/api';
    import { onMount } from 'svelte';

    let provider = new WsProvider(data.endpoint);
    let provider_metadata = {
        status: 'connecting', // connecting | connected | disconnected
        init: {
            time: null,
            block: null
        },
        avg: 'waiting', // string | number
        last: (0).toFixed(1),
        health: 'waiting', // waiting | good (<= 10% target) | fair | bad | stall
        blocks: 0,
        height: 0
    };
    let loading = true;
    let init = true;
    let ignore_first = true;
    async function connect() {
        let api = new ApiPromise(options({ provider }))
            .on('connected', function(){
                provider_metadata.status = 'connected';
            })
            .on('disconnected', function(){
                if(provider_metadata.status == 'connected') {
                    provider_metadata.status = 'disconnected';
                }
            })
            .on('error', function(){
                provider_metadata.status = 'connecting';
            });
        await api.isReady;
        loading = false;
		let count = 0;
		const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
            if(ignore_first) {
                ignore_first = false;
            } else {
                provider_metadata.last = (0).toFixed(1);
                if(init) {
                    setInterval(function(){
                        provider_metadata.last = (Number(provider_metadata.last) + 0.1).toFixed(1);
                        if(Number(provider_metadata.last) > (20 * target)) {
                            provider_metadata.health = 'unresponsive';
                        }
                    }, 100);
                    init = false;
                    provider_metadata.init.time = new Date().getTime();
                    provider_metadata.init.block = header.number;
                } else {
                    provider_metadata.avg = 
                        Math.abs(((new Date().getTime() - provider_metadata.init.time) / 1000)
                        / (header.number - provider_metadata.init.block)).toFixed(2);
                    if(Number(provider_metadata.avg) <= target + (target * 0.2)) {
                        provider_metadata.health = 'good';
                    }
                    else if(Number(provider_metadata.avg) <= target + (target * 0.4)) {
                        provider_metadata.health = 'fair';
                    }
                    else {
                        provider_metadata.health = 'bad';
                    }
                    provider_metadata.height = header.number;
                }
            }
		});
	}

    onMount(() => {
	    connect();
    });
</script>

<tr>
    <td colspan="1" style = "width: 30%">{data.name}</td>
    <td colspan="1" style = "width: 20%" class = "{provider_metadata.status}">{provider_metadata.status}</td>
    <td colspan="4" style = "width: 20%">{provider_metadata.height}</td>
    <td colspan="3" style = "width: 20%">
        {provider_metadata.health}
        {#if provider_metadata.health != 'good' && provider_metadata.health != 'waiting'}
            <i>({provider_metadata.avg})</i>
        {/if}
    </td>
    <td colspan="3" style = "width: 10%">{provider_metadata.last}</td>
</tr>

<style>
    .connected {
        color: #8433cc;
        font-weight: 600;
    }
    .connecting {
        color: #999
    }
    .disconnected {
        color: #ff9933
    }
    .good {

    }
    .fair {

    }
    .bad {

    }
    .unresponsive {

    }
</style>