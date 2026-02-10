const tg = window.Telegram.WebApp;
const consoleBox = document.getElementById('console');
const btn = document.getElementById('action-btn');

// Звук скримера
const sound = new Audio('https://www.myinstants.com');

tg.ready();
tg.expand();

function print(text, isGlitch = false) {
    const p = document.createElement('div');
    p.className = isGlitch ? 'line glitch' : 'line';
    p.innerText = '> ' + text;
    consoleBox.appendChild(p);
    // Вибрация телефона при каждой новой строчке
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
}

btn.onclick = () => {
    btn.style.display = 'none';
    sound.load(); // Предзагрузка звука

    // Сценарий (можешь менять тексты тут на свои)
    setTimeout(() => print("ПОДКЛЮЧЕНИЕ К УЗЛУ 06..."), 500);
    setTimeout(() => print("ОШИБКА: СЕНСОРЫ ДВИЖЕНИЯ АКТИВИРОВАНЫ"), 2000);
    setTimeout(() => print("ОНО ПРЯМО ЗА ТОБОЙ", true), 4000);

    // ФИНАЛ - СКРИМЕР
    setTimeout(() => {
        document.getElementById('jumpscare').style.display = 'flex';
        sound.play();
        if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('error');
        // Закрываем приложение через 2.5 секунды после испуга
        setTimeout(() => { tg.close(); }, 2500);
    }, 5500);
};
