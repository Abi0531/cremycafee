const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL server.');
    initializeDatabase(); 
});

const initializeDatabase = () => {
    const createDatabaseQuery = `
        CREATE DATABASE IF NOT EXISTS cremy;
    `;
    const useDatabaseQuery = `
        USE cremy;
    `;
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    const createContactTableQuery = `
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;


    const createOrdersTable = `
    CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    item_price DECIMAL(10, 2) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    special_requests TEXT,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;

    const alterOrdersTableQuery = `
    ALTER TABLE orders
    ADD COLUMN status ENUM('inprogress', 'delivered') NOT NULL DEFAULT 'inprogress';
    `;

    // const createStafsTableQuery = `
    //     CREATE TABLE IF NOT EXISTS stafs (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         name VARCHAR(255) NOT NULL,
    //         email VARCHAR(255) NOT NULL,
    //         contact VARCHAR(255) NOT NULL,
    //         address VARCHAR(255) NOT NULL,
    //         position VARCHAR(255) NOT NULL,
    //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    //     );
    // `;

    db.query(createDatabaseQuery, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database "cremy" created or already exists.');

        db.query(useDatabaseQuery, (err) => {
            if (err) {
                console.error('Error using database:', err);
                return;
            }
            console.log('Using database "cremy".');

            db.query(createUsersTableQuery, (err) => {
                if (err) {
                    console.error('Error creating users table:', err);
                    return;
                }
                console.log('Table "users" created or already exists.');
            });

            db.query(createContactTableQuery, (err) => {
                if (err) {
                    console.error('Error creating contacts table:', err);
                    return;
                }
                console.log('Table "contacts" created or already exists.');
            });

            db.query(createOrdersTable, (err) => {
                if (err) {
                  console.error("Error creating orders table:", err);
                } else {
                  console.log("Orders table is ready.");
                }
            });

            db.query(alterOrdersTableQuery, (err) => {
                if (err) {
                    console.error("Error altering orders table:", err);
                } else {
                    console.log("Orders table altered successfully.");
                }
            });

            // db.query(createStafsTable, (err) => {
            //   if (err) {
            //     console.error("Error creating staf table:", err);
            //   } else {
            //     console.log("Stafs table is ready.");
            //   }
            // });
        });
    });
};

// Register API
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        db.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (err, results) => {
                if (err) {
                    return res.status(500).json({ error: 'Database error.' });
                }

                if (results.length > 0) {
                    return res
                        .status(400)
                        .json({ error: 'Email is already registered.' });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                db.query(
                    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                    [username, email, hashedPassword],
                    (err, results) => {
                        if (err) {
                            return res.status(500).json({ error: 'Database error.' });
                        }

                        return res
                            .status(201)
                            .json({ message: 'User registered successfully.' });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Server error.' });
    }
});


// Contact Form API
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Save to database
    db.query(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name, email, message],
        (err, results) => {
            if (err) {
                console.error('Error saving contact data:', err);
                return res.status(500).json({ error: 'Database error.' });
            }

            return res.status(201).json({ message: 'Your message has been sent successfully!' });
        }
    );
});

// Update a contact
app.put('/api/contact/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required for update.' });
    }

    // Update the contact
    db.query(
        'UPDATE contacts SET name = ?, email = ?, message = ? WHERE id = ?',
        [name, email, message, id],
        (err, results) => {
            if (err) {
                console.error('Error updating contact data:', err);
                return res.status(500).json({ error: 'Database error.' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Contact not found.' });
            }

            return res.status(200).json({ message: 'Contact updated successfully.' });
        }
    );
});

// Delete a contact
app.delete('/api/contact/:id', (req, res) => {
    const { id } = req.params;

    // Delete the contact
    db.query('DELETE FROM contacts WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting contact:', err);
            return res.status(500).json({ error: 'Database error.' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Contact not found.' });
        }

        return res.status(200).json({ message: 'Contact deleted successfully.' });
    });
});


// API to handle order submissions (Create)
app.post("/api/orders", (req, res) => {
    const {
      itemName,itemPrice,customerName,phoneNumber,email,specialRequests,quantity,totalPrice} = req.body;
  
    const query = `
      INSERT INTO orders (item_name, item_price, customer_name, phone_number, email, special_requests, quantity, total_price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      itemName,itemPrice,customerName,phoneNumber,email,specialRequests,quantity,totalPrice,
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting order into database:", err);
        return res.status(500).json({ error: "Failed to place the order." });
      }
  
      return res.status(201).json({ message: "Order placed successfully!", orderId: result.insertId });
    });
  });
  
  // API to fetch all orders (Read)
  app.get("/api/orders", (req, res) => {
    const query = "SELECT * FROM orders";
  
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching orders from database:", err);
        return res.status(500).json({ error: "Failed to fetch orders." });
      }
  
      return res.status(200).json(results);
    });
  });
  
  // API to fetch a single order by ID (Read)
  app.get("/api/orders/:id", (req, res) => {
    const orderId = req.params.id;
    const query = "SELECT * FROM orders WHERE id = ?";
  
    db.query(query, [orderId], (err, results) => {
      if (err) {
        console.error("Error fetching order from database:", err);
        return res.status(500).json({ error: "Failed to fetch order." });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: "Order not found." });
      }
  
      return res.status(200).json(results[0]);
    });
  });
  
  // API to update an order by ID (Update)
  app.put("/api/orders/:id", (req, res) => {
    const orderId = req.params.id;
    const {itemName,itemPrice,customerName,phoneNumber,email,specialRequests,quantity,totalPrice,
    } = req.body;
  
    const query = `
      UPDATE orders SET 
      item_name = ?,item_price = ?, customer_name = ?, phone_number = ?, email = ?, special_requests = ?, quantity = ?, total_price = ?
      WHERE id = ?
    `;
    const values = [
      itemName,itemPrice,customerName,phoneNumber,email,specialRequests,quantity,totalPrice,orderId,
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error updating order in database:", err);
        return res.status(500).json({ error: "Failed to update order." });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Order not found." });
      }
  
      return res.status(200).json({ message: "Order updated successfully!" });
    });
  });
  
  // API to delete an order by ID (Delete)
  app.delete("/api/orders/:id", (req, res) => {
    const orderId = req.params.id;
    const query = "DELETE FROM orders WHERE id = ?";
  
    db.query(query, [orderId], (err, result) => {
      if (err) {
        console.error("Error deleting order from database:", err);
        return res.status(500).json({ error: "Failed to delete order." });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Order not found." });
      }
  
      return res.status(200).json({ message: "Order deleted successfully!" });
    });
  });


// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
