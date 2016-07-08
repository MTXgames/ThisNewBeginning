#pragma strict
import UnityEngine.UI; 

private var KOcount : int = 0;
private var speed : int = 1;

public var totVprefab : UI.Image;
public var varPrefab : UI.Image;
public static var totPrefab : UI.Image;
public static var dmgPrefab : UI.Image;
private static var numInstance : UI.Image[] = new UI.Image[10];
private static var dmgInstance : UI.Image[] = new UI.Image[5];
public static var pos : Vector3;
public static var pos2 : Vector3;
public var originalX : float;
public static var originXstat : float;
public static var originalX2 : float;
public var originalY : float;
public var x : float;
public static var xS : float;
public var y : float;
public static var yS : float;
public static var x2 : float;
public static var y2 : float;

public var canvas : Transform;
public static var statCanvas : Transform;
public var statCam : Camera;
//public var statTarget : Transform;
public static var cam : Camera;
public static var target : Transform;
public var totStatImg : GameObject;
public static var totalImg : GameObject;

public var scope : RectTransform;
public var scopeObj : GameObject;



public var curTurn : Animator;
private var leng : int;
private var delay : float = 1.0;

function Start () {
	//Time.timeScale = 1.2;
	//callTotalDmg();
	statCanvas = canvas;
	dmgPrefab = varPrefab;
	totPrefab = totVprefab;
	cam = statCam;
	totalImg = totStatImg;
	//target = statTarget;
	
	originXstat = originalX;
	xS = x;
	yS = y;
	
	
}

function Update () {
	GameOverCheck();
	WinCheck();
	x2 = 500;
	y2 = -100;
	if(Input.GetKeyDown("1")) {
		CmdClicked.takeAction();
	}
	if(GV.turns[0] == GV.Monster) {
		DummyAI.enemyAction();
	}
	
	if(GV.turns[0] == GV.enemy[0]) {
		scopeObj.SetActive(false);
	}
	else {
		scopeObj.SetActive(true);
	}
	
}

function LateUpdate() { //all the things that check for the end of the turn and such thereafter go here
	leng = GV.dmgString.Length;
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
			killNums();
			//canAnimate.anim.SetBool("dmgShow", false);
			GV.dmgTotal = 0;
			GV.dmgTotStr = "";
			
			//NOTE: make the animations for the buttons
			GV.cmdCastedAmt = 0;
			delay = 1.0;
		}
	}
}

function GameOverCheck() {
	for(var i = 0; i < GV.allySize; i++) {
		if(GV.ally[i].isKOed) {KOcount ++;}
	}
	if(KOcount >= GV.allySize) {
		print("GAME FUCKING OVER");
		Application.Quit();
		UnityEditor.EditorApplication.isPlaying = false;
	}
	KOcount = 0;
}

function WinCheck() {
	for(var i = 0; i < GV.enemySize; i++) {
		if(GV.enemy[i].isKOed) {KOcount ++;}
	}
	if(KOcount >= GV.enemySize) {
		print("YOU FUCKING WON");
		Application.Quit();
		UnityEditor.EditorApplication.isPlaying = false;
	}
	KOcount = 0;
}

static function callTotalDmg() {
	totalImg.SetActive(true);
	pos = Vector3(xS, yS, 0); 
	if(GV.once == false){
		for(var i = 0; i < GV.dmgTotStr.Length; i++) {
			numInstance[i] = Instantiate(totPrefab, pos, Quaternion.identity);
			numInstance[i].transform.SetParent(statCanvas, false);
			//these if elses change the image to match the proper number (MAKING IT A FUNCTION WILL NOT WORK)
			if(GV.dmgTotStr[i] == "0"){numInstance[i].sprite = GV.S0;}
			else if(GV.dmgTotStr[i] == "1"){numInstance[i].sprite = GV.S1;}
			else if(GV.dmgTotStr[i] == "2"){numInstance[i].sprite = GV.S2;}
			else if(GV.dmgTotStr[i] == "3"){numInstance[i].sprite = GV.S3;}
			else if(GV.dmgTotStr[i] == "4"){numInstance[i].sprite = GV.S4;}
			else if(GV.dmgTotStr[i] == "5"){numInstance[i].sprite = GV.S5;}
			else if(GV.dmgTotStr[i] == "6"){numInstance[i].sprite = GV.S6;}
			else if(GV.dmgTotStr[i] == "7"){numInstance[i].sprite = GV.S7;}
			else if(GV.dmgTotStr[i] == "8"){numInstance[i].sprite = GV.S8;}
			else if(GV.dmgTotStr[i] == "9"){numInstance[i].sprite = GV.S9;}
			xS += 45;
			pos = Vector3(xS, yS, 0);
		}
		GV.once = true;
		xS = originXstat; //x -= 90 * (GV.dmgString.Length - 1);
	}
}

static function callDmgDisplay() {
	//pos2 = Vector3(x2, y2, 0); 
	pos2 = cam.WorldToScreenPoint(target.position);
	x2 = 0 + Random.Range(pos2.x / 1.05, pos2.x * 1.05);
	y2 = -1 * Random.Range(pos2.y / 1.05, pos2.y * 1.05) - 50;
	pos2 = Vector3(x2, y2, 0); 
	for(var i = 0; i < GV.dmgString.Length; i++) {
		dmgInstance[i] = Instantiate(dmgPrefab, pos2, Quaternion.identity);
		dmgInstance[i].transform.SetParent(statCanvas, false);
		//these if elses change the image to match the proper number (MAKING IT A FUNCTION WILL NOT WORK)
		if(GV.dmgString[i] == "0"){dmgInstance[i].sprite = GV.S0;}
		else if(GV.dmgString[i] == "1"){dmgInstance[i].sprite = GV.S1;}
		else if(GV.dmgString[i] == "2"){dmgInstance[i].sprite = GV.S2;}
		else if(GV.dmgString[i] == "3"){dmgInstance[i].sprite = GV.S3;}
		else if(GV.dmgString[i] == "4"){dmgInstance[i].sprite = GV.S4;}
		else if(GV.dmgString[i] == "5"){dmgInstance[i].sprite = GV.S5;}
		else if(GV.dmgString[i] == "6"){dmgInstance[i].sprite = GV.S6;}
		else if(GV.dmgString[i] == "7"){dmgInstance[i].sprite = GV.S7;}
		else if(GV.dmgString[i] == "8"){dmgInstance[i].sprite = GV.S8;}
		else if(GV.dmgString[i] == "9"){dmgInstance[i].sprite = GV.S9;}
		Destroy(dmgInstance[i], .95);
		x2 += 22;
		pos2 = Vector3(x2, y2, 0);
	}
	//for(i = 0; i < GV.dmgString.Length; i++) {
	//	Destroy(dmgInstance[i], 1);
	//}
	x2 = originalX2; //x -= 90 * (GV.dmgString.Length - 1);
}

static function killNums() {
	for(var i = 0; i < numInstance.Length; i++){Destroy(numInstance[i]);}
	totalImg.SetActive(false);
}

static function setNumLocation(tgt : Transform) {
	target = tgt;
}