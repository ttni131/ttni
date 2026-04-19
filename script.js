const logContainer = document.getElementById('log-container');
const logs = [
    "[INFO] Veritabanı bağlantısı kuruluyor...",
    "[WARN] Bilinmeyen IP adresi algılandı: 192.168.1.105",
    "[INFO] Güvenlik duvarı bypass denemesi: Başarılı",
    "[ERROR] Sunucu yanıt vermiyor... Yeniden deneniyor.",
    "[INFO] Paket analizi başlatıldı: Port 80, 443",
    "[CRITICAL] Şifreli veri bloğu çözülüyor...",
    "[INFO] Ağ trafiği optimize ediliyor (Local -> Global)"
];

// Ekrana sürekli yazı yazdırma fonksiyonu
function addLog() {
    const logEntry = document.createElement('div');
    logEntry.textContent = `> ${logs[Math.floor(Math.random() * logs.length)]}`;
    logContainer.appendChild(logEntry);

    if (logContainer.childNodes.length > 15) {
        logContainer.removeChild(logContainer.firstChild);
    }
}

// Barları hareket ettirme
function updateBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.height = Math.floor(Math.random() * 100) + "%";
    });
}

setInterval(addLog, 1200);
setInterval(updateBars, 2000);
