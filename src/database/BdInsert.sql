INSERT INTO hotel (city, country, description, email, house_number, name, street)
VALUES
    ('Kazan', 'Russia', 'Best hotel in Kazan', 'zurupa2002@gmail.com', '16', 'TsurupaPlaza', 'Kosmonavtov'),
    ('Kazan', 'Russia', 'Best cheep hotel in Kazan', 'igor@gmail.com', '3', 'IhorHotel', 'Krasnoi pozzicii');


INSERT INTO rooms (cost_night, count_beds, name, hotel_id)
VALUES
    ('5000', '1', 'Ordinary', '1'),
    ('50000', '2', 'Lux', '1'),
    ('500', '1', 'Ordinary', '2');