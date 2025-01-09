![Finacial Stone Inc](https://github.com/user-attachments/assets/f20f9681-a738-4d78-943e-a6c9c183d00b)


# Financial Stone Inc. - Banking Application

Welcome to **Financial Stone Inc.**, a modern and secure banking application designed to help users manage their accounts, view transactions, and achieve financial goals with ease.

---

## 🚀 Features

- User authentication (Signup, Login, Logout)
- View account details and balances
- Transfer money between accounts
- Transaction history with filtering and pagination
- Responsive design with a modern UI/UX

---

## 🛠️ Tools & Technologies

### **Frontend**
- [React](https://reactjs.org/) (JavaScript library for building user interfaces)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- [Lucide React](https://lucide.dev/docs/lucide-react/) (Icon library for React)

### **Backend**
- [Django](https://www.djangoproject.com/) (Python web framework for rapid development)
- [Django REST Framework](https://www.django-rest-framework.org/) (Toolkit for building Web APIs)
- [PostgreSQL](https://www.postgresql.org/) (Relational database)

### **Authentication**
- [Django Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/) (JSON Web Token authentication)

### **Hosting & Deployment**
- [Render](https://render.com/) (Backend hosting)
- [AWS Amplify](https://aws.amazon.com/amplify/) (Frontend hosting)
- [AWS S3](https://aws.amazon.com/s3/) (Static and media file storage)

### **Additional Tools**
- [Node.js](https://nodejs.org/) (JavaScript runtime for backend development)
- [Postman](https://www.postman.com/) (API testing)


Before running this project, ensure you have:

- [Node.js](https://nodejs.org/) installed
- [Python](https://www.python.org/) (version 3.8 or higher)
- [PostgreSQL](https://www.postgresql.org/) database setup

---

## 🛠️ Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/seannxh/BANKDJANGO
     cd backend
       python -m venv env
         source env/bin/activate  # On Windows: .\env\Scripts\activate
           pip install -r requirements.txt
             python manage.py migrate
               python manage.py runserver
2. Frontend Setup
    ```bash
   cd frontend
     npm install
       npm start

## 🌐 API Endpoints

### Home
- **HOME** `/`  Home
- 
### Authentication
- **POST** `/api/signup/` - User registration
- **POST** `/api/login/` - User login

### Accounts
- **GET** `/api/user-accounts/` - List all accounts for the authenticated user

### Transactions
- **GET** `/api/transactions/:accountNumber/` - View transaction history
- **POST** `/api/deposit-money/` - Deposit Money (DONT DEPOSIT TOO MUCH)
- **POST** `/api/send-money/` - Transfer Money Between Accounts and Users
- **POST** `/api/withdraw-money/` - Withdraw Money
- **POST** `/api/create-bank-account/` - Create New Checking OR Savings


---

## 🔒 Security Features

- JWT-based authentication for secure API access
- HTTPS enforced on both frontend and backend

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

---

## 📄 Made By

Sean Noh
[LinkedIn](https://www.linkedin.com/in/seannxh)
[Portfolio](https://seansportfolio.blog/)





  


