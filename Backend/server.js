const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// const cors = require('cors');
// app.use(cors());



// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',      
    database: 'cremys' 
});

// connection test
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Start contect  
// post 
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received data:', req.body); // Log received data

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data inserted:', result); // Log insertion result
        res.status(200).json({ message: 'Contact saved successfully' });
    });
});
// end post
// end contect

// start order
// start post
app.post("/api/orders", (req, res) => {
    const {
        itemName,
        itemPrice,
        customerName,
        phoneNumber,
        email,
        specialRequests,
        quantity,
        totalPrice,
    } = req.body;

    const query = `
        INSERT INTO orders (item_name, item_price, customer_name, phone_number, email, special_requests, quantity, total_price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [itemName, itemPrice, customerName, phoneNumber, email, specialRequests, quantity, totalPrice],
        (err, result) => {
            if (err) {
                console.error("Error inserting order:", err);
                res.status(500).send("Error inserting order into database.");
                return;
            }
            res.status(200).send("Order placed successfully!");
        }
    );
});


app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    // Validate fields
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please fill in all fields.' });
    }
  
    try {
      // Check if email already exists
      db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Database query error.' });
        }
        if (result.length > 0) {
          return res.status(400).json({ error: 'Email already in use!' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Insert user into the database
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(sql, [username, email, hashedPassword], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to register user.' });
          }
          return res.status(200).json({ message: 'User registered successfully!' });
        });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Server error.' });
    }
  });


  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
        return res.status(400).json({ error: 'Please fill in both fields.' });
    }

    // Check if email matches admin credentials
    if (email === 'admin@gmail.com' && password === '12345678') {
        // Hardcoded admin login
        return res.status(200).json({
            message: 'Admin login successful!',
            user: {
                id: 1, // Hardcoded admin ID (you can adjust as needed)
                username: 'Admin',
                email: 'admin@gmail.com',
                is_admin: true
            },
            redirect: '/admin' // Redirect to admin page for admin login
        });
    }

    // Check if email exists in the database for staff users
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database error.' });
        }

        if (result.length === 0) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        const user = result[0]; // The user record from the database

        // Compare the entered password with the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // For staff users, they are redirected to the /staff page
        if (!user.is_admin) {
            return res.status(200).json({
                message: 'Staff login successful!',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    is_admin: user.is_admin
                },
                redirect: '/staff' // Regular staff users are redirected to the staff page
            });
        } else {
            // In case the user is admin, send them to /admin page
            return res.status(200).json({
                message: 'Admin login successful!',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    is_admin: user.is_admin
                },
                redirect: '/admin' // Admin users are redirected to the admin page
            });
        }
    });
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

