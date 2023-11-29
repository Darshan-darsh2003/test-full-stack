import axios from 'axios';
  
  export const getAllUsers = async (req: any, res: any): Promise<void> => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const tasks = response.data; // Extracting data from the Axios response
      res.json(tasks); // Sending the extracted data as JSON in the response
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };
  