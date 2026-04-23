up:
	docker compose up --detach --remove-orphans

down:
	docker compose down

build:
	docker compose build

restart:
	make down
	rm -rf backend/node_modules frontend/node_modules
	make up

clean:
	docker compose down -v
	docker system prune -f

logs:
	docker compose logs -f

logs-backend:
	docker compose logs -f backend

logs-frontend:
	docker compose logs -f frontend

#restart-backend:
#	docker compose restart backend
#
#restart-frontend:
#	docker compose restart frontend
