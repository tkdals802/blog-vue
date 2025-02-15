# blog-vue

- vue-version = @vue/cli 5.0.8
- node-version = 23.7.0
- npm-version=10.9.2
- 開発os = ubuntu
- 開発tool = intellij, chrome

### vue setup
`$ npm create vue`
`npm install`
`$ npm run dev`

## project構造

* ROOTPATH/
  * src/
    * router/
      index.js  -  page routeを正義
    * scripts/  -  ブイファイルのスクリプトを分離
    * store/
      authStore.js  -  login, logout, Auth logicを正義
    * views/  -  blog内部のvue-pageを正義
    * App.vue  -  最上位vue-file
    * main.js  -  最上位 file

 ## login logic
- loginをしてページの内部に入ると、login状態を維持し、apiを呼び出すたびに確認しなければならない
- jwt tokenを使用して最初のログイン時にtokenとuser_idをlocal storageに保存する
- このようなlogicでloginをしないとurlを入力するだけではblog内部に進入できない

## page route

`'/' : Login page`

`'/signup' : SignUp page`

`'/dashboard' : Main page`

`'/post/:id' : post本文 page`

`'/search' : title検索結果page`

`'/createpost' : create post page`

`'/updatepost/:id' : 本文修正 page`

 ## blog vue page説明

 ### Sign in page
 <img src="https://github.com/user-attachments/assets/721c4fd7-98bf-4f8f-96af-5443496f8996" width="50%" />
 
 * login するとlocalstorageにuserid、jwt_tokenを保存
 * logoutの時localstorageにuserid, jwt_tokenを削除
 * tokenの満了期間=1時間
 * passwordは6文字以上

### main page
<img src="https://github.com/user-attachments/assets/9e0fa923-1771-42e0-82b4-81c93c482fa4" width="50%" />

- 左上に現在login中のusernameを表示
- logoutを押すとlogin pageに移動
- textを入力してtitleでpost検索ができる
- titleを押して掲示板の内部に移動

### category filtering
<img src="https://github.com/user-attachments/assets/ed3ba8e3-8fc0-4ca8-af6d-535bd64c6b5e" width="50%" />

- categoryリストの中から一つを選択してcategoryでpostをfilteringができる

### titleで検索結果 page
<img src="https://github.com/user-attachments/assets/d2c47d35-8255-4a0d-ad21-38b5304cdbd0" width="50%" />

- 入力内容がなければpage移動をしない

### post 生成 page
<img src="https://github.com/user-attachments/assets/359639e1-568a-4a5a-8b50-8539f75768f7" width="50%" />

- titleとcontentを入力
- category nameを入力して該当categoryがあれば接続、なければ該当categoryを新たに作成
- , を基準にtagを生成
- 既存の該当tagが存在する場合はpostとtagを接続、なければtagを新たに生成して接続

### post 内容 page
<img src="https://github.com/user-attachments/assets/f806de32-fb81-4b51-b411-6beb69d07f7b" width="50%" />

- 左上のhomeを押すとmain pageに移動

### 会員登録 page
<img src="https://github.com/user-attachments/assets/6dcfb844-cb80-4958-b4e2-b8541ac3103e" width="50%" />

- username, password, password確認を入力を受ける

### post 修整 page
<img src="https://github.com/user-attachments/assets/14c6fc03-3174-43c9-9283-fccefb72bca0" width="50%" />

- 元のpostの内容が初期値に設定

## mobile 環境

| 이미지 번호 | 이미지 링크  |
|-------------|--------------|
| 1           | ![image](https://github.com/user-attachments/assets/3a4aaba4-922c-4178-a491-6cacf978020e) |
| 2           | ![image](https://github.com/user-attachments/assets/01f412b8-1d38-4149-86fb-2e6cf01a0b98) |
| 3           | ![image](https://github.com/user-attachments/assets/604a4d97-7dc2-43ea-b61d-87505e67f4b2) |
| 4           | ![image](https://github.com/user-attachments/assets/ccd0fd37-b8fd-4523-93fa-0607ad00f53d) |
| 5           | ![image](https://github.com/user-attachments/assets/3bdc3f07-d558-443c-977f-c0b1afd5ee9d) |



