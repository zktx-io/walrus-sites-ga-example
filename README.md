# Walrus Sites Github Action Example

## [Workflows Setting](https://github.com/marketplace/actions/walrus-sites-ga)

```yml
name: Deploy Walrus Site using Walrus Sites GA

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
  
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build React app
        run: npm run build

      - name: Deploy site to Walrus
        uses: zktx-io/walrus-sites-ga@v0.1.1
        with:
          config-path: './builder.yaml'
          site-path: './build'
          network: 'testnet'
        env:
          SUI_ADDRESS: ${{ vars.SUI_ADDRESS }}
          SUI_KEYSTORE: ${{ secrets.SUI_KEYSTORE }}
```

## [Configuring the site builder](https://docs.walrus.site/walrus-sites/tutorial-config.html)

```yml
# module: site
# portal: walrus.site
package: 0x514cf7ce2df33b9e2ca69e75bc9645ef38aca67b6f2852992a34e35e9f907f58
# general:
#   rpc_url: https://fullnode.testnet.sui.io:443
#   wallet: /path/to/.sui/sui_config/client.yaml
#   walrus_binary: /path/to/walrus
#   walrus_config: /path/to/devnet_deployment/client_config.yaml
#   gas_budget: 500000000
```

## Setting Vars and Secrets

### Vars

<img width="800" alt="vars" src="https://github.com/user-attachments/assets/acf8267d-21a6-4140-9e3d-b918df599fc5">

### Secrets

<img width="800" alt="secrets" src="https://github.com/user-attachments/assets/6eae9607-fe4f-4ffa-9e65-47ad5f60ecc8">

