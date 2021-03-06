module.exports = function toReadable (number) {
    const one = "one", two = "two", three = "three", four = "four", 
    five = "five", six = "six", seven = "seven", eight = "eight", nine = "nine",
    ten = "ten", eleven = "eleven", twelve = "twelve", thirteen = "thirteen",
    fourteen = "fourteen", fifteen = "fifteen", sixteen = "sixteen", seventeen = "seventeen",
    eighteen = "eighteen", nineteen = "nineteen", twenty = "twenty", thirty = "thirty",
    forty = "forty", fifty = "fifty", sixty = "sixty", seventy = "seventy", eighty = "eighty", ninety = "ninety",
    hundred = "hundred";
    let s = String(number).split(""), result;
    let n = s.length;
    if (n == 1) {
        if (s[0] == "0") return result = "zero";
        if (s[0] == "1") return result = one; 
        if (s[0] == "2") return result = two;
        if (s[0] == "3") return result = three;
        if (s[0] == "4") return result = four;
        if (s[0] == "5") return result = five;
        if (s[0] == "6") return result = six;
        if (s[0] == "7") return result = seven;
        if (s[0] == "8") return result = eight;
        if (s[0] == "9") return result = nine;
    }
    if (n == 2) {
        if (s[0] == "2") result = twenty;
        if (s[0] == "3") result = thirty;
        if (s[0] == "4") result = forty;
        if (s[0] == "5") result = fifty;
        if (s[0] == "6") result = sixty;
        if (s[0] == "7") result = seventy;
        if (s[0] == "8") result = eighty;
        if (s[0] == "9") result = ninety;

        if (s[1] == "0" && s[0] == "1") return result = ten;
        if (s[1] == "1" && s[0] == "1") return result = eleven;
        if (s[1] == "2" && s[0] == "1") return result = twelve;
        if (s[1] == "3" && s[0] == "1") return result = thirteen; 
        if (s[1] == "4" && s[0] == "1") return result = fourteen;
        if (s[1] == "5" && s[0] == "1") return result = fifteen;
        if (s[1] == "6" && s[0] == "1") return result = sixteen;
        if (s[1] == "7" && s[0] == "1") return result = seventeen;
        if (s[1] == "8" && s[0] == "1") return result = eighteen;
        if (s[1] == "9" && s[0] == "1") return result = nineteen;

        if (s[1] == "1") { result += " "; result += one; }
        if (s[1] == "2") { result += " "; result += two; }
        if (s[1] == "3") { result += " "; result += three; }
        if (s[1] == "4") { result += " "; result += four; }
        if (s[1] == "5") { result += " "; result += five; }
        if (s[1] == "6") { result += " "; result += six; }
        if (s[1] == "7") { result += " "; result += seven; }
        if (s[1] == "8") { result += " "; result += eight; }
        if (s[1] == "9") { result += " "; result += nine; }
    }
    if (n == 3) {
        if (s[0] == "1") result = one + " " + hundred; 
        if (s[0] == "2") result = two + " " + hundred;
        if (s[0] == "3") result = three + " " + hundred;
        if (s[0] == "4") result = four + " " + hundred;
        if (s[0] == "5") result = five + " " + hundred;
        if (s[0] == "6") result = six + " " + hundred;
        if (s[0] == "7") result = seven + " " + hundred;
        if (s[0] == "8") result = eight + " " + hundred;
        if (s[0] == "9") result = nine + " " + hundred;

        if (s[1] == "1" && s[2] == "0") return result += " " + ten;
        if (s[1] == "1" && s[2] == "1") return result += " " + eleven;
        if (s[1] == "1" && s[2] == "2") return result += " " + twelve;
        if (s[1] == "1" && s[2] == "3") return result += " " + thirteen; 
        if (s[1] == "1" && s[2] == "4") return result += " " + fourteen;
        if (s[1] == "1" && s[2] == "5") return result += " " + fifteen;
        if (s[1] == "1" && s[2] == "6") return result += " " + sixteen;
        if (s[1] == "1" && s[2] == "7") return result += " " + seventeen;
        if (s[1] == "1" && s[2] == "8") return result += " " + eighteen;
        if (s[1] == "1" && s[2] == "9") return result += " " + nineteen;

        if (s[1] == "2") result += " " + twenty;
        if (s[1] == "3") result += " " + thirty;
        if (s[1] == "4") result += " " + forty;
        if (s[1] == "5") result += " " + fifty;
        if (s[1] == "6") result += " " + sixty;
        if (s[1] == "7") result += " " + seventy;
        if (s[1] == "8") result += " " + eighty;
        if (s[1] == "9") result += " " + ninety;

        if (s[2] == "1") return result += " " + one; 
        if (s[2] == "2") return result += " " + two;
        if (s[2] == "3") return result += " " + three;
        if (s[2] == "4") return result += " " + four;
        if (s[2] == "5") return result += " " + five;
        if (s[2] == "6") return result += " " + six;
        if (s[2] == "7") return result += " " + seven;
        if (s[2] == "8") return result += " " + eight;
        if (s[2] == "9") return result += " " + nine;
    }
    return result;
}
