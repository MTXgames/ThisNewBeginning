#pragma strict
import UnityEngine.UI;

private var spr : SpriteRenderer;
private var val : float;

function Start () {
	spr = gameObject.GetComponent(SpriteRenderer);
	val = GV.Monster.curHP / GV.Monster.maxHP;
}

function Update () {
	//spr.renderer.bounds.size.x = GV.Monster.curHP / GV.Monster.maxHP;
	if(GV.Monster.curHP <= 0) {GV.Monster.curHP = 0;}
	val = (GV.Monster.curHP * 1.0) / (GV.Monster.maxHP * 1.0);
	spr.transform.localScale.x = val;
}