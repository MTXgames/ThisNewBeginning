#pragma strict
import UnityEngine.UI;

private var txt : Text;

function Start () {
	txt = gameObject.GetComponent(UI.Text);
	txt.text = MPcalc.curMP + "";
}

function Update () {
	
	txt.text = MPcalc.curMP + "";
}