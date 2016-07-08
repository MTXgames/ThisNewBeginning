#pragma strict
import System.Collections.Generic;

//NOTE: TURNS
//-turns is the common turns that is used and is being shown. It is affected by all ailments and KO
//-constTurns (or constant turns) functions differently. This slot runs simultaneously with turns, but it is NOT affected
//by KO or any omission; that way, when an ally is revived or cured of status, the turn slot resumes instead of restarting
//the whole calculation
public static var turns : List.<Character> = new List.<Character>();
public static var constTurns : List.<Character> = new List.<Character>();

public static var OrionAnim : Animator;
public static var BellatrixAnim : Animator;
public static var SiriusAnim : Animator;
public static var AlnitakAnim : Animator;
public static var EnemyAnim : Animator;

public var nOrionAnim : Animator;
public var nBellatrixAnim : Animator;
public var nSiriusAnim : Animator;
public var nAlnitakAnim : Animator;
public var nEnemyAnim : Animator;

//The Target variable is the current target for any commands the player casts (it's where the scope is)
public static var Target : Character; 

public static var Orion : Character;
public static var Bellatrix : Character;
public static var Sirius : Character;
public static var Alnitak : Character;
//public static var Orion : Character = new Character("Orion", 142, 3, 100, 13, 7, 8, 7, 6, 10, 5, 1, OrionAnim);
//public static var Bellatrix : Character = new Character("Bellatrix", 188, 3, 55, 15, 10, 5, 6, 6, 5, 5, 2, BellatrixAnim);
//public static var Sirius : Character = new Character("Sirius", 112, 4, 150, 10, 6, 17, 10, 5, 5, 10, 3, SiriusAnim);
//public static var Alnitak : Character = new Character("Alnitak", 91, 4, 125, 10, 6, 15, 10, 5, 5, 10, 3, AlnitakAnim);
public static var ally : Character[] = new Character[3];
public static var allySize : int = 3;

//This is a temporary placement for enemy classes. They should be declared in seperate programs
public static var Monster : Character;
public static var enemy : Character[] = new Character[1];
public static var enemySize : int = 1;

//This is a very important variable used to display the damage dealt through the number sprites
public static var dmgString : String;
public static var dmgTotal : int;
public static var dmgTotStr : String;
public static var cmdCastedAmt : int;
public static var dmgShow : boolean = false;
public static var once : boolean = false;
public static var actOnce : boolean = false;
public static var OrionLoc : Transform;
public static var BellaLoc : Transform;
public static var SiriusLoc : Transform;
public static var EnemyLoc : Transform;
public var OrionLocal : Transform;
public var BellaLocal : Transform;
public var SiriusLocal : Transform;
public var EnemyLocal : Transform;

//These variables are to display LERPing
public static var lerpFrom : int;
public static var lerpTo : int;
public static var lerpTgt : Character;

//these make it easier to program and access the sprites for the turn slot. change the image through the non-static vars
//ADD MORE FOR THE ENEMY IMAGES LATER
public static var ctOrion : Sprite;
public static var ctBellatrix : Sprite;
public static var ctAlnitak : Sprite;
public static var ctSirius : Sprite;
public static var ctSaiph : Sprite;
public static var ctRigel : Sprite;
public static var ctEnemy : Sprite;
public var curTurnOrion : Sprite;
public var curTurnBellatrix : Sprite;
public var curTurnAlnitak : Sprite;
public var curTurnSirius : Sprite;
public var curTurnSaiph : Sprite;
public var curTurnRigel : Sprite;
public var curTurnEnemy : Sprite;

public static var tOrion : Sprite;
public static var tBellatrix : Sprite;
public static var tAlnitak : Sprite;
public static var tSirius : Sprite;
public static var tSaiph : Sprite;
public static var tRigel : Sprite;
public static var tEnemy : Sprite;
public var TurnOrion : Sprite;
public var TurnBellatrix : Sprite;
public var TurnAlnitak : Sprite;
public var TurnSirius : Sprite;
public var TurnSaiph : Sprite;
public var TurnRigel : Sprite;
public var TurnEnemy : Sprite;

public var newS0 : Sprite;
public var newS1 : Sprite;
public var newS2 : Sprite;
public var newS3 : Sprite;
public var newS4 : Sprite;
public var newS5 : Sprite;
public var newS6 : Sprite;
public var newS7 : Sprite;
public var newS8 : Sprite;
public var newS9 : Sprite;
public var newB : Sprite;

public static var S0 : Sprite;
public static var S1 : Sprite;
public static var S2 : Sprite;
public static var S3 : Sprite;
public static var S4 : Sprite;
public static var S5 : Sprite;
public static var S6 : Sprite;
public static var S7 : Sprite;
public static var S8 : Sprite;
public static var S9 : Sprite;
public static var B : Sprite;


function Awake()
{
	OrionAnim = nOrionAnim;
	BellatrixAnim = nBellatrixAnim;
	SiriusAnim = nSiriusAnim;
	AlnitakAnim = nAlnitakAnim;
	
	EnemyAnim = nEnemyAnim;
	
	Orion = new Character("Orion", 142, 3, 100, 13, 7, 8, 7, 6, 10, 5, 1, OrionAnim);
	Bellatrix = new Character("Bellatrix", 188, 3, 55, 15, 10, 5, 6, 6, 5, 5, 2, BellatrixAnim);
	Sirius = new Character("Sirius", 112, 4, 150, 10, 6, 17, 10, 5, 5, 10, 3, SiriusAnim);
	Alnitak = new Character("Alnitak", 91, 4, 125, 10, 6, 15, 10, 5, 5, 10, 3, AlnitakAnim);
	
	Monster = new Character("Monster", 150, 2, 100, 25, 1, 5, 1, 6, 5, 5, 4, EnemyAnim);
	
	Target = Monster;

	dmgString = "0";
	dmgTotStr = "";
	cmdCastedAmt = 0;
	ally[0] = Orion;
	ally[1] = Bellatrix;
	ally[2] = Sirius;
	enemy[0] = Monster;
	
	//Monster.APPT = 1;
	OrionLoc = OrionLocal;
	BellaLoc = BellaLocal;
	SiriusLoc = SiriusLocal;
	EnemyLoc = EnemyLocal;
	
	Orion.loc = OrionLoc;
	Bellatrix.loc = BellaLoc;
	Sirius.loc = SiriusLoc;
	Monster.loc = EnemyLoc;
	
	lerpTgt = enemy[0];
	lerpFrom = enemy[0].maxHP;
	lerpTo = enemy[0].maxHP;
	
	ctOrion = curTurnOrion;
	ctBellatrix = curTurnBellatrix;
	ctAlnitak = curTurnAlnitak;
	ctSirius = curTurnSirius;
	ctSaiph = curTurnSaiph;
	ctRigel = curTurnRigel;
	ctEnemy = curTurnEnemy;
	
	tOrion = TurnOrion;
	tBellatrix = TurnBellatrix;
	tAlnitak = TurnAlnitak;
	tSirius = TurnSirius;
	tSaiph = TurnSaiph;
	tRigel = TurnRigel;
	tEnemy = TurnEnemy;
	
	S0 = newS0;
	S1 = newS1;
	S2 = newS2;
	S3 = newS3;
	S4 = newS4;
	S5 = newS5;
	S6 = newS6;
	S7 = newS7;
	S8 = newS8;
	S9 = newS9;
}

function Start () 
{
	
}

function Update () 
{
}