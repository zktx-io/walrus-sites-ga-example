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
          site-path: './build'
          network: 'testnet'
        env:
          SUI_ADDRESS: ${{ vars.SUI_ADDRESS }}
          SUI_KEYSTORE: ${{ secrets.SUI_KEYSTORE }}
```

## Setting Vars and Secrets

### Vars

<img width="800" alt="vars" src="https://github.com/user-attachments/assets/acf8267d-21a6-4140-9e3d-b918df599fc5">

### Secrets

<img width="800" alt="secrets" src="https://github.com/user-attachments/assets/6eae9607-fe4f-4ffa-9e65-47ad5f60ecc8">

