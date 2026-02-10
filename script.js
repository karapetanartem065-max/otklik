const tg = window.Telegram.WebApp;
const consoleBox = document.getElementById('console');
const btn = document.getElementById('action-btn');

// Оставляем звук, но делаем его "тихим" при загрузке, чтобы не вешал систему
let sound = new Audio('https://www.myinstants.com');

tg.ready();
tg.expand();

function print(text, isGlitch = false) {
    const p = document.createElement('div');
    p.className = isGlitch ? 'line glitch' : 'line';
    p.innerText = '> ' + text;
    consoleBox.appendChild(p);
    // Вибрация сработает в любом случае!
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
}

btn.onclick = () => {
    btn.style.display = 'none';
    
    // Пытаемся запустить звук, но если не выйдет - плевать, идем дальше
    sound.play().catch(e => console.log("Sound blocked or loading"));

    // Твой сценарий запускается МГНОВЕННО
    print("ИНИЦИАЛИЗАЦИЯ ПРОТОКОЛА...");
    
    setTimeout(() => print("ПОДКЛЮЧЕНИЕ К УЗЛУ 06..."), 1000);
    setTimeout(() => print("ОШИБКА: ОБНАРУЖЕНО ПРИСУТСТВИЕ", true), 2500);
    setTimeout(() => print("ОНО УЖЕ ЗДЕСЬ", true), 4000);

    // ФИНАЛ: Скример и вибрация
    setTimeout(() => {
        document.getElementById('jumpscare').style.display = 'flex';
        // Если звук успел прогрузиться - он заорет тут
        sound.play().catch(() => {}); 
        
        if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('error');
        
        // Закрываем через 2.5 сек
        setTimeout(() => { tg.close(); }, 2500);
    }, 5500);
};
