$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    var fotograf = $('#fotograf').val();
    var ad = $('#ad').val();
    var soyad = $('#soyad').val();
    var email = $('#email').val();
    var sifre = $('#sifre').val();
    var cepTelefonu = $('#cepTelefonu').val();
    var cinsiyet = $("input[name='cinsiyet']:checked").val();
    var dogumTarihi = $('#dogumTarihi').val();

    $.ajax({
      url: 'servlet',
      method: 'POST',
      data: {
        fotograf: fotograf,
        ad: ad,
        soyad: soyad,
        email: email,
        sifre: sifre,
        cepTelefonu: cepTelefonu,
        cinsiyet: cinsiyet,
        dogumTarihi: dogumTarihi,
      },
      success: function (response) {
        alert('Form gönderildi.');
      },
      error: function () {
        alert('Hata!');
      },
    });
  });
});
