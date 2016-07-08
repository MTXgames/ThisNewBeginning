#pragma strict
private var txt : Text;
private var val : String;

function Start () {
	txt = gameObject.GetComponent(UI.Text);
	val = GV.Monster.curHP + "";
	txt.text = val;
}

function Update () {
	val = GV.Monster.curHP + "";
	txt.text = val;
}