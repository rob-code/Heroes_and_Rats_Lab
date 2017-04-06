var _ = require('lodash')

var Hero = function(name,health,favFood){
  this.name = name
  this.health = health
  this.favFood = favFood
  this.tasks = []
}

Hero.prototype = {
  getName: function(){
    return this.name
  },
  getHealth: function(){
    return this.health
  },
  getFavFood: function(){
    return this.favFood
  },
  sayName: function(){
    return "My name is " + this.getName()
  },
  countTasks: function(){
    return this.tasks.length
  },
  addTask: function(task){
    this.tasks.push(task)
  },
  eat: function(food){

    if(food.name === this.favFood){
      this.health += food.value * 1.5 
    } else {
      this.health += food.value      
    }
  },

  sortByAttribute: function(att){

   var sorted =  _.sortBy(this.tasks, att)

    console.log(sorted)


  }


}



module.exports = Hero