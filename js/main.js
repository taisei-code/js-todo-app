// 変数にDOM要素を代入

const taskInput  = document.querySelector('.task_input');
const taskSubmit = document.querySelector('.task_submit');
const taskList   = document.querySelector('.task-list');

// 追加されたタスクを配列で管理
let todoData = [];

taskSubmit.addEventListener('click', e => {
  e.preventDefault();

  // 未入力ならタスクを追加しない
  if (taskInput.value === '') return
  
  // 入力された文字列を取得してオブジェクトに格納
  let todoObj = {
    content: taskInput.value,
    isDone: false
  }
  todoData.push(todoObj);

  taskCreate();
 
  // タスク追加後にフォームを空にする
  taskInput.value = ''

  updateLS()
})

// ローカルストレージにデータを保存
function updateLS() {
  localStorage.setItem('myTodo', JSON.stringify(todoData));
}

function taskCreate() {

  // タスクを格納するリスト
  const listItem  = document.createElement('li');
  taskList.appendChild(listItem);

  // タスク完了/未完了を管理するチェックボックス
  const finishBtn = document.createElement('input');
  finishBtn.setAttribute('type', 'checkbox')
  listItem.appendChild(finishBtn);

   // 入力されたタスクを表示する
  const taskValue = document.createElement('p');
  const showTask  = listItem.appendChild(taskValue);

  showTask.textContent = taskInput.value;

  // 削除ボタン作成
  const deleteBtn     = document.createElement('button');
  deleteBtn.innerHTML = '削除する';
  listItem.appendChild(deleteBtn);
  deleteBtn.classList.add('delete-btn');

  // チェックボックスをクリックした時の処理
  finishBtn.addEventListener('click', e => {
    if(finishBtn.checked) {
      taskValue.classList.add('task-check');
    } else {
      taskValue.classList.remove('task-check');
    }
  })

  // タスク削除ボタンをクリックした時の処理
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    // タスクを削除
    listItem.remove();
  })

}