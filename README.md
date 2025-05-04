# 🚀 Full 3-Tier Architecture Application (Frontend + Backend + MySQL + NGINX)

A complete 3-tier web application using Docker Compose, featuring:
- React Frontend
- Node.js Express Backend
- MySQL Database
- NGINX as a reverse proxy

## 🧱 Architecture

Browser
│
▼
[ NGINX ] ⇄ [ Frontend - React ]
│
└────→ [ Backend - Node.js/Express ] ⇄ [ MySQL Database ]

markdown
Copy
Edit

## 📦 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MySQL
- **Reverse Proxy**: NGINX
- **Orchestration**: Docker Compose

---

## 📁 Folder Structure

project-root/
├── frontend/ # React frontend
│ ├── Dockerfile
│ └── ...other React files
├── backend/ # Express backend
│ ├── Dockerfile
│ └── server.js
├── db/ # MySQL initialization
│ └── init.sql
├── nginx/ # NGINX config
│ └── default.conf
├── docker-compose.yml
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Docker
- Docker Compose
- AWS EC2 / any Linux VM (for deployment)

### 🔧 Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/3tier-app.git
   cd 3tier-app
Run the application:

bash
Copy
Edit
docker-compose up --build
Access the app:

Frontend: http://<your-ec2-ip>/

API (Backend): http://<your-ec2-ip>/api

MySQL: port 3306 internally (via service)

🧪 Testing
Go to browser: http://<your-ec2-ip>/

Click the button or trigger the API to see if backend and DB respond.

📌 Notes
You can modify nginx/default.conf to adjust proxy settings.

Environment variables are managed in docker-compose.yml.

📜 License
MIT License. Feel free to use and modify this project.

🙌 Acknowledgements
Special thanks to Open Source contributors and tutorials that inspired this setup.
