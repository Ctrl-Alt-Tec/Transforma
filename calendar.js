var date = new Date();
var month = "";
var monthDays = 0;

switch(date.getMonth()){
	case 0:
		month = "Enero";
		monthDays = 31;
		break;
	case 1:
		month = "Febrero"
		if(date.getFullYear()%4==0 && date.getFullYear()%100==0 && date.getFullYear()%400==0){
			monthDays = 29;
		}else{
			monthDays = 28;
		}
		break;
	case 2:
		month = "Marzo";
		monthDays = 31;
		break;
	case 3:
		month = "Abril";
		monthDays = 30;
		break;
	case 4:
		month = "Mayo";
		monthDays = 31;
		break;
	case 5:
		month = "Junio";
		monthDays = 30;
		break;
	case 6:
		month = "Julio";
		monthDays = 31;
		break;
	case 7:
		month = "Agosto";
		monthDays = 31;
		break;
	case 8:
		month = "Sepiembre"
		monthDays = 30;
		break;
	case 9:
		month = "Octubre";
		monthDays = 31;
		break;
	case 10:
		month = "Noviembre";
		monthDays = 30;
		break;
	case 11:
		month = "Diciembre"
		monthDays = 31;
		break;
	default:
		console.log("Invalid month")
}

document.getElementById("month").innerHTML = `
				<ul>
					<li class="prev">&#10094;</li>
					<li class="next">&#10095;</li>
					<li>${month}<br><span style="font-size:18px">${date.getFullYear()}</span></li>
				</ul>`;


for(let i = 0; i < date.getDay(); i++){
	document.getElementById('days').innerHTML+= `<li></li>`
}
for(let i = 1; i <= monthDays; i++) {
	if (i == date.getDate()){
		document.getElementById('days').innerHTML+= `<li><span class="active">${i}</span></li>`
	}else{
		document.getElementById('days').innerHTML+= `<li>${i}</li>`
	}
	
}