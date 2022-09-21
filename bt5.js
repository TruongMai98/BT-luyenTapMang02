// Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
let string1 = prompt("nhap chuoi 1");
let string2 = prompt("nhap chuoi 2");

let arr1 = string1.split("");
let arr2 = string2.split("");
console.log(arr1);
console.log(arr2);
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            count += 1;
            i++;
        } else if (arr1[i] !== arr2[j]){
            count = 0;
            break;
        }
    }
}



if (count == 0){
    document.write('2 chuoi k bang nhau');
} else if (count !== 0 ) {
    document.write("2 chuoi bang nhau");
}