#pragma strict
private var pos : Transform;
private var width : int;
public var order; //this is the order of the command. if it's the 1st, 2nd, 3rd, etc.

function Start () {
	width = Screen.width;
}

function Update () {
	if(GV.turns[0].activeCmds <= 1) {
		pos = gameObject.GetComponent(Transform);
		pos.transform.position.x = width / 2;
	}
	//continue more calculations for more active commands when they're programmed
}