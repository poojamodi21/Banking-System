# **Banking System💰**

**Screenshots**

<img src="https://raw.githubusercontent.com/poojamodi21/Banking-System/master/SCREENSHOTS/Screenshot%201.png" alt="Home page" raw=true/>
<img src="https://raw.githubusercontent.com/poojamodi21/Banking-System/master/SCREENSHOTS/Screenshot%202.png" alt="Customers Table" raw=true/>
<img src="https://raw.githubusercontent.com/poojamodi21/Banking-System/master/SCREENSHOTS/Screenshot%203.png" alt="Execute Transactions" raw=true/>
<img src="https://raw.githubusercontent.com/poojamodi21/Banking-System/master/SCREENSHOTS/Screenshot%204.png" alt="Execute Transactions" raw=true/>
<img src="https://raw.githubusercontent.com/poojamodi21/Banking-System/master/SCREENSHOTS/Screenshot%205.png" alt="Transaction table" raw=true/>



The main objective of the Banking system is to provide a simple yet fully functional UI for executing transactions from one users account to another user. This project utilizes all the CRUD features. It uses React on the client side, Express on backend and MongoDB as the database.

**Functionalities🛠️**

----

* It shows the list of all the users and their present bank balance in real time.
* We can transfer amount from one user to another user
* Before initiating the transaction it checks the balance of the sender.
* If the amount a user wishes to send is higher than the balance, the transaction will not execute.
* If the transaction is successful, the updated amounts are reflected in the sender and receiver profiles.
* All the transactions are recorded and displayed in a separate table with its time and date.

**Installtion and execution procedure⚙️**

----

1 : Install node in your system.

2 : After installing node open terminal in root folder of the project and run without the quotes 'npm install'.

3 : After installation navigate to client folder and run the following command in terminal without quotes 'npm install '

4 : Note you need to paste your mongodb url in key.js file in root folder with "MONGOURL:'your_mongo_url_here'".

5 : Post installation run node app.js in root folder and npm start in client folder
