🌿 Paradise Nursery - Houseplant Shopping App
Welcome to the Paradise Nursery Shopping Application! This project is a simple front-end web application that allows users to browse a variety of houseplants, add them to a shopping cart, and manage their purchases.

🛠️ Features
✅ Landing Page with background image, company info, and "Get Started" button
✅ Product Listing Page with:

6 unique houseplants

Organized into 3 categories (Indoor, Succulents, Hanging Plants)

Add to Cart button for each plant
✅ Shopping Cart Icon with dynamic item count (visible on product & cart pages)
✅ Shopping Cart Page with:

Plant thumbnail, name, unit price

Quantity controls (+ / - buttons)

Delete button for each plant type

Total item count & total cost

Continue Shopping and Checkout buttons

The cart functionality uses a simple Redux-style state management with localStorage to persist data between pages.

🖥️ How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/paradise-nursery.git
Open the project in VS Code or your preferred editor:

bash
Copy
Edit
cd paradise-nursery
code .
Run the project:

Recommended: Right-click index.html → Open with Live Server (if using VS Code)

Or, double-click index.html to open in your browser

📁 Project Structure
bash
Copy
Edit
paradise-nursery/
├── index.html            # Landing Page
├── products.html         # Product Listing
├── cart.html             # Shopping Cart
├── css/
│   └── style.css
├── js/
│   ├── store.js
│   ├── products.js
│   └── cart.js
├── images/               # Plant thumbnails & background image
├── README.md
└── LICENSE
⚡ Technologies Used
HTML5, CSS3, Vanilla JavaScript

Simple Redux-style state management with localStorage

Responsive design for better layout

📦 License
This project is licensed under the Apache License 2.0.

🙌 Acknowledgements
This project was developed as part of a peer-reviewed academic assignment focused on front-end development and JavaScript state management.

✨ Happy Plant Shopping! 🌱
