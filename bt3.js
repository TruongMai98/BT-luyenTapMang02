// Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng.


function checkTypeOf(value){
    let result;
    if (isNaN(value)){
        result = false;
    }else if (!isNaN(value)){
        result = true;
    }

    return result;
}

let n = +prompt("Nhập số lượng n phần tử mảng ");
let a = [];
let count = 0;
for (let i = 1; i <= n; i++) {
    a.push(prompt("nhập phần tử thứ " + i));
}
for (let i = 0; i < a.length ; i++) {
    if (checkTypeOf(a[i])){
        count += 1;
    }
}
document.write(count);