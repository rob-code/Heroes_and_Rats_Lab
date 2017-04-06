var Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty
  this.urgency = urgency
  this.reward = reward
  this.complete = false
}

Task.prototype = {
  getDifficulty: function(){
    return this.difficulty
  },

  getUrgency: function(){
    return this.urgency
  },

  getReward: function(){
    return this.reward
  },

  isComplete: function(){
    return this.complete
  },

  toggleCompleteStatus: function(){
    this.complete = !this.complete
  }




}


module.exports = Task;