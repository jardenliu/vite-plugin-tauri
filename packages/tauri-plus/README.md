# vite-plugin-tauri-plus

Integrate Vite and Tauri

[![NPM version](https://img.shields.io/npm/v/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)

English | [简体中文](https://github.com/jardenliu/vite-plugin-tauri/blob/main/packages/tauri-plus/README.zh-CN.md)

## Install
```bash
    $ npm install vite-plugin-tauri-plus -D
```

## Usage
after init `src-tauri`, add `vite-plugin-tauri-plus` into `vite.config.ts`.

```ts
import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [tauri()],
})
```

## Options
Inject options into tauri cli

example
```ts
import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [
        tauri({
            bundles: ['deb', 'app', 'dmg'],
            debug: true,
            exitOnPanic: true,
            release: true,
            runner: 'cargo',
        })
    ],
})
```

### bundles 
- type: string[]
- options: 'deb' | 'appimage' | 'msi' | 'app' | 'dmg' | 'updater'
- description: 
  
    list of bundles to package. Each bundle must be one of `deb`, `appimage`, `msi`, `app` or `dmg` on MacOS and `updater` on all platforms. Note that the `updater` bundle is not automatically added so you must specify it if the updater is enabled.

### config 
- type: string
- description: 
  
   JSON string or path to JSON file to merge with tauri.conf.json

### debug 
- type: boolean
- description: 
  
   Builds with the debug flag


### exitOnPanic 
- type: boolean
- description: 
  
   Exit on panic

### release 
- type: boolean
- description: 
  
    Run the code in release mode

### verbose 
- type: boolean
- description: 
  
    Enables verbose logging

### features 
- type: string[]
- description: 
  
    List of cargo features to activate

### target 
- type: string
- description: 
    
    Target triple to build against.It must be one of the values outputted by `$rustc --print target-list` or `universal-apple-darwin` for an universal macOS application. Note that compiling an universal macOS application requires both `aarch64-apple-darwin` and `x86_64-apple-darwin` targets to be installed.

### runner 
- type: string
- description: 
    
     Binary to use to build the application, defaults to `cargo`