# 🌍 HNG Internship Public API  

A simple **public API** built with **Node.js & Express**, providing essential information dynamically.  

## 🚀 Features  
✅ Returns **email, current datetime (ISO 8601 UTC), and GitHub repo link**  
✅ Uses **dotenv for environment variables**  
✅ **CORS enabled** (configured for `http://localhost:3040`)  
✅ **Lightweight & Fast**  

## 📌 API Documentation  

### **🔹 Base URL**




### **🔹 Endpoint**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/` | Returns email, datetime, and GitHub repo |

### **🔹 Response Example**  
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```


### **🔹 Setup Instructions**
### 1️⃣ Clone the repository
```sh
git clone https://github.com/Maticmania/hng12-backend-stage-0.git
cd hng12-backend-stage-0
```
### 2️⃣ Install dependencies
```sh
npm install
``` 

### 3️⃣ Create a .env file and add:
```.env
PORT=3040
EMAIL=your-email@example.com
GITHUB_URL=https://github.com/yourusername/your-repo
```

### 4️⃣ Start the server
```sh
node index.js
```

### Open your browser or Postman and visit:
```sh
http://localhost:3040/
```

### You need backend developer
[Hire node js develoer](https://hng.tech/hire/nodejs-developers)
