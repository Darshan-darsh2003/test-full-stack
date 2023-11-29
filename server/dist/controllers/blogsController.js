import axios from 'axios';
export const getAllBlogs = async (req, res) => {
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
        const tasks = response.data; // Extracting data from the Axios response
        res.json(tasks); // Sending the extracted data as JSON in the response
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//# sourceMappingURL=blogsController.js.map