# AI Study & Interview Prep API 🤖

> Production-ready AI-powered backend API built with NestJS and TypeScript

## What It Does

- 🎯 **Mock Interview Generator** — sends job title + background, 
  AI returns 5 tailored interview questions with model answers
- 📚 **Study Assistant** — sends topic + notes, AI returns 
  summary, MCQs, flashcards, and predicted exam questions
- 🔐 **Secure** — JWT authentication, role-based access (Admin/User)
- 📖 **Documented** — full Swagger/OpenAPI documentation

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | NestJS + TypeScript |
| Database | MongoDB Atlas + Mongoose |
| AI Provider | Groq LLaMA 3.3 70B |
| Auth | JWT + bcrypt + Passport.js |
| Docs | Swagger/OpenAPI |

## API Endpoints

### Auth
POST /auth/register  → create account
POST /auth/login     → login, receive JWT token
### Interview
POST /interview/generate  → 🔒 AI generates 5 interview questions
GET  /interview/history   → 🔒 get all your past sessions
GET  /interview/:id       → 🔒 get one session
DELETE /interview/:id     → 🔒 delete session

### Study
POST /study/study-generate → 🔒 AI analyzes notes, returns MCQs + summary
GET  /study/history        → 🔒 get all study sessions
GET  /study/:id            → 🔒 get one session
DELETE /study/:id          → 🔒 delete session
🔒 = requires JWT token

git clone https://github.com/BismaAbbasi/AI-Prep-API
cd AI-Prep-API
npm install

# Create .env file
MONGODB_URI=your_atlas_string
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d
GROQ_API_KEY=your_groq_key
PORT=3000

npm run start:dev
# Visit http://localhost:3000/api for Swagger docs
```

##Archietecture
src/
├── auth/          → register, login, JWT, roles, admin seed
├── interview/     → AI interview generation + CRUD
├── study/         → AI study assistant + CRUD
├── ai/            → Groq AI service (shared)
└── Schemas/       → MongoDB schemas

src/
├── auth/          → register, login, JWT, roles, admin seed
├── interview/     → AI interview generation + CRUD
├── study/         → AI study assistant + CRUD
## Screenshots
assets/AI-study-Interview-Prep-API.jpg
![Swagger UI] (AI-study-Interview-Prep-API.jpg)

![LoginTokenResponse](authtokenlogin-swagger.jpg)

![Interview-Response](generate-interview-Swagger response.jpg)

![Study-Response] (generate-study Swagger response.jpg)
├── ai/            → Groq AI service (shared)
└── Schemas/       → MongoDB schemas
