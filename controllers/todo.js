const TodoModel = require("../model/todoSchema")

const TodoController = {
    getTodo: (req, res) => {

        TodoModel.find({})
            .then((data) => {
                res.json({
                    message: "Successfully Get",
                    status: true,
                    data
                })
            })
            .catch((error) => {
                res.json({
                    message: "Internal Server error",
                    status: false
                })
            })
    },
    
    createTodo: (req, res) => {
        const body = req.body
        console.log("body", body)

        if (!body.todo) {
            res.json({
                message: 'Required Field Are missing',
                status: false

            })

            return;
        }
        const objTosend = {
            todo: body.todo,
        }
        TodoModel.create(objTosend)
            .then((data) => {
                res.json({
                    message: "Successfully Created",
                    status: true,
                    data
                })
            })
            .catch((error) => {
                res.json({
                    message: "Internal Server error",
                    status: false
                })
            })
    },

    deleteTodo: (req, res) => {
        const { id } = req.params;

        TodoModel.findOneAndDelete(id)
            .then((data) => {
                res.json({
                    message: "Successfully Deleted",
                    status: true
                })
            })
            .catch((error) => {
                res.json({
                    message: "Internal server error",
                    status: false
                })
            })
        console.log(id)
    },

    updateTodo: (req, res) => {
        const body = req.body;
        console.log('body', body)

        if (!body.todo) {
            res.json({
                message: 'Required Field Are missing',
                status: false

            })

            return;
        }
        const objTosend = {
            todo: body.todo,
        }
        TodoModel.findByIdAndUpdate(body.id, objTosend)
            .then((data) => {
                res.json({
                    message: "Successfully Update",
                    status: true,
                    data
                })
            })
            .catch((error) => {
                res.json({
                    message: "Internal Server error",
                    status: false
                })
            })
    }


}

module.exports = TodoController