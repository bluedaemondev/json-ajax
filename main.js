	var currentPage = 1;
	var btn = document.getElementById('btnGet');
	btn.addEventListener("click",function(){
		alert(currentPage);
		var request = new XMLHttpRequest();
		request.open('GET','https://raw.githubusercontent.com/bluedaemondev/json-ajax/master/peopleList'+currentPage+'.json');	
		request.onload = function(){
			var dataG = JSON.parse(request.responseText);
			renderHTML(dataG);				
		};
		request.send();
		currentPage++;
		if(currentPage > 3){
			//btn.style.enabled = "none";
			alert("FINISH");
		}
	});
	function renderHTML(data){
		var str = "";
		var i;
		for(i = 0;i<data.length;i++){
			str += "<p>" + data[i].firstName + " " + data[i].lastName + " is a " + data[i].description + "</p>"; //+ " and has atribute -human- = " + (data[i].abilities.human) ?  'true' : 'false'  + "</p>";
		}
		var div = document.getElementById('fillTarget');
		div.insertAdjacentHTML('beforeend',str);
	};