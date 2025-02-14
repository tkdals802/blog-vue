# blog-vue

- vue-version = @vue/cli 5.0.8
- node-version = 23.7.0
- npm-version=10.9.2
- 開発os = ubuntu
- 開発tool = chrome

### vue setup
`$ npm create vue`
`npm install`
`$ npm run dev`

### project構造

* ROOTPATH/
  * src/
    * router/
      index.js  -  page routeを正義
    * scripts/  -  ブイファイルのスクリプトを分離
    * store/
      authStore.js  -  login, logout, Auth logicを正義
    * views/  -  blog内部のvue-pageを正義
      App.vue  -  最上位vue-file
      main.js  -  最上位 file
    
 ### blog vue page説明

 ### Sign in page
 ![image](https://github.com/user-attachments/assets/721c4fd7-98bf-4f8f-96af-5443496f8996)

### main page
![image](https://github.com/user-attachments/assets/9e0fa923-1771-42e0-82b4-81c93c482fa4)

### category filtering
![image](https://github.com/user-attachments/assets/ed3ba8e3-8fc0-4ca8-af6d-535bd64c6b5e)

### post 生成 page
![image](https://github.com/user-attachments/assets/359639e1-568a-4a5a-8b50-8539f75768f7)

### post 内容 page
![image](https://github.com/user-attachments/assets/f806de32-fb81-4b51-b411-6beb69d07f7b)

### titleで検索結果 page
![image](https://github.com/user-attachments/assets/d2c47d35-8255-4a0d-ad21-38b5304cdbd0)

### 会員登録 page
![image](https://github.com/user-attachments/assets/6dcfb844-cb80-4958-b4e2-b8541ac3103e)

### post 修整 page
![image](https://github.com/user-attachments/assets/14c6fc03-3174-43c9-9283-fccefb72bca0)
