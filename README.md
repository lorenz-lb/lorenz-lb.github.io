# PortfoliOS 


## Building
Install dependencies
```bash
npm i 
```

Install rust dependencies
```bash
cd rust_wasm
cargo build
```

in rust_wasm:
```bash
wasm-pack build --target web --out-dir ../src/lib/wasm_rocessor --no-typescript 
```

## Running 
```bash
npm run dev -- --host
```

## Deploying
```bash
pnpm build && pnpx gh-pages -d build
# if pnpm is not installed 
# TODO :)
```


## Problems
Sometime there are problems regarding the ownership of files. If so just do the following in your __HOST__ at the root of the project

```bash
sudo chown -R [your user]:[your user] .
```

