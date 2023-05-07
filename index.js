console.log("hello")

// Bài tập 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 100
/* Input: Nhập vào số N
    Progress: Lấy số tự nhiên từ 0 đến N cộng lại và tổng đó phải lớn hơn 10000
    Output: Tổng của các số tự nhiên từ 0 đến N

*/

function tinhTongSoNguyenDuong() {
    var soNguyenDuong = document.getElementById('soNguyen').value * 1;

    var tongSoNguyenDuong = 0;

    for (var i = 0; i <= soNguyenDuong; i++) {
        tongSoNguyenDuong += i;
    }
    if (tongSoNguyenDuong > 10000) {
        document.querySelector('.bai1').innerHTML = tongSoNguyenDuong;
    }
    else
        document.querySelector('.bai1').innerHTML = "Tổng này < 10000:  " + tongSoNguyenDuong;
}


// Bài tập 2: Viết chương trình nhập vào 2 số X và N, tính tổng: S(n) = x + x^2 + x^3 + ... + x^n

/* Input: Số X và số N
    Progress: tổng của N = x + x^2 + x^3 +...+ x^n
    Output: xuất ra tổng của N ra màn hình

*/

function tinhTongSn() {
    var soX = document.getElementById('soX').value * 1;
    var soN = document.getElementById('soN').value * 1;

    var tongSn = 0;
    for (var i = 1; i <= soN; i++) {
        tongSn += Math.pow(soX, i);
    }
    document.querySelector('.bai2').innerHTML = "Tổng S(n) là:  " + tongSn;
}

// Bài tập 3: Nhập vào n. Tính giai thừa 1*2*...n

/* Input: Nhập vào số N
    Progress: lấy số từ 1 đến N nhân với nhau
    Output: Kết quả nhân của tất cả các số

*/

function tinhGiaiThua() {
    var soGiaiThua = document.getElementById('soGiaiThua').value * 1;
    var giaiThua = 1;
    for (var i = 1; i <= soGiaiThua; i++) {
        giaiThua *= i;
    }
    document.querySelector('.bai3').innerHTML = giaiThua;
}

// Bài tập 4: Viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì bg màu đỏ và lẻ thì bg màu xanh

/* Input: 10 thẻ div
    Progress: xét vị trí từng thẻ div nếu chẵn thì đỏ nếu lẻ thì xanh
    Output: đổi màu thẻ div đỏ hoặc xanh theo điều kiện

*/

function chanDoLeXanh()
{
    var doiMau = document.getElementsByClassName("bai4");
    for (var i = 0; i < doiMau.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            doiMau[i].style.background = "red";
        }
        else { 
            // Vị trí lẽ => màu xanh
            doiMau[i].style.background = "blue";
        }
    }
}


// Bài tập 5: Viết chương trình có 1 ô input, 1 ô button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input

/* Input: Nhận vào số tự nhiên N
    Progress: Kiểm tra tất cả các số từ 1 đến n xem thử số đó có phải là số nguyên tố, đúng thì in ra, sai thì ko in
    Output: In ra tất cả các số nguyên tố từ 1 đến N

*/

// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n) {
    var soNuyenTo = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        soNuyenTo = false;
    }
    else if (n == 2) {
        soNuyenTo = true;
    }
    else if (n % 2 == 0) {
        soNuyenTo = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                soNuyenTo = false;
                break;
            }
        }
    }
 
    return soNuyenTo;
}

function timSoNguyenTo() {
    var soTuNhien = document.getElementById('soTuNhien').value * 1;

    // var soNguyenTo = 0;
    var inSoNguyenTo = "";
    for (var i = 1; i <= soTuNhien; i++) {
        if ( kiem_tra_snt(i)) {
            inSoNguyenTo += i + '<br>';
        }
        // soNguyenTo++;
    }
    document.querySelector('.bai5').innerHTML = inSoNguyenTo;
}