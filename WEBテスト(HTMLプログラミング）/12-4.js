let count = 1; // カウント用変数、後で使う

function addCard() {
  // カードリスト要素を取得する
  const cardList = document.getElementById("cardList");

  // 新しいdiv要素（カード）を作成
  const card = document.createElement("div");
  card.className = "card";

  // 内容を書く
  card.innerHTML = `${count}枚目のカードです`;

  // カードをリストに追加
  cardList.appendChild(card);

  count++; // 次のカード用にカウントを増やす
}
