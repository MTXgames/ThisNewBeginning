#pragma strict
import UnityEngine.UI;


private var img : Image;
private var str : String;

function Start () {
	img = gameObject.GetComponent(UI.Image);
	img.sprite = returnSprite(GV.turns[0]); //GV.turns[num].name + "CurTurnDummy.png";
}

function Update () {

}

function returnSprite(chr : Character) {
	str = chr.name;
	var spr : Sprite;
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
			spr = GV.ctOrion; break;
	}
	return spr;
}