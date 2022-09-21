// Viết một chương trình để đếm số từ trong một chuỗi
let n = prompt("nhap mot chuoi chu hoac so bat ky");
let arr = n.split("");
let count = 0;
function checkTypeOf(value){
    let result;
    if (isNaN(value)){
        result = false;
    }else if (!isNaN(value)){
        result = true;
    }
    return result;
}


 for (let i = 0; i < arr.length;i++){
     if (!checkTypeOf(arr[i])){
         count += 1;
     }
 }
  document.write(count);