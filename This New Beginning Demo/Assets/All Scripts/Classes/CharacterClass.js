#pragma strict

public class Character extends Abilities
{
	public var name : String;
	public var level : int;
	public var curHP : int;
	public var maxHP : int;
	public var curAP : int;
	public var maxAP : int;
	public var MP : int;
	public var APPT : int; //stands for Ability Points (AP) per Turn
	public var pos : int; //this is the placement in the battlefield. 1 = 1st ally. 4 = 1st enemy regardless of ally numbers.
	
	private var baseStr : int;
	private var baseDef : int;
	private var baseTht : int;
	private var baseWill : int;
	private var baseSpd : int;
	private var baseAcc : int;
	private var baseEva : int;
	
	public var strength : int;
	public var defense : int;
	public var thought : int;
	public var will : int;
	public var speed : int;
	public var accuracy : int;
	public var evasion : int;
	
	public var ICV : int;
	private var tickSpeed : int;
	public var counter : int;
	public var speedStatus : float; // 1.0 = standard value(no buff/debuff); .5 = haste buff;  1.5 = slow debuff
	
	public var activeCmds : int; //This special variable is how many commands the player currently has equipped
	
	//The rest of these variables below are "checker" variables to check for buffs, ailments, etc.
	//---------------------------------------------------------------------------------------------
	public var isKOed : boolean; 
	
	//Animation related variables go here
	public var anim : Animator;
	public var loc : Transform; //This variable is the location of the character, which is manually inputed
	
	public function Character(nm : String, hp : int, ap : int, mp : int, st : int, de : int, th : int, wi : int, spd : int, acc : int, eva : int, p : int, an : Animator)
	{
		super();
		name = nm;
		level = 1;
		maxHP = hp;
		maxAP = ap;
		MP = mp;
		curHP = maxHP;
		curAP = 0;
		APPT = 2;
		pos = p;
		
		baseStr = st;
		baseDef = de;
		baseTht = th;
		baseWill = wi;
		baseSpd = spd;
		baseAcc = acc;
		baseEva = eva;
		
		strength = st;
		defense = de;
		thought = th;
		will = wi;
		speed = spd;
		accuracy = acc;
		evasion = eva;
		
		anim = an;
		
		speedStatus = 1.0;
		
		activeCmds = 1;
		
		//all checker variables will be false
		isKOed = false;
		
	}
	
	public function ICVcalc() //call this every battle to update it 
	{
		ICV = 201 - speed;
		//ICV = 201;
		//for(var i = 0; i < speed; i++){ICV -= 1;}
	}
	
	public function tSpeedCalc()
	{
		tickSpeed = 30;
		if(speed < 7)
		{
			for(var i = 0; i < speed; i++){tickSpeed = tickSpeed - 2;}
		}
		else if(speed < 10){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 1;}
		else if(speed < 12){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 2;}
		else if(speed < 15){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 3;}
		else if(speed < 17){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 4;}
		else if(speed < 19){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 5;}
		else if(speed < 23){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 6;}
		else if(speed < 29){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 7;}
		else if(speed < 35){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 8;}
		else if(speed < 44){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 9;}
		else if(speed < 62){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 10;}
		else if(speed < 98){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 11;}
		else if(speed < 137){for(i = 0; i < 7; i++){tickSpeed = tickSpeed - 2;}tickSpeed = tickSpeed - 12;}
		else
		{
			for(i = 0; i < 7; i++)
				{
					tickSpeed = tickSpeed - 2;
				}
			tickSpeed = tickSpeed - 13;
		}
		
		//return tickSpeed;
	}
	
	public function countCalc()
	{
		counter = tickSpeed * 3 * speedStatus;
	}

}