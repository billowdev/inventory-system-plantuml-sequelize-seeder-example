# inventory-system-plantuml-sequelize-seeder-example

## API (example nodejs sequelize seeder and migration)
#### Node project should be implemented with the typescript I recommend.
## Migration

#### product
<pre>
 product table
	1. migration create
   		npx sequelize-cli migration:create --name product
	2. run migration
		npx sequelize-cli db:migrate --name 20221027021221-product.js
		npx sequelize-cli db:migrate:undo --name 20221027021221-product.js
</pre>

#### category
<pre>
 category table
	1. migration create
   		npx sequelize-cli migration:create --name category
	2. run migration
		npx sequelize-cli db:migrate --name 20221027022035-category.js
		npx sequelize-cli db:migrate:undo --name 20221027022035-category.js
</pre>

<pre>
npx sequelize-cli migration:create --name procut-add-brand-desc-column
</pre>


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
</pre>

#### product
<pre>
 product table
	1. create seeder
		npx sequelize-cli seed:generate --name product
	2. seed run
		npx sequelize-cli db:seed --seed _2_20221026151755-product.js
	2.1 if want to undo
		npx sequelize-cli db:seed:undo --seed _2_20221026151755-product.js
</pre>

<pre>
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
</pre>




### ⚠️ Warning, the object oriented analysis below It only takes 4 days to analyze. There may be a mistake and inaccurate at some point



## Use case diagram
<!-------------_0_usecase-diagram.puml --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_0_usecase-diagram.puml"> 
_0_usecase-diagram.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_0_usecase-diagram/_0_usecase-diagram.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_0_usecase-diagram/_0_usecase-diagram.png" title="_0_usecase-diagram.puml">
</a>

<!-------------------------------------------->


<!------------- _1_usecase-stock --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_1_usecase-stock.puml">
_1_usecase-stock.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_1_usecase-stock/_1_usecase-stock.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_1_usecase-stock/_1_usecase-stock.png" title="_1_usecase-stock">
</a>

<!-------------------------------------------->

<!------------- _2_usecase-product --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_2_usecase-product.puml">
_2_usecase-product.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_2_usecase-product/_2_usecase-product.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_2_usecase-product/_2_usecase-product.png" title="_2_usecase-product">
</a>
<!-------------------------------------------->

<!------------- _3_usecase-category --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_3_usecase-category.puml">
_3_usecase-category.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_3_usecase-category/_3_usecase-category.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_3_usecase-category/_3_usecase-category.png" title="_3_usecase-category">
</a>
<!-------------------------------------------->

<!------------- _4_usecase-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_4_usecase-order.puml">
_4_usecase-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_4_usecase-order/_4_usecase-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_4_usecase-order/_4_usecase-order.png" title="_4_usecase-order">
</a>
<!-------------------------------------------->

<!------------- _5_usecase-invoice --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_5_usecase-invoice.puml">
_5_usecase-invoice.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_5_usecase-invoice/_5_usecase-invoice.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_5_usecase-invoice/_5_usecase-invoice.png" title="_5_usecase-invoice">
</a>
<!-------------------------------------------->

<!------------- _6_usecase-sell --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_6_usecase-sell.puml">
_6_usecase-sell.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_6_usecase-sell/_6_usecase-sell.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_6_usecase-sell/_6_usecase-sell.png" title="_6_usecase-sell">
</a>
<!-------------------------------------------->

<!------------- _7_usecase-receipt --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_7_usecase-receipt.puml">
_7_usecase-receipt.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_7_usecase-receipt/_7_usecase-receipt.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_7_usecase-receipt/_7_usecase-receipt.png" title="_7_usecase-receipt">
</a>
<!-------------------------------------------->


<!------------- _8_usecase-sell-report --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_8_usecase-sell-report.puml">
_8_usecase-sell-report.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_8_usecase-sell-report/_8_usecase-sell-report.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_8_usecase-sell-report/_8_usecase-sell-report.png" title="_8_usecase-sell-report">
</a>
<!-------------------------------------------->


<!------------- _9_usecase-create-stock-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/usecase/_9_usecase-create-stock-order.puml">
_9_usecase-create-stock-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_9_usecase-create-stock-order/_9_usecase-create-stock-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/usecase/_9_usecase-create-stock-order/_9_usecase-create-stock-order.png" title="_9_usecase-create-stock-order">
</a>
<!-------------------------------------------->


## class

<!------------- class-diagram --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/class-diagram.puml">
class-diagram.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/class-diagram/class-diagram.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/class-diagram/class-diagram.png" title="class-diagram">
</a>
<!-------------------------------------------->


## sequence

<!------------- _0_sequence-diagram-inventory-system --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_0_sequence-diagram-inventory-system.puml">
_0_sequence-diagram-inventory-system.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_0_sequence-diagram-inventory-system/_0_sequence-diagram-inventory-system.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_0_sequence-diagram-inventory-system/_0_sequence-diagram-inventory-system.png" title="_0_sequence-diagram-inventory-system">
</a>
<!-------------------------------------------->


<!------------- _1_1_sequence-view-stock --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_1_1_sequence-view-stock.puml">
_1_1_sequence-view-stock.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_1_1_sequence-view-stock/_1_1_sequence-view-stock.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_1_1_sequence-view-stock/_1_1_sequence-view-stock.png" title="_1_1_sequence-view-stock">
</a>
<!-------------------------------------------->


<!------------- _1_2_sequence-add-stock --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_1_2_sequence-add-stock.puml">
_1_2_sequence-add-stock.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_1_2_sequence-add-stock/_1_2_sequence-add-stock.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_1_2_sequence-add-stock/_1_2_sequence-add-stock.png" title="_1_2_sequence-add-stock">
</a>
<!-------------------------------------------->

<!------------- _2_3_sequence-update-product --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_2_3_sequence-update-product.puml">
_2_3_sequence-update-product.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_2_3_sequence-update-product/_2_3_sequence-update-product.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_2_3_sequence-update-product/_2_3_sequence-update-product.png" title="_2_3_sequence-update-product">
</a>
<!-------------------------------------------->


<!------------- _2_4_sequence-delete-product --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_2_4_sequence-delete-product.puml">
_2_4_sequence-delete-product.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_2_4_sequence-delete-product/_2_4_sequence-delete-product.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_2_4_sequence-delete-product/_2_4_sequence-delete-product.png" title="_2_4_sequence-delete-product">
</a>
<!-------------------------------------------->

<!------------- _3_1_sequence-view-category --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_3_1_sequence-view-category.puml">
_3_1_sequence-view-category.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_1_sequence-view-category/_3_1_sequence-view-category.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_1_sequence-view-category/_3_1_sequence-view-category.png" title="_3_1_sequence-view-category">
</a>
<!-------------------------------------------->

<!------------- _3_2_sequence-add-category --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_3_2_sequence-add-category.puml">
_3_2_sequence-add-category.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_2_sequence-add-category/_3_2_sequence-add-category.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_2_sequence-add-category/_3_2_sequence-add-category.png" title="_3_2_sequence-add-category">
</a>
<!-------------------------------------------->

<!------------- _3_3_sequence-update-category --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_3_3_sequence-update-category.puml">
_3_3_sequence-update-category.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_3_sequence-update-category/_3_3_sequence-update-category.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_3_sequence-update-category/_3_3_sequence-update-category.png" title="_3_3_sequence-update-category">
</a>
<!-------------------------------------------->

<!------------- _3_4_sequence-delete-category --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_3_4_sequence-delete-category.puml">
_3_4_sequence-delete-category.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_4_sequence-delete-category/_3_4_sequence-delete-category.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_3_4_sequence-delete-category/_3_4_sequence-delete-category.png" title="_3_4_sequence-delete-category">
</a>
<!-------------------------------------------->

<!------------- _4_1_sequence-view-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_4_1_sequence-view-order.puml">
_4_1_sequence-view-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_1_sequence-view-order/_4_1_sequence-view-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_1_sequence-view-order/_4_1_sequence-view-order.png" title="_4_1_sequence-view-order">
</a>
<!-------------------------------------------->

<!------------- _4_2_sequence-create-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_4_2_sequence-create-order.puml">
_4_2_sequence-create-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_2_sequence-create-order/_4_2_sequence-create-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_2_sequence-create-order/_4_2_sequence-create-order.png" title="_4_2_sequence-create-order">
</a>
<!-------------------------------------------->

<!------------- _4_3_sequence-edit-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_4_3_sequence-edit-order.puml">
_4_3_sequence-edit-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_3_sequence-edit-order/_4_3_sequence-edit-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_4_3_sequence-edit-order/_4_3_sequence-edit-order.png" title="_4_3_sequence-edit-order">
</a>
<!-------------------------------------------->

<!------------- _5_1_sequence-view-invoice --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_5_1_sequence-view-invoice.puml">
_5_1_sequence-view-invoice.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_5_1_sequence-view-invoice/_5_1_sequence-view-invoice.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_5_1_sequence-view-invoice/_5_1_sequence-view-invoice.png" title="_5_1_sequence-view-invoice">
</a>
<!-------------------------------------------->

<!------------- _6_1_sequence-view-sell --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_6_1_sequence-view-sell.puml">
_6_1_sequence-view-sell.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_6_1_sequence-view-sell/_6_1_sequence-view-sell.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_6_1_sequence-view-sell/_6_1_sequence-view-sell.png" title="_6_1_sequence-view-sell">
</a>
<!-------------------------------------------->

<!------------- _6_2_sequence-create-sell --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_6_2_sequence-create-sell.puml">
_6_2_sequence-create-sell.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_6_2_sequence-create-sell/_6_2_sequence-create-sell.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_6_2_sequence-create-sell/_6_2_sequence-create-sell.png" title="_6_2_sequence-create-sell">
</a>
<!-------------------------------------------->

<!------------- _7_1_sequence-view-receipt --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_7_1_sequence-view-receipt.puml">
_7_1_sequence-view-receipt.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_7_1_sequence-view-receipt/_7_1_sequence-view-receipt.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_7_1_sequence-view-receipt/_7_1_sequence-view-receipt.png" title="_7_1_sequence-view-receipt">
</a>
<!-------------------------------------------->

<!------------- _8_1_sequence-view-sell-report --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_8_1_sequence-view-sell-report.puml">
_8_1_sequence-view-sell-report.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_8_1_sequence-view-sell-report/_8_1_sequence-view-sell-report.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_8_1_sequence-view-sell-report/_8_1_sequence-view-sell-report.png" title="_8_1_sequence-view-sell-report">
</a>
<!-------------------------------------------->

<!------------- _8_2_sequence-create-sell-report --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_8_2_sequence-create-sell-report.puml">
_8_2_sequence-create-sell-report.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_8_2_sequence-create-sell-report/_8_2_sequence-create-sell-report.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_8_2_sequence-create-sell-report/_8_2_sequence-create-sell-report.png" title="_8_2_sequence-create-sell-report">
</a>
<!-------------------------------------------->

<!------------- _9_1_sequence-view-stock-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_9_1_sequence-view-stock-order.puml">
_9_1_sequence-view-stock-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_9_1_sequence-view-stock-order/_9_1_sequence-view-stock-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_9_1_sequence-view-stock-order/_9_1_sequence-view-stock-order.png" title="_9_1_sequence-view-stock-order">
</a>
<!-------------------------------------------->

<!------------- _9_2_sequence-create-stock-order --------------->
<h3> 
<a href="https://github.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/blob/main/system-analysis/sequence/_9_2_sequence-create-stock-order.puml">
_9_2_sequence-create-stock-order.puml
</a>
</h3>
<br />
<a href="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_9_2_sequence-create-stock-order/_9_2_sequence-create-stock-order.png"> 
<img src="https://raw.githubusercontent.com/billowdev/inventory-system-plantuml-sequelize-seeder-example/main/out/system-analysis/sequence/_9_2_sequence-create-stock-order/_9_2_sequence-create-stock-order.png" title="_9_2_sequence-create-stock-order">
</a>
<!-------------------------------------------->
