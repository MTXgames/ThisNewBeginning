#pragma strict
import UnityEngine.UI;

var num : int;

private var bar : Slider;


function Start () 
{
	bar = gameObject.GetComponent(UI.Slider);
	bar.maxValue = GV.ally[num].maxAP;
}

function Update () 
{
	bar.value = GV.ally[num].curAP;
}