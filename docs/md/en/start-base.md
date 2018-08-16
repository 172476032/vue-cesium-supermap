# Base

## Global Component Events

|name|parameter|description|
|---|------|---|
|ready |{Cesium, viewer}|Triggers when viewer is ready. It returns a core class of Cesium and a instance which is binding on the component `SmViewer`. Please **DON'T** access the core class and the instance in lifecycle.|

## Global Component Instance Methods

|name|parameter|description|
|-----|---|---|
|load||An abstract method that is executed when a component will be load.|
|unload||An abstract method that is executed when a component will be unload.|
|reload||Excute the unload method, and then excute load method.|

## Constants

- To be added

## Private Datatype

### Position

Describes the latitude, longitude and height of the viewer.

#### Structure

```javascript
{
  longitude: Number,
  latitude: Number,
  height: Number
}
```

## Reference

> [SuperMap Official Documentation](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
