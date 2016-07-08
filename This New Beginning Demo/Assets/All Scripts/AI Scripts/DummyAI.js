#pragma strict
public static var tgtNum : int;

//private static var startTime : float;
//private static var startValue : float;

function Start () {

}

function Update () {

}

public static function AIdummy() {
	UpdatingScript.killNums();
	GV.once = false;
	if(tgtNum <= 1 && GV.Orion.isKOed == false) {UpdatingScript.setNumLocation(GV.OrionLoc);
		GV.Monster.Attack(GV.Monster, GV.Orion, 1);UpdatingScript.callTotalDmg();}
	else if(tgtNum <=2 && GV.Bellatrix.isKOed == false) {UpdatingScript.setNumLocation(GV.BellaLoc);
		GV.Monster.Attack(GV.Monster, GV.Bellatrix, 1);UpdatingScript.callTotalDmg();}
	else if(tgtNum <=3 && GV.Sirius.isKOed == false) {UpdatingScript.setNumLocation(GV.SiriusLoc);
		GV.Monster.Attack(GV.Monster, GV.Sirius, 1);UpdatingScript.callTotalDmg();}
	else {tgtNum = Random.Range(1, 4);}

}

public static function enemyAction() {
	if(GV.turns[0].curAP > 0) {
		tgtNum = Random.Range(1, 4);
		AIdummy();
//This is the coroutine to lerp when an ally is hit. DO NOT TOUCH. it only works like in that exact order...			
		//startTime = Time.time;
  		//startValue = GV.lerpTgt.curHP; 
  		//while (Time.time < startTime + 1) { //1 second
   		// 	GV.lerpTgt.curHP = Mathf.Lerp (startValue, GV.lerpTo, Time.time - startTime); //lerp value goes 0->1
  		//	GV.lerpTgt.cleanup(GV.lerpTgt);
    	//	yield;
  		//}
	}
}