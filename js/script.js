// drag items from the To Be Done list to the Completed Tasks list
$(document).ready(function(){
	$("#tasks").sortable({
		connectWith:"#tasks-end"
	});
	$('#tasks-end').sortable();
})

// add a new task to the list  
$('.btn-add').click(function(){
	let inputTask = $('.task-add__input').val();
	if (inputTask != '' && inputTask != ' '){
		$('#tasks').append(`<div class="task"><p>${inputTask}</p><p class="buttons"><button class="btn-task btn-task-end btn-task-style">&#10004;</button><button class="btn-task btn-task-delete btn-task-style">&#10008;</button></p></div>`);
		$('.task-add__input').val("");
	}
})

// remove tasks from either list by clicking a Delete button
$(document).on('click', '.btn-task-delete', function(){
	$(this).parents('.task').remove();
})

// mark a task as complete  
$(document).on('click', '.btn-task-end', function(){
	let task = $(this).parents('.task');
	task.remove();
	$('#tasks-end').append(task);
})