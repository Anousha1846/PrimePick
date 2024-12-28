PRIMEPICK - eCommerce Website
PRIMEPICK is a fully responsive, front-end eCommerce platform designed for seamless shopping experiences. Built using Next.js, API fetching, dynamic routing, and integrated authentication, PRIMEPICK enables users to browse products, add them to the cart, and complete purchases—all without a backend. It uses a fake API for data simulation, ideal for showcasing the front-end functionality.


PRIMEPICK is a responsive and feature-rich front-end eCommerce platform built to provide a smooth user experience. The platform features product browsing, dynamic routing, an interactive shopping cart, user authentication, and utilizes a fake API for product data. It is fully functional for demonstration purposes, making it an ideal showcase for modern eCommerce UI/UX.

FEATURES:
Fully Responsive: PRIMEPICK is optimized for mobile, tablet, and desktop views using Tailwind CSS for responsive design.
Fake API: Product data and cart information are fetched from a mock API for realistic data interaction.
Dynamic Routing: Pages are dynamically rendered based on product selections and user actions.
Authentication: Secure user login and registration .
Add to Cart: Users can add products to the cart, view cart details, and proceed with checkout.
UI Libraries: PRIMEPICK uses React Icons and Tailwind CSS to create an elegant and user-friendly interface.
Optimized for Performance: Code is optimized for performance with techniques like lazy loading and dynamic imports.

TECK STACK:
Frontend: Next.js, Tailwind CSS
Fake API: Mock product data fetched from a fake API 
State Management: React Redux for global state management (cart, authentication)
UI Libraries: Tailwind CSS, React Icons
Authentication: Simulated authentication using "Clerk Authentication"
Installation
To get started with PRIMEPICK, clone the repository and follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/primepick.git
cd primepick
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the app.

Fake API Integration
PRIMEPICK fetches product data using a fake API to simulate real-world data fetching. The API returns product lists, details, and other necessary information without requiring a backend.

Products API: Simulates product data such as titles, images, and prices.
The API is designed to mimic real-world API calls but is powered by mock data for front-end demonstration purposes.

Authentication
PRIMEPICK includes a simulated user authentication system using  "Clerk Authentication" . Although there is no actual backend, the following features are available:

Registration: Users can register with a username and password (stored temporarily in state).
Browse Products: Users can view a list of products fetched from the fake API.
Add to Cart: Users can add products to their cart, adjust quantities, or remove items.
Checkout: Users can proceed to a simulated checkout page where they fill in shipping details.

Contributing
We welcome contributions to improve PRIMEPICK! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
PRIMEPICK is open-source and available under the MIT License.

Notes:
This project is a front-end demonstration and does not include a back-end system or a real API. It uses mock data for product information and cart functionality.
This is ideal for front-end developers looking to showcase their skills in building modern eCommerce websites.













