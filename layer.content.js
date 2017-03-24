;(function(layer){
  'use strict';
  
  layer.content = function(content){
      var $layerContent = $('.layui-layer-content'),
          layerContent = $layerContent.html();
      layerContent = layerContent.replace(/^(<[\s\S]*?<\/i>)?[\s\S]*?$/, '$1' + content);
      $layerContent.html(layerContent);
  };
  
})(layer);
