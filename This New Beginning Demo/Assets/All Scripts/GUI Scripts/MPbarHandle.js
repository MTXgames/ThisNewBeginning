#pragma strict
import UnityEngine.UI;

private var bar : Slider;

function Start () {
	bar = gameObject.GetComponent(UI.Slider);
	bar.maxValue = MPcalc.getMaxMP();
}

function Update () {

}