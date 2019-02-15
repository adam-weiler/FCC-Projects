function convertToRoman(num) { //Converts decimal number into a Roman Numeral.
  const romanNumerals = { //An object containing Roman numerals & number equivalents.
		'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 	}
	let newNum = '';

	console.log("Original number: " + num);
	for (var key in romanNumerals) { //Iterates through each property in the object.
		while (num % romanNumerals[key] < num) { //Runs while the modulus equation results in a value less than num.
			newNum = newNum + key; //The Roman Numeral adds object's current key.
			num = num - romanNumerals[key]; //The num subtracts object's current value.
		}
	}
	console.log("Roman Numeral: " + newNum + "\n");

	return newNum;
}

convertToRoman(2); //Returns 'II'.
convertToRoman(3); //Returns 'III'.
convertToRoman(4); //Returns 'IV'.
convertToRoman(5); //Returns 'V'.
convertToRoman(9); //Returns 'IX'.
convertToRoman(12); //Returns 'XII'.
convertToRoman(16); //Returns 'XVI'.
convertToRoman(29); //Returns 'XXIX'.
convertToRoman(44); //Returns 'XLIV'.
convertToRoman(45); //Returns 'XLV'.
convertToRoman(68); //Returns 'LXVIII'.
convertToRoman(83); //Returns 'LXXXIII'.
convertToRoman(97); //Returns 'XCVII'.
convertToRoman(99); //Returns 'XCIX'.
convertToRoman(400); //Returns 'CD'.
convertToRoman(500); //Returns 'D'.
convertToRoman(501); //Returns 'DI'.
convertToRoman(649); //Returns 'DCXLIX'.
convertToRoman(798); //Returns 'DCCXCVIII'.
convertToRoman(891); //Returns 'DCCCXCI'.
convertToRoman(1000); //Returns 'M'.
convertToRoman(1004); //Returns 'MIV'.
convertToRoman(1006); //Returns 'MVI'.
convertToRoman(1023); //Returns 'MXXIII'.
convertToRoman(2014); //Returns 'MMXIV'.
convertToRoman(3999); //Returns 'MMMCMXCIX'.
