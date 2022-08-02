# vite-plugin-tauri-plus

Integrate Vite and Tauri

[![NPM version](https://img.shields.io/npm/v/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)

[English](https://github.com/jardenliu/vite-plugin-tauri/blob/main/packages/tauri-plus/README.md) | 简体中文

## 安装
```bash
    $ npm install vite-plugin-tauri-plus -D
```

# 使用
vite.config.ts
```ts
import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [tauri()],
})
```