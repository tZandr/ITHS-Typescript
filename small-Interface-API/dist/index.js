import express from "express";
import todosRoutes from "./routes/todosRoutes.js";
const app = express();
app.use("/todos", todosRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
