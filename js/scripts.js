// function tanya() {
//     // Get form input values
//     var nama = encodeURIComponent(document.querySelector('input[name="nama"]').value);
//     var email = encodeURIComponent(document.querySelector('input[name="email"]').value);
//     var nohp = encodeURIComponent(document.querySelector('input[name="nohp"]').value);
//     var tanya = encodeURIComponent(document.querySelector('input[name="tanya"]').value);

//     // Replace the phone number with your desired WhatsApp number
//     var phone_number = "6281330282416";

//     // Create the message with line breaks and proper URL encoding
//     var message = "Nama: " + nama + "%0AEmail: " + email + "%0ANO. HP: " + nohp + "%0APERTANYAAN: " + tanya;

//     // WhatsApp API link for opening the WhatsApp app with the pre-filled message
//     var wa_link = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + message;

//     // Open the WhatsApp link in a new window
//     window.open(wa_link, "_blank");
// }

// function daftar(){
//     // Get form input values
//     var nama = encodeURIComponent(document.querySelector('input[name="nama"]').value);
//     var ttl = encodeURIComponent(document.querySelector('input[name="ttl"]').value);
//     var ayah = encodeURIComponent(document.querySelector('input[name="ayah"]').value);
//     var ibu = encodeURIComponent(document.querySelector('input[name="ibu"]').value);
//     var alamat = encodeURIComponent(document.querySelector('input[name="alamat"]').value);
//     var nohp = encodeURIComponent(document.querySelector('input[name="nohp"]').value);

//     // Replace the phone number with your desired WhatsApp number
//     var phone_number = "6281330282416";

//     // Create the message with line breaks and proper URL encoding
//     var message = "Nama: " + nama + "%0ATempat, Tanggal Lahir: " + ttl + "%0AAYAH: " + ayah + "%0AIBU: " + ibu + "%0AALAMAT: " + alamat + "%0ANO. HP: " + nohp;

//     // WhatsApp API link for opening the WhatsApp app with the pre-filled message
//     var wa_link = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + message;

//     // Open the WhatsApp link in a new window
//     window.open(wa_link, "_blank");
// }