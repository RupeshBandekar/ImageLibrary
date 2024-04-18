# ImageLibrary
**Scopes covered are as follows:**
1) Favourite an image: only one image can be marked as favourite at a time
2) Assign a title: user can enter title in textbox
3) Add a source for the image (like Giphy, Shutterstock etc...): user can select source of image from dropdown list
4) Add a location to the image: user can select city from dropdown list
5) Debouncing mechanism to sync the client side state to the backend every 30s once any change made
   
**Versions of development tools used is as follows:**
1) node: v20.11.0
2) npm: 10.2.4
3) reactjs: 18.2.0
4) mssql: Microsoft SQL Server 2022 (64 bit)
5) driver: Microsoft ODBC Driver 17 for SQL Server

First of all clone the code on your local system using command `git clone https://github.com/RupeshBandekar/ImageLibrary.git`

![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/32f2a17b-c17e-4cb9-95ae-c15ace340979)

**Please follow below database configuration steps:**
1) Create database and respective components by executing sql scripts given in path (`..\ImageLibrary\database`).
2) Execute first script `1_Create_Database.sql`, it will create database named as `ImageLibrary`.
3) Execute second script `2_Create_Table.sql`, it will create `Image` table with 11 prepopulated records.
4) Execute third script `3_Create_Procedure.sql`, it will create a stored procedure `Sync_Image`.
   
![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/72f85971-e3e2-4ec0-a4a1-0f7b5b5f6eaf)


**Please configure the sql connection string in db config file:**
1) DB config is stored in file at location (`..\ImageLibrary\server\config\db.config.js`).
2) In the file, connectionString property in config is set with default values as
   ```Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=ImageLibrary;Trusted_Connection=yes;```.
   
![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/444f738c-077e-443f-abae-72f616624fef)

3) Please make sure that the mentioned driver is installed on the machine. (Control Panel -> Administrative Tools -> ODBC Data Sources (64-bit) -> Drivers tab)

   ![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/32719d94-4da6-4955-a6c0-556f79a501e8)

4) Server can be changed depending db server location. (this project is developed and tested on local db instance).

**Once all the configuations are complete, now we can run our application:**
1) Open a powershell or any editor window and navigate to server folder (`..\ImageLibrary\server`), and execute command `npm install`.
   
   ![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/50811e25-2878-4373-9f5e-63489767cd4b)

2) Navigate to client folder (`..\ImageLibrary\client`) in powershell or any editor, and execute command `npm install`. Close the window.
   
   ![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/356bc366-4c64-4c92-891b-4f119f49466b)

3) Open a new powershell or any editor window, navigate to server folder (`..\ImageLibrary\server`) and execute command `npm start`.
   
   ![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/d1ab757d-7127-48f3-8bd0-fdddf841415d)

4) Open a new powershell or any editor window, navigate to client folder (`..\ImageLibrary\client`) and execute command `npm start`.
   
   ![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/a03f6830-2258-4a00-b5e3-cd99713b175a)


**Once the application is up and running, it will appear as below:**

![image](https://github.com/RupeshBandekar/ImageLibrary/assets/49030092/c802bfc7-7661-4266-96b1-dcc072369a5e)

_Have a nice day!_
