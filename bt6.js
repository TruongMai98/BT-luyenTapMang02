// Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
let str = prompt("nhap 1 chuoi co ky tu '-'");
let newStr = str.replace(/-/g,"_");
document.write(newStr);