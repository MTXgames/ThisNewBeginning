#pragma strict
public var btn1 : Animator;
private var noICV : int = 0;

function Start () {
	for(var i = 0; i < GV.allySize; i++) {
		GV.ally[i].ICVcalc();
		GV.ally[i].tSpeedCalc();
		GV.ally[i].countCalc();
	}
	for(i = 0; i < GV.enemySize; i++) {
		GV.enemy[i].ICVcalc();
		GV.enemy[i].tSpeedCalc();
		GV.enemy[i].countCalc();
	}
	
	initTurnCounter(GV.allySize, GV.enemySize);
	if(GV.turns[0] == GV.ally[0] || GV.turns[0] == GV.ally[1] || GV.turns[0] == GV.ally[2]) {
		//btn1.SetBool("AllyTurn", true);
	}
}

function Update () {
}

//For a normal battle, allies' turns are prioritized. 
//When ambushed, enemies' turns are prioritized (yet to be programmed)
function initTurnCounter(allyS : int, enemS : int) {
	while(noICV < allyS + enemS) { //this subtracts everyone's ICV until it's 0, and then adds it into the turn slot
		for(var i = 0; i < allyS; i++) { 
			if(GV.ally[i].ICV > 0){GV.ally[i].ICV -= 1;}
			else {
				noICV ++;
				GV.turns.Add(GV.ally[i]);
				GV.constTurns.Add(GV.ally[i]);
			}
		}
		for(i = 0; i < enemS; i++) { 
			if(GV.enemy[i].ICV > 0){GV.enemy[i].ICV -= 1;}
			else {
				noICV ++;
				GV.turns.Add(GV.enemy[i]);
				GV.constTurns.Add(GV.enemy[i]);
			}
		}
	}
	while(GV.turns.Count < 16) {
		for(i = 0; i < allyS; i++) {
			if(GV.ally[i].counter <= 0) {
				GV.turns.Add(GV.ally[i]);
				GV.constTurns.Add(GV.ally[i]);
				GV.ally[i].countCalc();
				i = allyS;
			}
			else if(GV.ally[i].counter > 0) {GV.ally[i].counter -= 1;}
		}
		for(i = 0; i < enemS; i++) {
			if(GV.enemy[i].counter <= 0) {
				GV.turns.Add(GV.enemy[i]);
				GV.constTurns.Add(GV.enemy[i]);
				GV.enemy[i].countCalc();
				i = enemS;
			}
			else if(GV.enemy[i].counter > 0) {GV.enemy[i].counter -= 1;}
		}
	}
	GV.turns[0].curAP += GV.turns[0].APPT;
}

static function updateTurns(allyS : int, enemS : int) {
	while(GV.turns.Count < 16) {
		for(var i = 0; i < allyS; i++) {
			if(GV.ally[i].counter <= 0) {
				GV.turns.Add(GV.ally[i]);
				GV.constTurns.Add(GV.ally[i]);
				GV.ally[i].countCalc();
				i = allyS;
			}
			else if(GV.ally[i].counter > 0) {GV.ally[i].counter -= 1;}
		}
		for(i = 0; i < enemS; i++) {
			if(GV.enemy[i].counter <= 0) {
				GV.turns.Add(GV.enemy[i]);
				GV.constTurns.Add(GV.enemy[i]);
				GV.enemy[i].countCalc();
				i = enemS;
			}
			else if(GV.enemy[i].counter > 0) {GV.enemy[i].counter -= 1;}
		}
	}
}

static function KOremover(allyS : int, enemS : int){
	for(var i = 0; i < allyS; i++) {
		if(GV.ally[i].isKOed) {
			for(var j = 0; j < GV.turns.Count; j++) {
				if(GV.ally[i] == GV.turns[j]) {
					GV.turns.RemoveAt(j);
				}
			}
		}
	}
	for(i = 0; i < enemS; i++) {
		if(GV.enemy[i].isKOed) {
			for(j = 0; j < GV.turns.Count; j++) {
				if(GV.enemy[i] == GV.turns[j]) {
					GV.turns.RemoveAt(j);
				}
			}
		}
	}
}