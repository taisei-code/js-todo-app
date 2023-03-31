// 変数にDOM要素を代入

const task     = document.querySelector('.task-input');
const addBtn    = document.querySelector('.add-click');
const deleteBtn = document.querySelector('.delete-click');

// Addボタンがクリックされたとき
addBtn.addEventListener('click', event => {

    // タスク表示・非表示切り替え
    let taskShow = document.querySelector('.task-list');
    taskShow.classList.remove('task-hide');
    taskShow.classList.add('task-show');
})

// Deleteボタンがクリックされたとき
deleteBtn.addEventListener('click', event => {

     // タスク表示・非表示切り替え
     let taskShow = document.querySelector('.task-list');
     taskShow.classList.add('task-hide');
     taskShow.classList.remove('task-show');
}) 



