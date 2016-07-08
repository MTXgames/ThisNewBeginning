#pragma strict
import System;
//import UnityEngine.UI;
//import UnityEngine.Rendering;
//import UnityEngine.Sprites;
//import UnityEngine;

public var curNum1 : Animator;
public var curNum2 : Animator;
public var curNum3 : Animator;
public var curNum4 : Animator;
public var curNum5 : Animator;

function Start () {
	
}

function Update () {
	
}


function numRender () {
		curNum1.SetBool("firstNum", true);
		if(GV.dmgString.Length >= 5) {
			curNum5.SetBool("fifthNum", true);
		}
		if(GV.dmgString.Length >= 4) {
			curNum4.SetBool("fourthNum", true);
		}
		if(GV.dmgString.Length >= 3) {
			curNum3.SetBool("thirdNum", true);
		}
		if(GV.dmgString.Length >= 2) {
			curNum2.SetBool("secNum", true);
		}
}