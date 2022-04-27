CREATE TABLE products (
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL,
    description VARCHAR(100) NULL,
    stock INT DEFAULT 0,
    price INT DEFAULT 0,
    id_category INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(id)
)


INSERT INTO products (name,description,id_category) VALUES('makanan','rasa yang pernah ada',2),('pakaian','pakaian hari raya',1),('teknologi','terdepan',3),('indomie','rasanya mantap',2),('celana','celana panjang',2),('sarung','sarung bhs yang mantap',2)


CREATE TABLE category(
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
     name VARCHAR(64) NOT NULL,
    PRIMARY KEY(id)
)
INSERT INTO category (name)VALUES('pakaian'),('makanan'),('teknologi'),('alat olahraga')

-- join product ke kategori
SELECT products.*, category.name AS name_category FROM products INNER JOIN category ON products.id_category = category.id