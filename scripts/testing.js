
function test_group(group_Name, test_group_function) {
	this.group = document.createElement('div');
	this.group.className = 'test-group';
	this.group.innerText = group_Name;
	test_group_function(this);
	document.body.appendChild(this.group);

}

function assert(result,name) {
	var assert = document.createElement('div');
	assert.className = 'test-message';
	assert.innerText = name;
	if(result === false){
		assert.style.backgroundColor = 'red';
		this.group.style.backgroundColor = 'red';
	}
	this.group.appendChild(assert);
}