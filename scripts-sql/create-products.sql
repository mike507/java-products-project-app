DROP SCHEMA IF EXISTS ecommerce cascade;
CREATE SCHEMA ecommerce;

SET search_path TO ecommerce, public;

-- -----------------------------------------------------
-- Table `ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ecommerce.product_category (
                                                          id SERIAL,
                                                          category_name VARCHAR(255) NULL DEFAULT NULL,
    PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS ecommerce.product (
                                                 id SERIAL,
    name VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    date_created DATE DEFAULT NULL,
    category_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES product_category (id)
    );

INSERT INTO product_category(category_name) VALUES ('PICTURES');

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Timon Studler', 'Golden hour photography of sunset',
        'timon-studler-1xJ3qTjAJU8-unsplash.jpg',
        1, NOW());

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Quinton Coetzee', 'Person in blue denim jeans',
        'quinton-coetzee-BWeR30r0FYQ-unsplash.jpg',
        1, NOW());


INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Daniel Eledut', 'Red, white, and blue airplane',
        'daniel-eledut-pRWB9Ayeu1k-unsplash.jpg',
        1, NOW());


INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Benjamin Ashton', 'People inside a library',
        'benjamin-ashton-1mwPOXb_pB8-unsplash.jpg',
        1, NOW());

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Baptiste', 'Brown rocky mountain under cloudy sky during daytime',
        'baptiste-jZhQJsSKgOk-unsplash.jpg',
        1, NOW());

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Thomas Tucker', 'Mountains near body of water',
        'thomas-tucker-0CALbyz5wEM-unsplash.jpg',
        1, NOW());

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Matt Thornhill', 'Rock formation near body of water with green trees',
        'matt-thornhill-Shtg0KZyo3Q-unsplash.jpg',
        1, NOW());

INSERT INTO product (name, description, image_url, category_id, date_created)
VALUES ('Arthur', 'Brown rock formation during daytime',
        'arthur-yfIVHbP5QaA-unsplash.jpg',
        1, NOW());