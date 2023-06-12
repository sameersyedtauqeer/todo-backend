var express = require("express");
var router = express.Router();
const TodoController = require("../controllers/todo")

router.post("/api/todo", TodoController.createTodo)

router.get("/api/todo", TodoController.getTodo)

router.delete("/api/todo/:id", TodoController.deleteTodo)

router.put("/api/todo", TodoController.updateTodo)


module.exports = router