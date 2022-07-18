import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = makeElement("div", "list-row");

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから完了ボタンが押されたTODOを削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加するdivを生成
    const div = makeElement("div", "list-row");

    // divの子要素のliを生成
    const li = makeElement(
      "li",
      "",
      completeButton.parentElement.firstChild.innerText
    );

    // divの子要素のbuttonを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻す墓tなんの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // divに各要素を追加
    div.appendChild(li);
    div.appendChild(backButton);

    // divを完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// クラス名やテキストを指定してDOMエレメントを作成
const makeElement = (type, className = "", text = "") => {
  const element = document.createElement(type);
  element.className = className;
  element.innerText = text;

  return element;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

// ||は左側がfalseなら、右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

/**
 * 三項演算子 ?:
 */
// 条件 ? trueのとき : falseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です。";
// };
// console.log(checkSum(100, 1));

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["mirror", "tanaka", "maki"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// 配列生成
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// 配列の要素毎に処理
// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}です。`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // return文に条件式を書く！
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "mirror") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // ディープコピーできる
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // 参照コピーだと思わぬ不具合を生む...
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * デフォルト値、引数など
 */
// Javascriptでは変数のデフォルト値がundefinedになる

// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは！${name}さん！`);
// };

// sayHello();

/**
 * 分割代入
 */
// const myProfile = {
//   name: "mirror",
//   age: 34
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["mirror", 34];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * アロー関数
 */
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です！"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です！"));

// const func3 = (str) => str;
// console.log(func3("func3です！"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(3, 6));
