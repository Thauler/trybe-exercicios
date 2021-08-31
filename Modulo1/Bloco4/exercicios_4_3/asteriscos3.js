let n = 4;
let symbol = '*';
let lines = '';
let columns = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnsindex = 0; columnsindex <= n; columnsindex += 1) {
        if (columnsindex < columns) {
            lines += ' ';
        } else {
            lines += symbol;
        }
    }
    console.log(lines);
    lines = '';
    columns -= 1;
}