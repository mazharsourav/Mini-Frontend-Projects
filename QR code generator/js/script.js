document.addEventListener('DOMContentLoaded', function () {
  const qrInput = document.getElementById('qrInput');
  const qrCodeDiv = document.getElementById('qrcode');
  const submitBtn = document.getElementById('submitBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  function generateQRCode() {
    const inputText = qrInput.value.trim();

    if (!inputText) {
      alert('Please enter a URL or text!');
      return;
    }

    qrCodeDiv.innerHTML = '';
    new QRCode(qrCodeDiv, {
      text: inputText,
      width: 180,
      height: 180,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H
    });

    // Show download button after QR is generated
    setTimeout(() => {
      downloadBtn.style.display = 'inline-block';
    }, 300);
  }

  submitBtn.addEventListener('click', generateQRCode);

  qrInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      generateQRCode();
    }
  });

  downloadBtn.addEventListener('click', function () {
    // Find the QR code canvas or img
    const qrImg = qrCodeDiv.querySelector('img') || qrCodeDiv.querySelector('canvas');
    if (qrImg) {
      let url;
      if (qrImg.tagName === 'IMG') {
        url = qrImg.src;
      } else {
        url = qrImg.toDataURL();
      }
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  });
});