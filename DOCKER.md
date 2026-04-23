# Docker Setup Guide

This guide will help you set up and run the Tarvit project using Docker.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose V2+
- Make (optional, but recommended)

## Quick Start

### 1. Set Up Environment File

The easiest way is to use the provided command:

```bash
make setup-env
```

This will automatically create `.env` from the `.env.example` file in the root directory. Both backend and frontend services will read from this single `.env` file.

### 2. Generate Strapi Security Keys

For production, you must generate new security keys. Run:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Replace the following values in `.env` (in the BACKEND section):
- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`

### 3. Start Services

#### Development Mode (with hot reload)
```bash
make dev
```

#### Production Mode
```bash
make production
```

## Available Commands

```bash
# Setup
make setup-env        # Create .env files from .env.example (run this first!)

# Development
make dev              # Start in development mode with hot reload
make up               # Start services with docker compose up

# Production
make production       # Build and start in production mode (detached)

# Management
make down             # Stop all services
make restart          # Restart all services
make restart-backend  # Restart backend only
make restart-frontend # Restart frontend only

# Logs
make logs             # Follow logs for all services
make logs-backend     # Follow backend logs only
make logs-frontend    # Follow frontend logs only

# Cleanup
make clean            # Stop services and remove volumes
make build            # Rebuild all Docker images

# Help
make help             # Show all available commands
```

## Service URLs

- **Frontend**: http://localhost:3000
- **Backend (Strapi)**: http://localhost:1337
- **Strapi Admin**: http://localhost:1337/admin

## Environment Configuration

### Backend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HOST` | Server host | `0.0.0.0` |
| `PORT` | Server port | `1337` |
| `NODE_ENV` | Node environment | `development` |
| `APP_KEYS` | Strapi app keys | Required |
| `API_TOKEN_SALT` | API token salt | Required |
| `ADMIN_JWT_SECRET` | Admin JWT secret | Required |
| `JWT_SECRET` | JWT secret | Required |
| `DATABASE_CLIENT` | Database type | `sqlite` |
| `PUBLIC_URL` | Public backend URL | `http://localhost:1337` |
| `CORS_ORIGIN` | CORS allowed origins | `http://localhost:3000` |

### Frontend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ENV` | Environment | `development` |
| `NODE_ENV` | Node environment | `development` |
| `DOMAIN_URL` | Frontend public URL | `http://localhost:3000` |
| `API_BASE_URL` | Backend API URL | `http://backend:1337` |

## Docker Compose Architecture

The `docker-compose.yml` defines two services:

1. **backend**: Strapi CMS (Node.js)
   - Port: 1337
   - Volume: `./backend` mounted to `/app`
   - Database: SQLite (stored in `./backend/database`)

2. **frontend**: Nuxt 3 application
   - Port: 3000
   - Volume: `./frontend` mounted to `/app`
   - Depends on: backend

Both services are connected via a custom network `tarvit-network`.

## Troubleshooting

### Port Already in Use

If ports 3000 or 1337 are already in use, you can change them in `docker-compose.yml`:

```yaml
services:
  backend:
    ports:
      - "8080:1337"  # Change 8080 to your preferred port

  frontend:
    ports:
      - "8000:3000"  # Change 8000 to your preferred port
```

### Permission Issues

If you encounter permission issues with volumes:

```bash
# Fix permissions
sudo chown -R $USER:$USER backend/database
sudo chown -R $USER:$USER frontend/.nuxt
```

### Clear All Data and Restart

```bash
# Stop services and remove volumes
make clean

# Rebuild and start
make dev
```

### Backend Not Accessible from Frontend

Make sure `API_BASE_URL` in `.env` (FRONTEND section) uses the Docker service name:

```env
# Inside Docker network (for SSR)
API_BASE_URL=http://backend:1337
```

For browser requests (client-side), you might need to use:

```env
# For client-side requests
API_BASE_URL=http://localhost:1337
```

### View Container Logs

```bash
# All services
make logs

# Specific service
docker compose logs -f backend
docker compose logs -f frontend
```

### Exec into Container

```bash
# Backend
docker compose exec backend sh

# Frontend
docker compose exec frontend sh
```

## Development Workflow

1. **Start development environment**:
   ```bash
   make dev
   ```

2. **Make changes** to your code. Changes will be reflected automatically thanks to volume mounts.

3. **View logs** if needed:
   ```bash
   make logs
   ```

4. **Restart services** if environment variables change:
   ```bash
   make restart
   ```

## Production Deployment

1. **Set production environment variables** in `.env` file:
   ```env
   ENV=production
   NODE_ENV=production
   ```

2. **Generate secure keys** for Strapi (see step 2 in Quick Start)

3. **Update URLs** to use your domain in `.env`:
   ```env
   # BACKEND section
   PUBLIC_URL=https://api.yourdomain.com
   CORS_ORIGIN=https://yourdomain.com

   # FRONTEND section
   DOMAIN_URL=https://yourdomain.com
   API_BASE_URL=https://api.yourdomain.com
   ```

4. **Build and start**:
   ```bash
   make production
   ```

## Database Options

### SQLite (Default)

No additional configuration needed. Database stored in `backend/database/`.

### PostgreSQL

1. Add PostgreSQL service to `docker-compose.yml`
2. Update `.env` (BACKEND section):
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=postgres
   DATABASE_PORT=5432
   DATABASE_NAME=strapi
   DATABASE_USERNAME=strapi
   DATABASE_PASSWORD=strapi
   ```

### MySQL

1. Add MySQL service to `docker-compose.yml`
2. Update `.env` (BACKEND section):
   ```env
   DATABASE_CLIENT=mysql
   DATABASE_HOST=mysql
   DATABASE_PORT=3306
   DATABASE_NAME=strapi
   DATABASE_USERNAME=strapi
   DATABASE_PASSWORD=strapi
   ```

## Additional Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Nuxt 3 Documentation](https://nuxt.com)
- [Docker Compose Documentation](https://docs.docker.com/compose)
