function $(query){
	return new queryResults(query);

}

var queryResults = function(query){
	this.items = [] ;
	this.addClass = function (className) {
         for(var i = 0 ;i< this.items.length;i++){
	         this.items[i].classList.add(className);
         }
	};

	this.removeClass = function (className) {
		for(var i = 1 ;i< this.items.length;i++){
			this.items[i].classList.remove(className);
		}
	};

	this.each = function(func){
		this.items.forEach(func);
	};

	this.map = function(func){
		var tmp = [];
		tmp = this.itemsl
		tmp.forEach(func);
		return tmp;
	};

	var operation = query.split(' ');
	this.items = firstFilter(operation[0]);

   // this.items = getListChildren(firstFilter(operation[0]));

	for(var i=1;i<operation.length;i++){
		this.items = filterResults(operation[i],this.items);
	}

	//this.items = getListChildren(this.items);
}

function filterResults(operator,results) {
	operator = operator.toUpperCase();
	results = Array.prototype.slice.call(results);
/*	if(operator.charAt(1)=='#')
		return results.filter(function (result) {
			return result.id == operator.substring(1,result.length);
		});
*/
	if(operator.charAt(0) == '.') {
		return results.filter(function (result) {
			return result.classList.contains(operator.substring(1,result.length));
		});
	}
	else {
			var tmp = [];
			tmp =  Array.prototype.slice.call(tmp);
			for(var j = 0 ;j<results.length;j++)
			{
				if(results[j].childNodes.length>0)
				{
					for(var i=0;i<results[j].childNodes.length;i++){
						if(results[j].childNodes[i].tagName == operator)
							tmp.push(results[j].childNodes[i]);
					}
				}
				else if(results[j].tagName == operator){
					tmp.push(results[j]);
				}
			}
	    	return tmp;
	     }
}

function getListChildren(results) {
		var tmp = [];
		tmp  = Array.prototype.slice.call(tmp);
		for(var i=0;i<results.length;i++){
			if(results[i].children.length>0){
				getListChildren(results[i].children).forEach(function (t) { tmp.push(t); });

			}
			else
			{
				var list = [];
				list = Array.prototype.slice.call(list);
				list[0] = results[i];
				list.forEach(function (t) {tmp.push(t);  });

			}
		}
         return tmp;
}

function firstFilter(operator) {

	if(operator.charAt(0)=='#'){
		return getByID(operator);
	}
    else if(operator.charAt(0)=='.'){
		return getByClass(operator);
	}
	else {
		return getByTag(operator);
	}
}

function getByID(element) {
	var list = [];
	list = Array.prototype.slice.call(list);
	list[0] = document.getElementById(element.substring(1,element.length));
	return list;
}

function getByTag(element) {
	return document.getElementsByTagName(element);
}

function getByClass(element) {
	return document.getElementsByClassName(element.substring(1,element.length));
}
/*
$('div') // returns an OfekQuery object of all of the div elements in the page
$('div .fancy') // returns an OfekQuery object of all div elements that have descendant elements of class "fancy"
$('#baba-man') // returns an OfekQuery object of the element with id "baba-man"
$('.pretty-box').addClass('big-box') // adds the "big-box" class to all of the elements of class "pretty-box"
$('ul').filter(function(el) {
	return (el.childElementCount === 2);
}) // returns a new OfekQuery object containing all ul elements that have exactly 2 children elements
$('ul').any(function(el) {
	return el.childElementCount &gt; 5
}) // returns true if any ul elements have more than 5 children elements
*/