#pragma strict
import UnityEngine.UI;

private var spr : SpriteRenderer;
private var img : Image;
public var newS0 : Sprite;
public var newS1 : Sprite;
public var newS2 : Sprite;
public var newS3 : Sprite;
public var newS4 : Sprite;
public var newS5 : Sprite;
public var newS6 : Sprite;
public var newS7 : Sprite;
public var newS8 : Sprite;
public var newS9 : Sprite;
public var newB : Sprite;
public var val : int;
public var isSprite : boolean;


function Start () {
	if(isSprite) {
		spr = gameObject.GetComponent(SpriteRenderer);
	}
	else {
		img = gameObject.GetComponent(Image);
	}
}

function Update () {
	//if (isSprite) {spriteRender();}
	//else if(!(isSprite) && GV.dmgTotStr != ""){imageRender();}
}

function LateUpdate() {
	
}
function spriteRender() {
	if(GV.dmgString.Length >= 5) {
		if(val == 0) {castSprite(4);}
		else if(val == 1) {castSprite(3);}
		else if(val == 2) {castSprite(2);}
		else if(val == 3) {castSprite(1);}
		else if(val == 4) {castSprite(0);}
	}
	else if(GV.dmgString.Length >= 4) {
		if(val == 0) {castSprite(3);}
		else if(val == 1) {castSprite(2);}
		else if(val == 2) {castSprite(1);}
		else if(val == 3) {castSprite(0);}
		else if(val == 4) {castSprite(10);}
	}
	else if(GV.dmgString.Length >= 3) {
		if(val == 0) {castSprite(2);}
		else if(val == 1) {castSprite(1);}
		else if(val == 2) {castSprite(0);}
		else if(val == 3) {castSprite(10);}
		else if(val == 4) {castSprite(10);}
	}
	else if(GV.dmgString.Length >= 2) {
		if(val == 0) {castSprite(1);}
		else if(val == 1) {castSprite(0);}
		else if(val == 2) {castSprite(10);}
		else if(val == 3) {castSprite(10);}
		else if(val == 4) {castSprite(10);}
	}
	else {
		if(val == 0) {castSprite(0);}
		else if(val == 1) {castSprite(10);}
		else if(val == 2) {castSprite(10);}
		else if(val == 3) {castSprite(10);}
		else if(val == 4) {castSprite(10);}
	}
}

function imageRender() {
	if(GV.dmgTotStr.Length >= 5) {
		if(val == 0) {castImage(4);}
		else if(val == 1) {castImage(3);}
		else if(val == 2) {castImage(2);}
		else if(val == 3) {castImage(1);}
		else if(val == 4) {castImage(0);}
	}
	else if(GV.dmgTotStr.Length >= 4) {
		if(val == 0) {castImage(3);}
		else if(val == 1) {castImage(2);}
		else if(val == 2) {castImage(1);}
		else if(val == 3) {castImage(0);}
		else if(val == 4) {castImage(10);}
	}
	else if(GV.dmgTotStr.Length >= 3) {
		if(val == 0) {castImage(2);}
		else if(val == 1) {castImage(1);}
		else if(val == 2) {castImage(0);}
		else if(val == 3) {castImage(10);}
		else if(val == 4) {castImage(10);}
	}
	else if(GV.dmgTotStr.Length >= 2) {
		if(val == 0) {castImage(1);}
		else if(val == 1) {castImage(0);}
		else if(val == 2) {castImage(10);}
		else if(val == 3) {castImage(10);}
		else if(val == 4) {castImage(10);}
	}
	else {
		if(val == 0) {castImage(0);}
		else if(val == 1) {castImage(10);}
		else if(val == 2) {castImage(10);}
		else if(val == 3) {castImage(10);}
		else if(val == 4) {castImage(10);}
	}
}

function castSprite(i : int) {
	if(i == 10) {spr.sprite = newB;}
	else if(GV.dmgString[i] == "0") {spr.sprite = newS0;}
	else if(GV.dmgString[i] == "1") {spr.sprite = newS1;}
	else if(GV.dmgString[i] == "2") {spr.sprite = newS2;}
	else if(GV.dmgString[i] == "3") {spr.sprite = newS3;}
	else if(GV.dmgString[i] == "4") {spr.sprite = newS4;}
	else if(GV.dmgString[i] == "5") {spr.sprite = newS5;}
	else if(GV.dmgString[i] == "6") {spr.sprite = newS6;}
	else if(GV.dmgString[i] == "7") {spr.sprite = newS7;}
	else if(GV.dmgString[i] == "8") {spr.sprite = newS8;}
	else if(GV.dmgString[i] == "9") {spr.sprite = newS9;}
}

function castImage(i : int) {
	if(i == 10) {img.sprite = newB;}
	else if(GV.dmgTotStr[i] == "0") {img.sprite = newS0;}
	else if(GV.dmgTotStr[i] == "1") {img.sprite = newS1;}
	else if(GV.dmgTotStr[i] == "2") {img.sprite = newS2;}
	else if(GV.dmgTotStr[i] == "3") {img.sprite = newS3;}
	else if(GV.dmgTotStr[i] == "4") {img.sprite = newS4;}
	else if(GV.dmgTotStr[i] == "5") {img.sprite = newS5;}
	else if(GV.dmgTotStr[i] == "6") {img.sprite = newS6;}
	else if(GV.dmgTotStr[i] == "7") {img.sprite = newS7;}
	else if(GV.dmgTotStr[i] == "8") {img.sprite = newS8;}
	else if(GV.dmgTotStr[i] == "9") {img.sprite = newS9;}
}

