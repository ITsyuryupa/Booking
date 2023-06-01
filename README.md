<h1 align="center">Today Here </h1>

<p align="center">
      <img src="https://i.ibb.co/41MxYK7/Today-Here-Logo.png" width="700">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/version-1.1.2-brightgreen" alt="Project Version">
   <img src="https://img.shields.io/badge/stack-Java%2BReact%2BPostgreSQL-informational" alt="stack">
</p>

## About

Сервис по бронированию отелей "Today Here". Здесь можно просматривать свои брони зарегистрированным пользователям. Бронировать отели. Также есть админка в которой можно добавлять/удалять/редактировать отели и комнаты в них.

## Preview
### UserSide
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/vt5fpE0bzSY)

### AdminSide
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/vt5fpE0bzSY)

### Architecture
![react-spring-boot-postgresql-crud-example-rest-api-architecture](https://github.com/ITsyuryupa/Booking/assets/31932916/4d3cc64c-4e22-45a8-a250-6df7abed4a5b)

## Documentation
### Run
Нужно создать базу данных для проекта

Изменить фаил **"Booking\src\main\resources\application.properties"** в соотвествием с созданой бд. А также ввести свою почту и пароль-приложения для отправки писем. Строчки которые нужно изменить:
```
spring.datasource.url= jdbc:postgresql://localhost:5432/name_your_bd
spring.datasource.username= username(usuale postgres)
spring.datasource.password= password
spring.mail.username=mail
spring.mail.password=password
```

После загрузки проекта измените настройку в файле **"Booking\src\main\resources\application.properties"** так, чтобы она выглядела следующим образом:
```
spring.jpa.hibernate.ddl-auto= create
```

Запустите проект. Остановите его и поменяйте эту настройку на:
```
spring.jpa.hibernate.ddl-auto= validate
```

Далее инициируем начальную информацию. Запускаем скрипт из **"Booking\src\main\java\DB\InsertHottelandRoom.sql"**.

Запускаем проект на Java и на React.

Открываем http://localhost:3000/

Открываем http://localhost:3000/admin для админки

Фотографии будут пусты, для загрузки воспользуйтесь админкой.

### Entities

- **-** **`Admins`** - Хранит информацию для верефикации админов.

- **-** **`File_hotel`** - Хранит фотографии отелей

- **-** **`File_room`** - Хранит фотографии комнат

- **-** **`Hotel`** - Хранит информацию об отелях

- **-** **`Reservations`** - Хранит информацию о бронировании отелей

- **-** **`Rooms`** - Хранит комнаты отелей

- **-** **`Users`** - Хранит информацию о пользователях

### BackEnd Endpoint
#### Hotel

- **`GET http://localhost:8080/api/hotel/all`** - получить все отели

- **`GET http://localhost:8080/api/hotel/allroom/free`** - получить все свободные комнаты между датами в конкретном отеле

- **`GET http://localhost:8080/api/hotel/allroom/{hotel_id}`** - получить все комнаты в конкретном отеле

- **`POST http://localhost:8080/api/hotel/create`** - создать отель

- **`GET http://localhost:8080/api/hotel/find`** - получить все отели в которых есть свободные номера между датами

- **`GET http://localhost:8080/api/hotel/get/{hotel_id}`** - получить отель по id

- **`PUT http://localhost:8080/api/hotel/{id}`** - изменить отель по id

- **`DELETE http://localhost:8080/api/hotel/{id}`** удалить отель по id

#### Users

- **`POST http://localhost:8080/api/user/create`** -создать пользователя


- **`GET http://localhost:8080/api/user/get/{user_id}`** - получить пользователя по id


- **`GET http://localhost:8080/api/user/getall`** - получить всех пользователей


- **`POST http://localhost:8080/api/user/signin`** - авторизация пользователя


- **`PUT http://localhost:8080/api/user/{id}`** - обновление пользователя


- **`DELETE http://localhost:8080/api/user/{id}`** - удаление пользователя

#### Room

- **`GET http://localhost:8080/api/room/all`** - получить все комнаты

- **`POST http://localhost:8080/api/room/create`** - создать комнату

- **`GET http://localhost:8080/api/room/{id}`** - получить комнату по id

- **`PUT http://localhost:8080/api/room/{id}`** - изменить комнату по id

- **`DELETE http://localhost:8080/api/room/{id}`** - удалить комнату по id

#### Reservation

- **`POST http://localhost:8080/api/reservation/create`** - создать резервацию

- **`GET http://localhost:8080/api/reservation/get/{id}`** - получить резервацию по id

- **`GET http://localhost:8080/api/reservation/getall`** - получить все резервации

- **`GET http://localhost:8080/api/reservation/getall/{user_id}`** - получить все резервации конкретного пользователя

- **`PUT http://localhost:8080/api/reservation/{id}`** - обновить резервацию по id

- **`DELETE http://localhost:8080/api/reservation/{id}`** - удалить резервацию по id

#### File

- **`GET http://localhost:8080/api/file/getid/hotel/{hotel_id}`** - получить все id фаилов по id отеля

- **`GET http://localhost:8080/api/file/getid/room/{room_id}`** - получить все id фаилов по id комнаты

- **`GET http://localhost:8080/api/file/hotel/{id}`** - получить фаил отеля по id файла

- **`DELETE http://localhost:8080/api/file/hotel/{id}`** - удалить фаил отеля по id файла

- **`GET http://localhost:8080/api/file/room/{id}`** - получить фаил комнаты по id комнаты

- **`DELETE http://localhost:8080/api/file/room/{id}`** - удалить фаил комнаты по id файла

- **`POST http://localhost:8080/api/file/upload/hotel`** - загрузить фаил отеля 

- **`POST http://localhost:8080/api/file/upload/room`** - загрузить фаил комнаты

#### Admin

- **`POST http://localhost:8080/api/admin/signin`** - авторизировать админа

#### Resourses
https://www.postman.com/tsurupai/workspace/todayhere 

## Developers

- [IlyaTsyuryupa](https://github.com/ITsyuryupa) [BackEnd, TeamLead]
- [Kartishan](https://github.com/Kartishan) [Frontend]
- [AnastasiaIlyina](https://github.com/AnastasiaIlyina) [Designer]
