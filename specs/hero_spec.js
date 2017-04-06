var assert = require("assert")
var Hero = require("../hero")
var Task = require("../task")
var Food = require("../food")

describe('Hero',function(){

var hero
var task1
var task2
var task3
var task4
var food

beforeEach(function(){
  hero = new Hero("Mr Hero",100,"Cheese")
  task1 = new Task(8, 2, "chocolate")
  task2 = new Task(5, 1, "diamond")
  task3 = new Task(10, 3, "bag of chips")
  task4 = new Task(2, 1, "free cup of tea")
  food1 = new Food("chips",5)
  food2 = new Food("Cheese",10)
})

it("has a name",function(){
  assert.strictEqual("Mr Hero",hero.getName())
})

it("has health",function(){
  assert.strictEqual(100,hero.getHealth())
})

it("has a favourite food",function(){
  assert.strictEqual("Cheese",hero.getFavFood())
})

it("can say name",function(){
  assert.strictEqual("My name is Mr Hero",hero.sayName())
})

it("starts with empty task list", function(){
  assert.strictEqual(0,hero.countTasks())
})

it("can add tasks to list",function(){
  hero.addTask(task1)
  assert.strictEqual(1,hero.countTasks())
})

it("can add replenishment value to health",function(){
  hero.eat(food1)
  assert.strictEqual(105,hero.getHealth())
})

it("can add 1.5x replenishment value to health when eats fav food", function(){
  hero.eat(food2)
  assert.strictEqual(115, hero.getHealth())

})

it("can sort by attribute", function(){
  hero.addTask(task1)
  hero.addTask(task2)
  hero.addTask(task3)
  hero.addTask(task4)

  hero.sortByAttribute("reward")

})











})