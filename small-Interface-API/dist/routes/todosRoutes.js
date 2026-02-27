import express from "express";
const router = express.Router();
const todos = [
    {
        id: 1,
        title: "Buy Groceries",
        done: false,
    },
    {
        id: 2,
        title: "Learn Typescript",
        done: false,
    },
];
router.get("/", (req, res) => {
    res.json(todos);
});
router.post("/", (req, res) => {
    // Define the request
    const { title } = req.body;
    // Save the data
    const newTodo = {
        id: todos.length + 1,
        title,
        done: false,
    };
    // Push into the array(todos)
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
export default router;
