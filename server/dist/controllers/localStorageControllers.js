export const getUsers = (res) => {
    const users = localStorage.getItem('users');
    if (users) {
        return res.json(JSON.parse(users)).status(200);
    }
    else {
        return res.status(404).json({ message: 'Users not found' });
    }
};
export const setUser = (req, res) => {
    const { name, email, password } = req.body;
    const users = localStorage.getItem('users');
    if (name && email && password) {
        if (!users) {
            const users = [];
            const newUser = {
                name,
                email,
                password
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return res.json(newUser).status(200);
        }
        else {
            const users = JSON.parse(localStorage.getItem('users') || '{}');
            const newUser = {
                name,
                email,
                password
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return res.json(newUser).status(200);
        }
    }
    else {
        return res.status(404).json({ message: 'Invalid User Data' });
    }
};
//# sourceMappingURL=localStorageControllers.js.map