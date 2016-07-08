#pragma strict
import UnityEngine.UI;

public var num : int;

private var img : Image;
private var str : String;

function Start () {
	img = gameObject.GetComponent(UI.Image);
	//img.sprite = returnSprite(GV.turns[num]); //GV.turns[num].name + "CurTurnDummy.png";
}

function Update () {
	img.sprite = returnSprite(GV.turns[num]);
}

function returnSprite(chr : Character) {
	str = chr.name;
	var spr : Sprite;
	if(num == 0) {
		switch (str) {
			case "Orion":
				spr = GV.ctOrion; break;
			case "Bellatrix":
				spr = GV.ctBellatrix; break;
			case "Alnitak":
				spr = GV.ctAlnitak; break;
			case "Sirius":
				spr = GV.ctSirius; break;
			case "Saiph":
				spr = GV.ctSaiph; break;
			case "Rigel":
				spr = GV.ctRigel; break;
			default:
				spr = GV.ctEnemy; break;
		}
		return spr;
	}
	else {
		switch (str) {
			case "Orion":
				spr = GV.tOrion; break;
			case "Bellatrix":
				spr = GV.tBellatrix; break;
			case "Alnitak":
				spr = GV.tAlnitak; break;
			case "Sirius":
				spr = GV.tSirius; break;
			case "Saiph":
				spr = GV.tSaiph; break;
			case "Rigel":
				spr = GV.tRigel; break;
			default:
				spr = GV.tEnemy; break;
		}
		return spr;
	}
}