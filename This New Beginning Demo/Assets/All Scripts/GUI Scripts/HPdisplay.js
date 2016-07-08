#pragma strict
import UnityEngine.UI;

var num : int;
//BIG NOTE: color is 0-1 not 1-255. check the Resources bookmarks for the online calculator
private var red : Color;
private var yellow : Color;
private var black : Color;

private var txt : Text;
private var val : String;
private var diff : float;


function Start () 
{
	txt = gameObject.GetComponent(UI.Text);
	val = GV.ally[num].curHP + "";
	txt.text = val;
	diff = GV.ally[num].curHP * 1.0 / GV.ally[num].maxHP * 1.0;
	
	red = new Color(0.80784, 0.17255, 0.17255, 1);
	yellow = new Color(0.74902, 0.52157, 0.19608, 1);
	black = new Color(0, 0, 0);
}

function Update () 
{
	val = GV.ally[num].curHP + "";
	txt.text = val;
	
	diff = GV.ally[num].curHP * 1.0 / GV.ally[num].maxHP * 1.0;
	if(GV.ally[num].curHP == 0) {
		txt.color = red;
	}
	else if(diff <= 0.33) {
		txt.color = yellow;
	}
	else {txt.color = black;}
}