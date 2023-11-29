import axios from 'axios';
let tasks = [
    { id: 1, title: 'PLAY GAMes', completed: false },
    { id: 2, title: 'Watch TV', completed: true },
    { id: 3, title: 'Go to the gym', completed: false },
    { id: 4, title: 'Do homework', completed: false },
    { id: 5, title: 'Read a book', completed: true },
    { id: 6, title: 'Clean the house', completed: false },
    { id: 7, title: 'Cook dinner', completed: false },
    { id: 8, title: 'Walk the dog', completed: true },
    { id: 9, title: 'Go to the movies', completed: false },
    { id: 10, title: 'Go to the supermarket', completed: false },
];
export const getAllPhotos = async (req, res) => {
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
        const tasks = response.data; // Extracting data from the Axios response
        res.json(tasks); // Sending the extracted data as JSON in the response
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const createTask = (req, res) => {
    const { title, completed } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        completed
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
export const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    tasks = tasks.map((task) => task.id === taskId ? { ...task, title, completed } : task);
    res.json(tasks.find((task) => task.id === taskId));
};
export const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.sendStatus(204);
};
//# sourceMappingURL=taskController.js.map