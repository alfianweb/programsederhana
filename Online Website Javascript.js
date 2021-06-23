alert('Hallo, selamat datang di alfianpedia');

var ulang = true

while(ulang === true) {
    var nama = prompt('Masukkan nama anda :');
    alert('Hallo ' + nama + ' terimakasih sudah berkunjung ke website kami');

    ulang = confirm('Coba masukkan nama lagi? \n (klik cancel/tidak/batal untuk tidak mengulangi) ');
}

alert('Terimakasih....'); 

var angka = prompt('Masukkan angka :');

if(angka % 2 === 0) {
    alert(angka + ' adalah bilangan genap');
} else if(angka % 2 === 1) {
    alert(angka + ' adalah bilangan ganjil');
} else {
    alert('Yang anda masukkan bukan angka!!!')
}

alert('Oke terimakasih......');
