#pragma strict

public static var anim : Animator;
public static var once : boolean = false;

function Start () 
{
	anim = gameObject.GetComponent(Animator);
}

function Update () 
{
	if(GV.dmgShow == true && !once) {
		anim.SetTrigger("Scaling");
		once = true;
	}
}