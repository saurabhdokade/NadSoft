const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const studentRoutes = require("./routes/student.routes"); 
const Marks = require("./routes/marks.routes");

const app = express();

// CORS Configuration to allow a specific URL
const corsOptions = {
    origin: "http://localhost:3000",  // Allow only this URL to make requests to the backend
    methods: ["GET", "POST", "PUT", "DELETE"],  // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],  // Specify allowed headers
};

// Enable CORS for all routes with the specified options
app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Register the student routes
app.use("/api/students", studentRoutes);
app.use("/api/marks", Marks);

// Define the port where the server will run
const PORT = 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
