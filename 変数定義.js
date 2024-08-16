//***********************************************************************************************　最終的に出力されるhtmlコード格納場所
var result_code;

//***********************************************************************************************　開始：終了

//html文頭（※バッククオート shift + @）
const templete_head = `
<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="共通.css" rel="stylesheet">
    <script src="共通関数.js"></script>
    <script src="変数定義.js"></script>
</head>
<body>
`;


//body閉じタグ
const templete_body = `
</body>
`;

//***********************************************************************************************　配列系（動的に増やせる）

//ラベル　配列
let array_label = [];

//ラベル　テキストボックス
let array_textbox = [];

//ラジオ　テキストボックス
let array_radio = [
    [],//グループ名
    []//選択肢
];

//テーブル　テキストボックス
let array_table = [
    [],//ヘッダー項目
    []//データ
];

//***********************************************************************************************　機能別タグ系（これ　+　配列要素　+　これ）

//ラベル　タグ
const templete_label_S = `<label>`; //Start
const templete_label_E = `</label>`; //End

//テキストボックス　タグ
const templete_textbox_S = `<input type="text">`; //Start
const templete_textbox_E = `</input>`; //End

//ラジオ　タグ
const templete_radio_S = `<input type="radio">`; //Start
const templete_radio_E = `</input>`; //End

//テーブル　タグ
const templete_table_S = `<table>`; //Start
const templete_table_E = `</table>`; //End

//***********************************************************************************************　テーブル用css

//枠線
const table_style=`
<style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
</style>
`;