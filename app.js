var url = "http://glacial-gorge-2029.herokuapp.com/lineaunope";
request = new XMLHttpRequest;
request.open('GET', url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);

	var elements = document.querySelectorAll(data);
	Array.prototype.forEach.call(elements, function(el, i){
		
	});

  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();