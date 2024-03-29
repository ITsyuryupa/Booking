INSERT INTO hotel (city,country, coordinates, description, email, house_number, name, street)
VALUES
    ('Казань', 'Россия','55.782706,49.137797', 'Пятизвездочный отель в историческом центре Казани. Это объект культурного наследия регионального значения и одно из самых красивых архитектурных сооружений города.', 'ilyina.nastasya2002@gmail.com', '3', 'Kazan Palace by Tasigo', 'Калинина'),
    ('Москва', 'Россия','55.699671,37.625940', 'Отель удобно расположен недалеко от центра в районе новой Деловой Москвы. Пятнадцать минут поездки - и перед вами Красная площадь.', 'ilyina.nastasya2002@gmail.com', '6', 'Palmira Business Club', 'Новоданиловская набережная'),
    ('Санкт-Петербург','Россия','59.917458,30.333957', 'Новый 4-звездочный дизайнерский отель бизнес-класса. Бесплатная гостевая парковка для автомобилей, профессиональный клининг, индивидуальный подход к каждому гостю.', 'ilyina.nastasya2002@gmail.com', '13', 'ACQUALINA', 'Подъездной переулок'),
    ('Казань', 'Россия','55.793800,49.103095', 'Из окон отеля открывается живописный вид на стены Казанского Кремля и реку Булак.', 'ilyina.nastasya2002@gmail.com', '5', 'Мираж', 'Московская');





INSERT INTO rooms (cost_night,count, count_beds, name, hotel_id)
VALUES
    ('21000','6', '3', 'Комфорт', '1'),
    ('26000','4', '3', 'Комфорт плюс', '1'),
    ('24000','3', '2', 'Комфорт для маломобильных гостей', '1'),
    ('65000','1', '2', 'Президентский люкс', '1'),
    ('6830','7', '2', 'Стандарт', '2'),
    ('7765','6', '2', 'Супериор', '2'),
    ('14750','4', '2', 'Люкс', '2'),
    ('4500','9', '2', 'Стандарт', '3'),
    ('5400','7', '3', 'Комфорт', '3'),
    ('7200','5', '2', 'Супериор', '3'),
    ('9900','3', '3', 'Делюкс', '3'),
    ('11000','10', '3', 'Deluxe King', '4'),
    ('15200','2', '3', 'Президентский люкс', '4'),
    ('9500','6', '3', 'Апартаменты', '4');


INSERT INTO admins (login, password)
VALUES
    ('admin1','1234'),
    ('admin2','4321');

INSERT INTO users (email, full_name,password,phone)
VALUES
    ('tat@gmail.com','Иванова Татьяна Александровна', '12345','89966023385'),
    ('vik@gmail.com','Жутова Виктория Георгьевна', '54321','89234763732'),
    ('andr@gmail.com','Иванов Андрей Павлович', '123','89571727812');

