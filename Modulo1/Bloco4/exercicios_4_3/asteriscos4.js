let n = 5;
let symbol = '*';
let lines = '';
let midPyramid = (n + 1) / 2;
let leftPyramid = midPyramid;
let rightPyramid = midPyramid;

for (let lineIndex = 0; lineIndex <= midPyramid; lineIndex += 1) {
    for (let columnsindex = 1; columnsindex <= n; columnsindex += 1) {
        if (columnsindex < rightPyramid && columnsindex > leftPyramid) {
            lines += symbol;
        } else {
            lines += ' ';
        }
    }
    console.log(lines);
    lines = '';
    rightPyramid += 1;
    leftPyramid -= 1;

}