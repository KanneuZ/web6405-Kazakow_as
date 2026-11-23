class UserData {
    constructor(username, password, consent) {
        this.username = username;
        this.password = password;
        this.consent = consent;
        this.timestamp = new Date().toLocaleString('ru-RU');
    }

    printToConsole() {
        console.log('=== Новые данные формы ===');
        console.log(`Логин: ${this.username}`);
        console.log(`Пароль: ${'*'.repeat(this.password.length)}`);
        console.log(`Согласие на обработку данных: ${this.consent ? 'Да' : 'Нет'}`);
        console.log(`Время отправки: ${this.timestamp}`);
        console.log('=============================');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const consent = document.getElementById('consent').checked;
            
            const userData = new UserData(username, password, consent);
            userData.printToConsole();
            
            loginForm.reset();
            alert('Данные успешно "отправлены"! Проверьте консоль разработчика (F12).');
        });
    }
});