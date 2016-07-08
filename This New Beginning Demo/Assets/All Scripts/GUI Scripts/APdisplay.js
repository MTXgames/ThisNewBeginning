#pragma strict
import UnityEngine.UI;

var num : int;

private var txt : Text;
private var val : String;


function Start () 
{
	txt = gameObject.GetComponent(UI.Text);
	val = GV.ally[num].curAP + "";
	txt.text = val;
}

function Update () 
{
	val = GV.ally[num].curAP + "";
	txt.text = val;
}