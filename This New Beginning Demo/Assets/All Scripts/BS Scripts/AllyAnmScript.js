#pragma strict
public var orionAnim : Animator;
public var bellAnim : Animator;
public var alniAnim : Animator;
public static var curAlly : Animator;

function Start () {
	if(GV.turns[0].name == "Orion") {curAlly = orionAnim;}
	else if(GV.turns[0].name == "Bellatrix") {curAlly = bellAnim;}
	else if(GV.turns[0].name == "Alnitak") {curAlly = alniAnim;}
}

function Update () {
	//if(GV.turns[0].name == "Orion") {curAlly = orionAnim;}
	//else if(GV.turns[0].name == "Bellatrix") {curAlly = bellAnim;}
	//else if(GV.turns[0].name == "Alnitak") {curAlly = alniAnim;}
}

//NOTE: for most methods that are casted when a UI button is pressed, there needs to be complimentary methods. The static 
//one executes when a key is down. a non-static is executed when a button is pressed. All statics in the dualities are
//marked with an 'S'
static function moveForwardS() {
//	curAlly.SetBool("isAttacking", true);
}

function moveForward() {
//	curAlly.SetBool("isAttacking", true);
}