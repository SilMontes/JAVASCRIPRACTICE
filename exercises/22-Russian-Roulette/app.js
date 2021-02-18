var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};
//console.log(spinChamber())
// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
    if (spinnerPosition == bulletPosition) {
        console.log("You're dead!");
    }
    else{
        console.log("Keep playing!");
    }
}

fireGun(spinChamber);