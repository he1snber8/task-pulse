// controllers/taskController.js
let tasks = [];
exports.getTasks = (req,res) => { res.json(tasks.sort((a,b)=>a.priority-b.priority)); };
exports.createTask = (req,res) => { const t = { id: Date.now(), ...req.body }; tasks.push(t); res.status(201).json(t); };
// TODO: add updateTask and deleteTask