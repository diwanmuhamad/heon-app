# Heon BE REST API

## Getting started

### 1. setup ENV and install dependencies

```
please use node 18 at least
cp .env.example .env
cp config/config.json.example config/config.json

[Please fill the config and env accordingly]

yarn install
```

### 2. Migration 

```
npx sequelize-cli db:migrate
```

### 3. Start the REST API server

```
yarn run dev
```

The server is now running