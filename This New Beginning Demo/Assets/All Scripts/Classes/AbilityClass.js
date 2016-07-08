#pragma strict
//these noted formulas are the old formulas to calculate basic attack damage. 
//old is based Final Fantasy VII's ; new is based upon Final Fantasy XII's
//baseDmg = caster.strength + ((caster.strength + caster.level) / 4) * ((caster.strength * caster.level) / 4);
//damage = ((power * (512 - target.defense) * baseDmg) / (16 * 512));
//trueDamage = Random.Range(damage / 1.15, damage * 1.2);



public class Abilities
{
	private var power : int; //1 = standard dmg. ; .5 = half dmg. ; 2 = double damage/2nd tier and so forth...
	private var baseDmg : int;
	private var damage : int;
	private var trueDamage : int;
	
	private var startTime : float;
	private var startValue : float;
	
	public function Abilities() {	
	}
	
	public static function cleanup(tgt : Character) {
		if(tgt.curHP < 0) {tgt.curHP = 0;}
		if(tgt.curHP == 0) {tgt.isKOed = true;}
	}
	private function dmgCleanup() {
		if(trueDamage < 1) {trueDamage = 1;}
		if(trueDamage > 99999) {trueDamage = 99999;}
	}
	
	public function Attack(caster : Character, target : Character, pwr : int) 
	{
		power = pwr;
		baseDmg = ((caster.strength + (caster.level / 2.5)) * Random.Range(.9, 1.1) - target.defense) * power;
		damage = baseDmg * (1 + caster.strength * (caster.level + caster.strength) / 256);
		trueDamage = damage; //Random.Range(damage, damage * 1.05);
		dmgCleanup();
		//GV.dmgShow = true;
		GV.dmgString = trueDamage + "";
		GV.dmgTotal += trueDamage;
		GV.dmgTotStr = GV.dmgTotal + "";
		UpdatingScript.callTotalDmg();
		//target.curHP = Mathf.Lerp(target.curHP, target.curHP - trueDamage, 3);
		//target.curHP -= trueDamage;
		target.curHP -= trueDamage;
		//GV.lerpFrom = target.curHP;
		//GV.lerpTo = target.curHP - trueDamage;
		//GV.lerpTgt = target;
		UpdatingScript.callDmgDisplay();
		
		//GV.lerpTgt.curHP = Mathf.Lerp(GV.lerpTgt.curHP, GV.lerpTo, 0.075);
		//GV.lerpTgt.cleanup(GV.lerpTgt);
		
		cleanup(target);
		caster.curAP --;
	}
}

function Start () {

}
