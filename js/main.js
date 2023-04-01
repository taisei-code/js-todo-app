// 変数にDOM要素を代入

const taskValue  = document.querySelector('.task_value');
const taskSubmit = document.querySelector('.task_submit');
const taskList   = document.querySelector('.task-list');

// タスク追加ボタンをクリックした時の処理

taskSubmit.addEventListener('click', e => {

  // submitイベントの動作を止める
  e.preventDefault();

  // 入力したタスクを表示する
  const listItem       = document.createElement('li');
  const showItem       = taskList.appendChild(listItem);
  showItem.textContent = taskValue.value;

  // タスク追加後にフォームを空にする
  taskValue.value = ''

  // 削除ボタン作成
  const deleteBtn     = document.createElement('button');
  deleteBtn.innerHTML = 'delete';
  listItem.appendChild(deleteBtn);
  deleteBtn.classList.add('delete-btn');

})






