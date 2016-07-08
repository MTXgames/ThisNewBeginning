#pragma strict
public static var commandText : String;
private var startTime : float;
private var startValue : float;

function Start () {
	commandText = "Attack";
}
static function takeAction() {
	if(GV.turns[0].curAP > 0) {
		GV.turns[0].anim.SetBool("isAttacking", true);
		if(GV.turns[0] != GV.Monster) {
			UpdatingScript.setNumLocation(GV.Target.loc);
			GV.turns[0].Attack(GV.turns[0], GV.Target, 1);
			UpdatingScript.killNums();
			GV.once = false;
			UpdatingScript.callTotalDmg();
			//HPlerp();
		}
	}
}

function takeBtnAction() {
	if(GV.turns[0].curAP > 0) {
		GV.turns[0].anim.SetBool("isAttacking", true);
		if(GV.turns[0] != GV.Monster) {
			UpdatingScript.setNumLocation(GV.Target.loc);
			GV.turns[0].Attack(GV.turns[0], GV.Target, 1);
			UpdatingScript.killNums();
			GV.once = false;
			UpdatingScript.callTotalDmg();
			//HPlerp();
		}
	}
}

public function HPlerp() {
	startTime = Time.time;
  	startValue = GV.lerpTgt.curHP;
  	while (Time.time < startTime + 1) { //1 second
    	GV.lerpTgt.curHP = Mathf.Lerp (startValue, GV.lerpTo, Time.time - startTime); //lerp value goes 0->1
    	yield;
  	}
  	GV.lerpTgt.cleanup(GV.lerpTgt);
 }

function LateUpdate () {
	commandText = "Attack";
}

static function getCmdText() {
	return commandText;
}
