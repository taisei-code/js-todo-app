// 変数にDOM要素を代入

const taskInput  = document.querySelector('.task_input');
const taskSubmit = document.querySelector('.task_submit');
const taskList   = document.querySelector('.task-list');

// タスク追加ボタンをクリックした時の処理
taskSubmit.addEventListener('click', e => {

  // submitイベントの動作を止める
  e.preventDefault();

  // 未入力ならタスクを追加しない
  if (taskInput.value === '') return

  // 入力したタスクを表示する
  const listItem  = document.createElement('li');
  taskList.appendChild(listItem);

  const taskValue = document.createElement('p');
  const showTask  = listItem.appendChild(taskValue);

  showTask.textContent = taskInput.value;

  // タスク追加後にフォームを空にする
  taskInput.value = ''

  // 削除ボタン作成
  const deleteBtn     = document.createElement('button');
  deleteBtn.innerHTML = 'delete';
  listItem.appendChild(deleteBtn);
  deleteBtn.classList.add('delete-btn');

  // タスク削除ボタンをクリックした時の処理
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();

    // タスクを削除
    listItem.remove();

  })

})







