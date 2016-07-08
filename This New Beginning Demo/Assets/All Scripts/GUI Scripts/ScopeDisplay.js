#pragma strict
private var pos : RectTransform;
private var num : float = 0.0;
private var velocity = 0.0f;
private var locPos : Vector3;
public var cam : Camera;

function Start () {
	pos = gameObject.GetComponent(RectTransform);
	locPos = cam.WorldToScreenPoint(GV.Target.loc.position);
	//pos.transform.rotation.z += 1;
}

function Update () {
	locPos = cam.WorldToScreenPoint(GV.Target.loc.position);
	
	pos.transform.position.x = locPos.x;
	pos.transform.position.y = locPos.y;
	if(pos.rotation.z >= 1) {pos.rotation.z = 0; num = 0;}
	num = Time.smoothDeltaTime * 30;
	pos.Rotate(0, 0, num);
}
