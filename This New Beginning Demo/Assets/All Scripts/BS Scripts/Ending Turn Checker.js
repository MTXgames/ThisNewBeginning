#pragma strict
public var curTurn : Animator;
private var leng : int;
private var delay : float = 1.0;

function Start () {
	
}

function Update () {
	
}

function LateUpdate() {
	/*leng = GV.dmgString.Length;
	if(GV.turns[0].curAP <= 0) { //if AP reaches 0, the turn automatically ends.
		GV.turns[0].anim.SetBool("isAttacking", false);
		delay -= Time.smoothDeltaTime;
		if(delay <= 0) { //this and the above line act as a "wait" counter. when anims exist, delay once the anms finished
			//AllyAnmScript.curAlly.SetBool("isAttacking", false);
			curTurn.SetBool("turnEnded", true);
			
			GV.turns.RemoveAt(0);
			GV.constTurns.RemoveAt(0);
			TurnCalc.KOremover(GV.allySize, GV.enemySize);
			TurnCalc.updateTurns(GV.allySize, GV.enemySize);
			GV.turns[0].curAP += GV.turns[0].APPT;
			GV.dmgShow = false;
			GV.once = false;
			UpdatingScript.killNums();
			//canAnimate.anim.SetBool("dmgShow", false);
			GV.dmgTotal = 0;
			GV.dmgTotStr = "";
			
			//NOTE: make the animations for the buttons
			GV.cmdCastedAmt = 0;
			delay = 1.0;
		}
	}*/
}
