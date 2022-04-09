# To-Do Sequelize

使用 MySQL 作為資料庫並搭配 Sequelize ORM 打造的簡易 To-Do List App

## Prerequisites

* Node.js v14.16.1
* MySQL v8.0.25

## Installation and Execution

1.打開 terminal，使用 git clone 將專案下載至本地資料夾

```sh
git clone https://github.com/chriszychen/todo-sequelize.git
```

2.進入專案資料夾

```sh
cd todo-sequelize
```

3.安裝專案需求套件

```sh
npm install 
```

4.建立 DB 及跑 migration

```sh
npx sequelize db:create
npx sequelize db:migrate
```

5.增加種子資料

```sh
npx sequelize db:seed:all 
```

6.啟動伺服器

```sh
npm run start
```

終端機顯示 ```App is running on http://localhost:3000``` 代表伺服器成功啟動  

即可至瀏覽器網址輸入 [http://localhost:3000](http://localhost:3000) 使用專案功能
