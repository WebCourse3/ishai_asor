function  addTweet() {
	var text = document.getElementById('tweetText').value;
    var users =
	    [
	    {username: 'Bobo', text: 'hello followers!'},
	    {username: 'Elvis', text: 'this exercise is really easy!'},
	    {username: 'Mimi', text: 'I want to go to sleep'}
    ]

	createTweetElement(users[2].username,text);
	document.getElementById('tweetText').value = "";

}
function createTweetElement(UN,Text) {
	var tweetRow = document.createElement("div");
	tweetRow.className = 'row mt-1';
	var tweetImg = document.createElement('img');
	tweetImg.src = "../images/useravatar.png";
	tweetImg.className = 'left col-xs-1 col-md-1';
	var tweetUN = document.createElement("div");
	tweetUN.className = 'user-name col-xs-11 col-md-11 text-left';
	tweetUN.innerText =UN;
	var tweetText = document.createElement('div');
	tweetText.className = 'user-comment col-xs-11 col-md-11 text-left';
	tweetText.innerText = Text;

	tweetRow.appendChild(tweetImg);
	tweetRow.appendChild(tweetUN);
	tweetRow.appendChild(tweetText);
	document.getElementById('tweetsHolder').appendChild(tweetRow);
}