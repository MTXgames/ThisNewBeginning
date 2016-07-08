#pragma strict
import UnityEngine.UI;

var num : int;

private var bar : Slider;

function Start () 
{
	bar = gameObject.GetComponent(UI.Slider);
	bar.maxValue = GV.ally[num].maxHP;
}

function Update () 
{
	bar.value = GV.ally[num].curHP;
	//bar.transform.position.x = 90.2;
}