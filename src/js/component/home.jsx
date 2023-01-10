import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [color1,setColor1]= useState("btn-secondary"); //rojo
const [color2,setColor2]= useState("btn-secondary"); //amarillo
const [color3,setColor3]= useState("btn-secondary"); //verde

function rojo (){
	if(color1 === "btn-danger"){
		setColor1("btn-secondary")
	}else if(color1 === "btn-secondary"){
		setColor1("btn-danger");
		setColor2("btn-secondary");
		setColor3("btn-secondary");
	}
}

function amarillo() {
    if(color2 === "btn-warning"){
        setColor2("btn-secondary")
    }else if(color2 === "btn-secondary"){
        setColor2("btn-warning");
		setColor1("btn-secondary");
		setColor3("btn-secondary");
}
}

    function verde() {
    if(color3 === "btn-success"){
        setColor3("btn-secondary")
    }else if(color3 === "btn-secondary"){
        setColor3("btn-success");
		setColor1("btn-secondary");
		setColor2("btn-secondary");
}
}

return (
	<div className="col-12">
		<div className="w-25 h-auto p-1 d-flex flex-column" style={{width: '30px',
height: '41px',  objectFit: 'contain',
  backgroundImage: `url("https://cdn.pixabay.com/photo/2013/07/12/15/17/traffic-light-149580_1280.png")` 
}}>
			<button className={"btn rounded-circle border-danger m-auto mt-3 "+color1} style={{width: 55, height: 55,}} onClick={rojo}></button>
			<button className={"btn rounded-circle border-warning p-1 m-auto mt-3 "+color2} style={{width: 55, height: 55 ,}} onClick={amarillo}></button>
			<button className={"btn rounded-circle border-warning p-1 m-auto mt-3 "+color3} style={{width: 55, height: 55,}} onClick={verde}></button>
		</div>
	</div>
);
	
	
};

export default Home;
