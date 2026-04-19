// Sayfa Geçişleri
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Log Yazdırma Sistemi
function addLog(containerId, text, color = "#00ff41") {
    const container = document.getElementById(containerId);
    const line = document.createElement('div');
    line.style.color = color;
    line.textContent = `[${new Date().toLocaleTimeString()}] > ${text}`;
    container.appendChild(line);
    container.scrollTop = container.scrollHeight;
}

// Otomatik Dashboard Logları
setInterval(() => {
    const sysLogs = ["Port 80 tarandı", "Yeni zombi bağlandı", "Firewall stabil", "Ping: 24ms"];
    addLog("dash-logs", sysLogs[Math.floor(Math.random() * sysLogs.length)]);
}, 3000);

// Sorgu Simülasyonu
function runQuery() {
    const name = document.getElementById('targetName').value;
    if(!name) return;
    addLog("query-logs", `${name} için derin tarama başlatıldı...`, "yellow");
    setTimeout(() => addLog("query-logs", `SONUÇ: ${name} bulundu. IP: 176.232.xx.xx`, "#00ff41"), 2000);
}

// DDOS Simülasyonu
function runDdos() {
    const ip = document.getElementById('targetIp').value;
    if(!ip) return;
    addLog("ddos-logs", `SALDIRI BAŞLATILIYOR: ${ip}`, "red");
    let count = 0;
    let attackInt = setInterval(() => {
        addLog("ddos-logs", `Paket gönderildi: ${Math.random().toString(36).substring(7)} >> ${ip}`, "red");
        count++;
        if(count > 10) {
            clearInterval(attackInt);
            addLog("ddos-logs", "HEDEF ÇEVRİMDIŞI (SİMÜLASYON TAMAMLANDI)", "white");
        }
    }, 500);
}
