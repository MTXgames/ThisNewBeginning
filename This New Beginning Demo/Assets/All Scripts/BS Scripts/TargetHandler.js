#pragma strict

var order : int = 0;

function Start () {

}

function Update () {

	if(Input.GetKeyDown("right")) {
		order ++;
		if(order >= 3) {order = 3;}
	}
	else if(Input.GetKeyDown("left")) {
		order --;
		if(order <= 0) {order = 0;}
	}

	switch(order) {
		case 0:
			GV.Target = GV.enemy[0];
			break;
		case 1: 
			GV.Target = GV.ally[0];
			break;
		case 2: 
			GV.Target = GV.ally[1];
			break;
		case 3: 
			GV.Target = GV.ally[2];
			break;
		default: 
			GV.Target = GV.enemy[0];
			break;
	
	}

}
