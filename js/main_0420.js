// 変数にDOM要素を代入

const taskForm   = document.querySelector('.task_form')
const taskInput  = document.querySelector('.task_input');
const taskSubmit = document.querySelector('.task_submit');
const taskList   = document.querySelector('.task-list');

// 追加されたタスクを配列で管理
let todoData = [];

taskForm.addEventListener('submit', e => {
  e.preventDefault();

  // 入力された文字列を取得してオブジェクトに格納
  let todoObj = {
    content: taskInput.value,
    isDone: false
  };
  if(todoObj.content) {
    todoData.push(todoObj);
  }
  // タスク追加後にフォームを空にする
  taskInput.value = ''
  
  // ローカルストレージにデータを保存
  updateLS();
  // ローカルストレージに保存されたデータを取得して、
  updateTodo();
})

// ローカルストレージにデータを保存
function updateLS() {
  localStorage.setItem('myTodo', JSON.stringify(todoData));
}
// ローカルストレージに保存されたデータを取得
function getTodoData() {
  return JSON.parse(localStorage.getItem('myTodo')) || [] ;
}

// タスクのリストを1つずつ作成する関数
function taskCreate(todo) {

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
  
  showTask.textContent = todo.content;

  // 削除ボタン作成
  const deleteBtn     = document.createElement('button');
  deleteBtn.innerHTML = '削除する';
  listItem.appendChild(deleteBtn);
  deleteBtn.classList.add('delete-btn');

  listItem.addEventListener('click', () => {
     // チェックボックスをクリックした時の処理
    if(finishBtn.checked) {
      showTask.classList.add('task-check');
      todo.isDone = true;
    } else {
      taskValue.classList.remove('task-check');
      todo.isDone = false;
    }
     
     updateLS();
  })
    
}

function updateTodo() {
  taskList.innerHTML = "";
  console.log(taskList);
  todoData = getTodoData();
  todoData.forEach(todo => {
      taskCreate(todo);
  })
}




