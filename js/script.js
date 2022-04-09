const body = document.querySelector('body');


const list = {
	Apple:{
		color:"darkred",
		color1:"red",
		info:`
		Apples are the most popular fruit in the world and everyone know about that.
		`,
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HySrCJe7ATbkNjvwko8rwQHaIZ%26pid%3DApi%26h%3D160&f=1",
	},
	Orange:{
		color:"#fda603",
		color1:"orange",
		info:"Orange is a fruit which sour and sweet.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QfvAfyfZD7CgTSgRa7BJXQHaFj%26pid%3DApi&f=1",
	},
	Lime:{
		color:"#71a019",
		color1:"green",
		info:"Lime are very sour fruit.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.glm8djGXktPeckLacH25BgHaGB%26pid%3DApi&f=1",
	},
	Peach:{
		color:"#e68175",
		color1:"slightly pink",
		info:"I don't know about peach very much.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fLeW4FUGSVvYG7Z9h0168wHaHa%26pid%3DApi&f=1",
	},
	Gold:{
		color:"gold",
		color1:"gold",
		info:"Gold is the most precious mineral in the world.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V2-7onvis1ExsV4DDqNKSAHaEc%26pid%3DApi&f=1",
	},
	Silver:{
		color:"silver",
		color1:"silver",
		info:"Silver bars are good for producing prize and trophy",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qErKQ-NVGJXJEvMk1b0-oAAAAA%26pid%3DApi&f=1",
	},
	Rose:{
		color:"#fd262c",
		color1:"red",
		info:"Rose is one of the popular flowers.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EgTtn1GwwUhPfFFXVTgPPAHaGd%26pid%3DApi&f=1",
	},
}

for (i in list) {
	let box = document.createElement('div');
	let br = document.createElement('br');
	box.className='box01';
	
	if (list[i].img==""){
		box.innerHTML=`
	<h3 style="color:${list[i].color};font-size:20px;">${i}</h3>
	<label style="font-size:20px;">The color of ${i} is <span style="color:${list[i].color};font-size:25px;">${list[i].color1}</span>.\n <span style='color:black;font-size:20px;font-family:elephant;font-style: italic;'> ${list[i].info}</span></label>`;
	}
	else{
		box.innerHTML=`
	<h3 style="color:${list[i].color};font-size:20px;">${i}</h3>
	<center><img src="${list[i].img}" alt="${i}'s photo" width="200px;"></center>
	<label style="font-size:20px;">The color of ${i} is <span style="color:${list[i].color};font-size:25px;">${list[i].color1}</span>.\n <span style='color:black;font-size:20px;font-style: italic;'>${list[i].info}</span></label>`;
	}
	body.appendChild(box);
	body.appendChild(br);
}
let n = JSON.stringify(list);

let txt = document.createElement('label');
txt.style=`
color:blue;
background-color:white;
border-radius:10px;
padding:10px;
margin:10px;
`;
txt.textContent=n;
body.appendChild(txt);