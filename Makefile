run:
	docker-compose -f "docker-compose.yml" up -d --build

down:
	docker-compose -f "docker-compose.yml" down

up:
	docker-compose -f "docker-compose.yml" up -d --build

restart:down
	docker-compose -f "docker-compose.yml" up -d --build

set:
	docker-compose exec db mysql_config_editor set -u root -p

dumpset:
	docker-compose exec db mysql_config_editor set --login-path=mysqldump -u root -p

dump:dumpset
	docker-compose exec db mysqldump table_name > ./init/table_name.sql

restore:
	docker-compose exec db mysql table_name < ./init/table_name.sql

build:
	npm run prod

watch:
	npm run watch