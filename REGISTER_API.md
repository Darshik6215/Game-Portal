# Admin Registration API

## ✅ Register Endpoint Added

The registration API has been successfully added to create new admin users.

## 📍 API Endpoint

```
POST /api/v1/admin/register
```

## 📝 Request Body

```json
{
  "email": "newadmin@gamehub.com",
  "password": "securepassword123",
  "name": "Admin Name",
  "role": "admin"
}
```

### Fields:
- **email** (required): Valid email address
- **password** (required): User password (will be hashed)
- **name** (required): Full name of the admin
- **role** (optional): Default is "admin"

## ✅ Success Response (201 Created)

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "email": "newadmin@gamehub.com",
    "name": "Admin Name",
    "role": "admin"
  }
}
```

## ❌ Error Responses

### Email Already Exists (400 Bad Request)
```json
{
  "detail": "Email already registered"
}
```

### Invalid Email Format (422 Unprocessable Entity)
```json
{
  "detail": [
    {
      "loc": ["body", "email"],
      "msg": "value is not a valid email address",
      "type": "value_error.email"
    }
  ]
}
```

## 🧪 Test with cURL

```bash
curl -X POST "http://127.0.0.1:8080/api/v1/admin/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@gamehub.com",
    "password": "test123",
    "name": "Test Admin"
  }'
```

## 🧪 Test with Python

```python
import requests

url = "http://127.0.0.1:8080/api/v1/admin/register"
data = {
    "email": "test@gamehub.com",
    "password": "test123",
    "name": "Test Admin",
    "role": "admin"
}

response = requests.post(url, json=data)
print(response.json())
```

## 📋 Available Endpoints

Now you have all these admin endpoints:

1. **POST /api/v1/admin/register** - Register new admin (NEW! ✨)
2. **POST /api/v1/admin/login** - Login existing admin
3. **GET /api/v1/admin/me** - Get current user info (requires auth)
4. **POST /api/v1/admin/logout** - Logout (requires auth)
5. **GET /api/v1/admin/stats** - Get admin stats (requires auth)

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ Email validation
- ✅ Duplicate email check
- ✅ JWT token generation on registration
- ✅ Automatic login after registration

## 📖 API Documentation

Visit the interactive API docs:
- Swagger UI: http://127.0.0.1:8080/docs
- ReDoc: http://127.0.0.1:8080/redoc

## 🎯 Next Steps

1. Open http://127.0.0.1:8080/docs in your browser
2. Find the "admin" section
3. Try the `/api/v1/admin/register` endpoint
4. Register a new admin user
5. Use the returned token for authenticated requests
