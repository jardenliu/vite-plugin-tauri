# vite-plugin-tauri-plus

Integrate Vite and Tauri

[![NPM version](https://img.shields.io/npm/v/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)

English | [简体中文](https://github.com/jardenliu/vite-plugin-tauri/blob/main/packages/tauri-plus/README.zh-CN.md)

## Install
```bash
    $ npm install vite-plugin-tauri-plus -D
```

# Usage
vite.config.ts
```ts
import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [tauri()],
})
```