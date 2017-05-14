function loadElement(tableName){

	if(tableName=='users'){
		$('#main-panel-heading').html('Users');
		$('#main-panel-body').load('parts/users.html');
	}
	else if(tableName=='posts'){
		$('#main-panel-heading').html('Posts');
		$('#main-panel-body').load('parts/posts.html');
	}
	else if(tableName=='pages'){
		$('#main-panel-heading').html('Pages');
		$('#main-panel-body').load('parts/pages.html');
	}
}