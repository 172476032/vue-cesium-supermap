  const getParent = $component => ($component.abstract || $component.$el === $component.$children[0].$el) ? getParent($component.$parent) : $component
  
  function destroyInstance () {
    const {unload, renderByParent, $parent} = this
    if (renderByParent) {
      $parent.reload()
    }
    unload()
  }
  
  class Mixin {
    constructor (prop) {
      this.methods = {
        ready () {
          const $parent = getParent(this.$parent)
          const Cesium = this.Cesium = $parent.Cesium
          const viewer = this.viewer = $parent.viewer
          this.load()
          this.$emit('ready', {
            Cesium,
            viewer
          })
        },
        transmitEvent (e) {
          this.$emit(e.type.replace(/^on/, ''), e)
        },
        reload () {
          this && this.BMap && this.$nextTick(() => {
            this.unload()
            this.$nextTick(this.load)
          })
        },
        unload () {
          const {viewer, originInstance} = this
          try {
            switch (prop.type) {
              default:
              viewer[types[prop.type].unload](originInstance)
            }
          } catch (e) {}
        }
      }
      this.computed = {
        renderByParent () {
          return this.$parent.preventChildrenRender
        }
      }
      this.mounted = function () {
        const $parent = getParent(this.$parent)
        const viewer = $parent.viewer
        const {ready} = this
        viewer ? ready() : $parent.$on('ready', ready)
      }
      this.destroyed = destroyInstance
      this.beforeDestroy = destroyInstance
    }
  }
  
  export default type => new Mixin({type})
  