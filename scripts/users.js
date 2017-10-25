var users =
	[
		{id:1,username: 'Bobo',follow:true},
		{id:2,username: 'Elvis',follow:false},
		{id:3,username: 'hahmed',follow:false},
		{id:4,username: 'gogo',follow:false},
		{id:5,username: 'moses',follow:true},
		{id:6,username: 'kako',follow:false},
		{id:7,username: 'Mimi',follow:false}
	]
document.addEventListener('DOMContentLoaded', function() {
	for(var i=0;i<users.length;i++){

		if(users[i].follow){
			var userView = createUserDiv(users[i],false);
			userView.setAttribute('id',users[i].id);
			document.getElementById('general-grid').appendChild(userView);

			userView = createUserDiv(users[i],true);
			userView.setAttribute('id',users[i].id);
			document.getElementById('followers').appendChild(userView);

		}
         else{
			var userView = createUserDiv(users[i],false);
			userView.setAttribute('id',users[i].id);
			document.getElementById('general-grid').appendChild(userView);
		}

	}
}, false);


function Follow(userid){
	var userElements = document.getElementsByClassName(userid);
	for(var i=0;i<userElements.length;i++){
		//find the button
		//change the text
		//chenge the action
		

	}
	users.filter(user.id = userid).follow = true;


}

function createUserDiv(user,followerModel) {
    var container = document.createElement('div');
    if(!followerModel)
	    container.className = 'col-xs-2 col-md-2';
    container.classList.add(user.id)  ;
	var panel = document.createElement('div');
	panel.className = 'panel panel-default';

	var panelBudy = document.createElement('div');
	panelBudy.className = 'panel-body text-center';

	var image = document.createElement('img');
	image.src = '../images/useravatar.png';

	var button = document.createElement('input');
	button.type = 'button';
	button.className = 'btn btn-primary';
	if(!user.follow)
	button.value = 'follow';
	else
		button.value = 'unFollow';
	button.setAttribute('click','FollowUnfollw('+user.id+')');


	var userName = document.createElement('div');
	userName.innerText = user.username;

	panelBudy.appendChild(image);
	panelBudy.appendChild(button);
	panelBudy.appendChild(userName);

	panel.appendChild(panelBudy);

	container.appendChild(panel);
return container;

}

