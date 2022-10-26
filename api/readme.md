# Migration

#### products
<pre>
 products table
	1. migration create
   		npx sequelize-cli migration:create --name products
	2. run migration
		npx sequelize-cli db:migrate --name 20221026134101-products.js
'</pre>

#### seeder

<pre>
 products table
	1. create seeder
		npx sequelize-cli seed:generate --name product
	2. seed run
		npx sequelize-cli db:seed --seed 20221026151755-products.js
	2.1 if want to undo
		npx sequelize-cli db:seed:undo --seed 20221026151755-products.js
'</pre>