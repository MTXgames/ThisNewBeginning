#pragma strict
public static var curMP : int;
private static var maxMP : int;

function Start () {
	for(var i = 0; i < GV.allySize; i++) {
		maxMP += GV.ally[i].MP;
	}
	curMP = maxMP;
}

function Update () {

}

static function getMaxMP() {
	return maxMP;
}