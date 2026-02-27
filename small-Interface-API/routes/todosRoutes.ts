import express from "express";
import type { Request, Response } from "express";
import type { Todo } from "../models/todosModel.js";

const router = express.Router();

const todos: Todo[] = [
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

router.get("/", (req: Request, res: Response) => {
  res.json(todos);
});

router.post("/", (req: Request, res: Response) => {
  // Define the request
  const { title } = req.body;

  // Save the data
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    done: false,
  };

  // Push into the array(todos)
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

export default router;
