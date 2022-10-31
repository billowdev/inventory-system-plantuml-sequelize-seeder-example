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

npx sequelize-cli migration:create --name procut-add-brand-desc-column


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
		npx sequelize-cli db:seed --seed _2_20221026151755-product.js
	2.1 if want to undo
		npx sequelize-cli db:seed:undo --seed _2_20221026151755-product.js
'</pre>



npx sequelize-cli db:seed --seed _0_20221030110530-user.js
npx sequelize-cli db:seed --seed _1_20221030110603-address.js
npx sequelize-cli db:seed --seed _2_20221027015848-category.js
npx sequelize-cli db:seed --seed _3_20221026151755-product.js
npx sequelize-cli db:seed --seed _4_20221030110548-employee.js
npx sequelize-cli db:seed --seed _5_20221027015734-invoice.js
npx sequelize-cli db:seed --seed _6_20221030110542-customer.js
npx sequelize-cli db:seed --seed _7_20221030110644-order.js
npx sequelize-cli db:seed --seed _8_20221030110638-sell.js
npx sequelize-cli db:seed --seed _9_20221027015839-reciept.js
npx sequelize-cli db:seed --seed _10_20221030110618-promotion.js
npx sequelize-cli db:seed --seed _11_20221030110612-stock.js
npx sequelize-cli db:seed --seed _12_20221030110555-supplier.js
npx sequelize-cli db:seed --seed _13_20221030110628-stock-order.js
npx sequelize-cli db:seed --seed _14_20221030110653-sell-report.js