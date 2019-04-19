function ajax(url,funSucc,fnFaild){


	var xhr=new XMLHttpRequest();

	url=url+'?'+new Date().getTime();

	xhr.open('GET',url,true);

	xhr.send();

	xhr.onreadystatechange=function(){

		if (xhr.readyState==4) {

			if (xhr.status==200) {

				funSucc(xhr.responseText)


			}else{
				if (fnFaild){
				 	fnFaild(xhr.statusText)
				}

			}
		}
	}

}