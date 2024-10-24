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
        uses: zktx-io/walrus-sites-ga@vlatest
        with:
          site-path: './build'
          network: 'testnet'
        env:
          SUI_ADDRESS: ${{ vars.SUI_ADDRESS }}
          SUI_KEYSTORE: ${{ secrets.SUI_KEYSTORE }}
```

## Setting Vars and Secrets

### Vars

<img width="805" alt="vars" src="https://github.com/user-attachments/assets/bd04a60a-705d-446a-9349-fb6b33277191">

### Secrets

<img width="790" alt="secrets" src="https://github.com/user-attachments/assets/304f024f-59e7-468a-a4c3-1b3b9cd3d1f4">
