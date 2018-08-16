# VUE SUPERMAP CESIUM

<p align="center">
  <img src="https://lauxb.github.io/vue-cesium-supermap/Cesium/favicon.png" width="200px">
</p>
<p align="center">SuperMap iClient 3D for WebGL(built on Cesium) components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-cesium-supermap.svg)]()
[![Travis](https://img.shields.io/travis/lauxb/vue-cesium-supermap.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-cesium-supermap.svg)](http://packagequality.com/#?package=vue-cesium-supermap)
[![npm](https://img.shields.io/npm/dm/vue-cesium-supermap.svg)]()
[![license](https://img.shields.io/github/license/lauxb/vue-cesium-supermap.svg)]()

## Languages

- [中文](https://github.com/lauxb/vue-cesium-supermap/blob/master/README.zh.md)
- [English](https://github.com/lauxb/vue-cesium-supermap/blob/master/README.md)

## Documentation

[https://lauxb.github.io/vue-cesium-supermap](https://lauxb.github.io/vue-cesium-supermap)

## Get Start

### Installation

```bash
npm i --save vue-cesium-supermap
```

### Initialization

```javascript
import Vue from 'vue'
import SuperMapCesium from 'vue-cesium-supermap'

Vue.use(SuperMapCesium, {
  // cesiumPath is the path of the Cesium library, such as
  // cesiumPath: './statics/Cesium'
  // use online reference for http
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // use online reference for https
  cesiumPath: 'https://lauxb.github.io/vue-cesium-supermap/Cesium'
})
```

### Usage

```vue
<template>
  <div class="content">
    <sm-viewer>
    </sm-viewer>
  </div>
</template>

<style>
.content {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
```

## Contributing

[Contributing Guide](https://github.com/lauxb/vue-cesium-supermap/blob/master/CONTRIBUTING.md)

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, lauxb <370681295@qq.com>

## Thanks

I referenced a lot from the [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map) project. Thanks very much!