export default
{
    "relays": [
        {
            "name": "Kusama",
            "target": 6,
            "providers": [
                {
                    "name": "Parity",
                    "endpoint": "wss://kusama-rpc.polkadot.io"
                },
                {
                    "name": "OnFinality",
                    "endpoint": "wss://kusama.api.onfinality.io/public-ws"
                },
                {
                    "name": "Patract",
                    "endpoint": "wss://kusama.elara.patract.io"
                }
            ],
            "paras": [
                {
                    "name": "Moonriver",
                    "target": 12,
                    "providers": [
                        {
                            "name": "PureStake",
                            "endpoint": "wss://wss.moonriver.moonbeam.network"
                        },
                        {
                            "name": "OnFinality",
                            "endpoint": "wss://moonriver.api.onfinality.io/public-ws"
                        }
                    ]
                },
                {
                    "name": "Karura",
                    "target": 12,
                    "providers": [
                        {
                            "name": "Acala 0",
                            "endpoint": "wss://karura-rpc-0.aca-api.network"
                        },
                        {
                            "name": "Acala 1",
                            "endpoint": "wss://karura-rpc-1.aca-api.network"
                        },
                        {
                            "name": "Acala 2",
                            "endpoint": "wss://karura-rpc-2.aca-api.network/ws"
                        },
                        {
                            "name": "Acala 3",
                            "endpoint": "wss://karura-rpc-3.aca-api.network/ws"
                        },
                        {
                            "name": "Polkawallet",
                            "endpoint": "wss://karura.polkawallet.io"
                        },
                        {
                            "name": "OnFinality",
                            "endpoint": "wss://karura.api.onfinality.io/public-ws"
                        }
                    ]
                }
            ]
        }
    ]
}
