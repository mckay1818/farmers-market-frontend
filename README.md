# Farmer's Market - Frontend

An e-commerce website that allows farmers to sell directly to consumers in an open online marketplace.

This website allows users to create an account as a Seller or a Customer. All registered users are able to access the marketplace of Sellers on login. Sellers can build out their store by adding products, and Customers can add these products to their cart and checkout with Stripe. 

<img width="600" alt="Farmer's Market landing page" src="https://user-images.githubusercontent.com/72710253/219997390-e9afb831-19b2-415f-a28f-e01dc0918730.png">
<img width="600" alt="Customer's View of a Seller page" src="https://user-images.githubusercontent.com/72710253/219997521-fbe40a0b-a95f-486b-b6af-9f187a3d0b82.png">
<img width="630" alt="Cart page shown with dynamically collapsed navigation bar" src="https://user-images.githubusercontent.com/72710253/219997635-cd3d15d0-671c-4bd3-823d-8b15c20584ee.png">



## Tech Stack

-React: frontend
-Flask: backend REST API
-PostgreSQL: database
-SQLAlchemy: object-relational mapper (ORM)
-Stripe API: customer checkout
-Heroku: deployment [(view deployed frontend)](https://farmers-market-fe.herokuapp.com/)
-Docker: containerization
-AWS: ECS, RDS, S3 (in-progress)

## Frontend Features

-Integration with Stripe API for customer checkout
-MPA feel using React Router
-Conditionally rendered UI based on authenticated user roles; preservation of authentication on page refresh by [hooking a token-grabbing Effect into User Context](https://github.com/mckay1818/farmers-market-frontend/blob/main/src/contexts/UserContext.jsx) (not the most secure option, but a quick workaround for holding onto JWTs!)

## View Deployed Project

-The deployed project on Heroku can be viewed at [https://farmers-market-fe.herokuapp.com/](https://farmers-market-fe.herokuapp.com/)
-Test Seller account credentials:
    -email: tammyburns@fakemail.com
    -password: cowcrazy
-Test Customer account credentials:
    -email: m1@fakemail.com
    -password: greenbeans

## Installation

1. Fork and clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
