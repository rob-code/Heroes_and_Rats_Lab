var assert = require("assert")
var Task = require("../task")

describe("Task",function(){

var task

beforeEach(function(){
  task = new Task(8, 2, "chocolate")
})

it("task has a difficulty level", function(){
  assert.strictEqual(8, task.getDifficulty())
})

it("task has urgency level", function(){
  assert.strictEqual(2, task.getUrgency())
})

it("task has reward", function(){
  assert.strictEqual("chocolate", task.getReward())
})

it("can check if task is complete", function(){
  assert.strictEqual(false, task.isComplete())
})

it('can toggle task complete/incomplete status', function(){
  task.toggleCompleteStatus()
  assert.strictEqual(true, task.isComplete())
  task.toggleCompleteStatus()
  assert.strictEqual(false, task.isComplete())
  task.toggleCompleteStatus()
  assert.strictEqual(true, task.isComplete())
})
















})