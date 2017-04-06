var Food = function(name,value){
  this.name = name
  this.value = value
}

Food.prototype = {
  getName: function(){
    return this.name
  },
  getValue: function(){
    return this.value
  }
}



module.exports = Food