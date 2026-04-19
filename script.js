function simulateScan() {
    const name = document.getElementById('targetName').value;
    if(!name) return;
    
    addCustomLog(`[SİSTEM] ${name} için veritabanı taranıyor...`);
    setTimeout(() => addCustomLog(`[SONUÇ] Kayıt bulundu: ${name} - Lokasyon: Türkiye`), 1500);
}

function startAttack() {
    const ip = document.getElementById('targetIp').value;
    const btn = document.getElementById('attackBtn');
    const status = document.getElementById('attack-status');

    if(!ip) return;

    btn.disabled = true;
    status.textContent = "SALDIRI BAŞLATILDI: " + ip;
    
    addCustomLog(`[ATTACK] UDP Flood başlatıldı: ${ip}`);
    addCustomLog(`[ATTACK] Paket gönderiliyor: 64kb...`);

    // 5 saniye sonra durdurma simülasyonu
    setTimeout(() => {
        btn.disabled = false;
        status.textContent = "SALDIRI TAMAMLANDI.";
        addCustomLog(`[OK] Hedef sunucu (IP: ${ip}) geçici olarak devre dışı.`);
    }, 5000);
}

function addCustomLog(message) {
    const logEntry = document.createElement('div');
    logEntry.textContent = `> ${message}`;
    logEntry.style.color = "#ff0000"; // Saldırı loglarını kırmızı yapalım
    logContainer.appendChild(logEntry);
}
