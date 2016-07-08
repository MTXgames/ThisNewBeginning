#pragma strict

public static var firstCmd : Animator;
public static var secondCmd : Animator;
public static var thirdCmd : Animator;

public static var releaseCmd : Animator;
public static var txt1 : Text;
public static var txt2 : Text;
public static var txt3 : Text;
public static var val : String = CmdClicked.getCmdText();

function Start () 
{

}

function Update () 
{

}

public static function commandCasted() { //need to program receiving different text commands
	if(GV.turns[0].curAP > -1) {
		if(GV.cmdCastedAmt <= 0) {
			txt1.text = CmdClicked.getCmdText();
			firstCmd.SetBool("cmdCasted", true);
			firstCmd.SetBool("turnEnded", false);
		}
		if(GV.cmdCastedAmt >= 1) {
			//print("please work");
			txt2.text = CmdClicked.getCmdText();
			secondCmd.SetBool("cmdCasted", true);
			secondCmd.SetBool("turnEnded", false);
		}
		GV.cmdCastedAmt ++;
	}
}