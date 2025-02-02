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
