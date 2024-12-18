function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let S1=s1.toUpperCase();
	let S2=s2.toUpperCase();

	let res = s1.indexOf(s2);
	if(res>=0)
		return res;
	else
		return -1
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
