function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let S1=s1.toLowerCase();
	let S2=s2.toLowerCase();

	let res = S1.indexOf(S2);
	return res

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
