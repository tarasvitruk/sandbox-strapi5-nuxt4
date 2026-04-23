# Sandbox Strapi + Nuxt

A full-stack web application with Strapi backend and Nuxt 4 frontend.

## Quick Start with Docker

1. **Set up environment files**:
   ```bash
   make setup-env
   ```

2. **Start development environment**:
   ```bash
   make dev
   ```

3. **Access the applications**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:1337
   - Strapi Admin: http://localhost:1337/admin

## Documentation

- [Docker Setup Guide](DOCKER.md) - Complete Docker documentation
- [Backend README](backend/README.md) - Strapi backend docs
- [Frontend README](frontend/README.md) - Nuxt 3 frontend docs

## Project Structure

```
.
├── backend/          # Strapi CMS (Node.js)
│   ├── src/         # Strapi source code
│   ├── config/      # Strapi configuration
│   └── database/    # SQLite database
│
├── frontend/        # Nuxt 3 application
│   ├── app/         # Application source
│   ├── pages/       # Nuxt pages
│   └── components/  # Vue components
│
├── .env.example     # Environment variables template
├── docker-compose.yml
├── Makefile         # Docker management commands
└── DOCKER.md        # Docker documentation
```

## Available Commands

```bash
make setup-env        # Create .env files (first time setup)
make dev              # Start development mode
make production       # Start production mode
make down             # Stop all services
make logs             # View logs
make clean            # Clean up containers and volumes
make help             # Show all commands
```

## Tech Stack

### Backend
- **Strapi 5.28** - Headless CMS
- **Node.js 22** - Runtime
- **SQLite** - Database (default)
- **TypeScript** - Language

### Frontend
- **Nuxt 4** - Vue.js framework
- **Vue 3** - UI framework
- **TypeScript** - Language
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Development

See [DOCKER.md](DOCKER.md) for detailed setup instructions, troubleshooting, and production deployment guide.

## License

Private project
