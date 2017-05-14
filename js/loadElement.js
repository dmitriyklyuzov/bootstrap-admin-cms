function loadElement(tableName){

	if(tableName=='users'){
		$('#main-panel-heading').html('Users');
		$('#main-panel-body').load('parts/users.html');
		$('#main-panel-add-link').attr('data-target', '#addUserModal');
	}
	else if(tableName=='posts'){
		$('#main-panel-heading').html('Posts');
		$('#main-panel-body').load('parts/posts.html');
		$('#main-panel-add-link').attr('data-target', '#addPostModal');
	}
	else if(tableName=='pages'){
		$('#main-panel-heading').html('Pages');
		$('#main-panel-body').load('parts/pages.html');
		$('#main-panel-add-link').attr('data-target', '#addPageModal');
	}
}