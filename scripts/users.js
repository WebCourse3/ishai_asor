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
	var results = users.filter(function(user) { return user.id == userid; });
	results[0].follow = true;
	var generalGrid = document.getElementById('general-grid');
	var userElements = generalGrid.getElementsByClassName(userid);

	var buttons = userElements[0].getElementsByTagName('input');//find the button
	buttons[0].value = 'UnFollow';//change the text
	buttons[0].setAttribute('onclick','UnFollow('+userid+')');//chenge the action
    ChangeButtonColors(buttons[0],'#337ab7','#fff');
	var followers = document.getElementById('followers').appendChild(createUserDiv(results[0],true));//get the followers grid

}

function UnFollow(userid){
	var results = users.filter(function(user) {
		return user.id == userid;
	});
	results[0].follow = false;
	var generalGrid = document.getElementById('general-grid');
	var userElements = generalGrid.getElementsByClassName(userid);

	var buttons = userElements[0].getElementsByTagName('input');//find the button
	buttons[0].value = 'Follow';//change the text
	buttons[0].setAttribute('onclick','Follow('+userid+')');//chenge the action
	ChangeButtonColors(buttons[0],'#fff','#337ab7');

	var followers = document.getElementById('followers');//get the followers grid
	var tmp = followers.getElementsByClassName(userid);//find the follower view object
	followers.removeChild(tmp[0]);//remove the follower from grid
}

function createUserDiv(user,followerModel) {
    var container = document.createElement('div');
    if(!followerModel)
	    container.className = 'col-xs-2 col-md-2';//the follower model is because the bootstrap shit
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
	if(!user.follow){
		button.value = 'Follow';
		button.setAttribute('onclick','Follow('+user.id+')');
		ChangeButtonColors(button,'#fff','#337ab7');
	}

	else
	{
		button.value = 'UnFollow';
		button.setAttribute('onclick','UnFollow('+user.id+')');
		ChangeButtonColors(button,'#337ab7','#fff');
	}



	var userName = document.createElement('div');
	userName.innerText = user.username;

	panelBudy.appendChild(image);
	panelBudy.appendChild(button);
	panelBudy.appendChild(userName);

	panel.appendChild(panelBudy);

	container.appendChild(panel);
return container;

}

function ChangeButtonColors(button,color,BColor) {
	button.style.color = color;
	button.style.backgroundColor = BColor;
}

