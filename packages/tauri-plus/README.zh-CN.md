# vite-plugin-tauri-plus

Tauri的Vite的整合插件

[![NPM version](https://img.shields.io/npm/v/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-tauri-plus.svg)](https://npmjs.org/package/vite-plugin-tauri-plus)

[English](https://github.com/jardenliu/vite-plugin-tauri/blob/main/packages/tauri-plus/README.md) | 简体中文

## 安装
```bash
    $ npm install vite-plugin-tauri-plus -D
```

## 使用
在初始化 `src-tauri` 之后, 把插件 `vite-plugin-tauri-plus` 添加到 `vite.config.ts`里面.

```ts
import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [tauri()],
})
```

## 选项
给`tauri cli`注入选项

示例
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
- 类型：string[]
- 选项： 'deb' | 'appimage' | 'msi' | 'app' | 'dmg' | 'updater'
- 描述：
  
    需要打包的类型列表，每个打包里面必须是“deb”、“appimage”、“msi”、“app”或“dmg”中的一个。注意，“updater”打包时不是自动添加的，如果启用了更新程序，则必须指定`updater`。

### config 
- 类型：string
- 描述：
  
   JSON 字符串或者 JSON文件的配置路径，最终会把配置合并到`tauri.conf.json`中

### debug 
- 类型：boolean
- 描述：
  
   编译时启用debug

### exitOnPanic 
- 类型：boolean
- 描述：
  
   错误时退出

### release 
- 类型：boolean
- 描述：
  
    执行代码使用release模式

### verbose 
- 类型：boolean
- 描述：
  
    启用详细日志记录

### features 
- 类型：string[]
- 描述：
  
    要激活的cargo个功能列表

### target 
- 类型：string
- 描述：
    
    其他构建对象
    
    对于通用macOS应用程序来说，选项值必须是“$rustc——打印目标列表”或“通用apple darwin”输出的值之一。

    请注意，编译通用macOS应用程序需要安装“aarch64 apple darwin”和“x86_64-apple-Darwins”。

### runner 
- 类型：string
- 描述：
    
     编译应用的二进制文件 默认是：`cargo`