# Migration

#### product
<pre>
 product table
	1. migration create
   		npx sequelize-cli migration:create --name product
	2. run migration
		npx sequelize-cli db:migrate --name 20221027021221-product.js
		npx sequelize-cli db:migrate:undo --name 20221027021221-product.js
'</pre>

#### category
<pre>
 category table
	1. migration create
   		npx sequelize-cli migration:create --name category
	2. run migration
		npx sequelize-cli db:migrate --name 20221027022035-category.js
		npx sequelize-cli db:migrate:undo --name 20221027022035-category.js
'</pre>



#### seeder
###### Seed all
npx sequelize-cli db:seed:all
###### Seed undo all
npx sequelize-cli db:seed:undo:all

#### categoty
<pre>
 categoty table
	1. create seeder
		npx sequelize-cli seed:generate --name categoty
	2. seed run
		npx sequelize-cli db:seed --seed 20221027015848-category.js
	2.1 if want to undo
		npx sequelize-cli db:seed:undo --seed 20221027015848-category.js
'</pre>

#### product
<pre>
 product table
	1. create seeder
		npx sequelize-cli seed:generate --name product
	2. seed run
		npx sequelize-cli db:seed --seed 20221026151755-product.js
	2.1 if want to undo
		npx sequelize-cli db:seed:undo --seed 20221026151755-product.js
'</pre>

