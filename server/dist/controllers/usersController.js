import axios from 'axios';
export const getAllUsers = async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        const tasks = response.data; // Extracting data from the Axios response
        res.json(tasks); // Sending the extracted data as JSON in the response
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=usersController.js.map