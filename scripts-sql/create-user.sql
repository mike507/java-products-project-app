CREATE USER "ecommerceapp";

GRANT ALL PRIVILEGES ON all tables in schema "public" TO "ecommerceapp";
GRANT ALL PRIVILEGES ON all tables in schema "ecommerce" TO "ecommerceapp";

alter user ecommerceapp set search_path to ecommerce;