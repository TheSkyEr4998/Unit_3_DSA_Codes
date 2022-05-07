function doit(input) {
    let lines = input.split('\n')
    let [n, c, r] = lines[0].trim().split(' ').map(Number)
    let arr = lines[1].trim().split(' ').map(Number)
    
    arr.sort((a, b) => a - b)
    
    let ct = 0
    let cur = 0
    
    for (let i = 0;i < arr.length;i++) {
        cur += arr[i]
        if (cur <= r) {
            ct ++
        } else {
            break
        }
    }
    
    if (ct >= c) {
        console.log("Party")
    } else {
        console.log("Sad")
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});