// Объект с уровнями для каждой технологии
const techLevels = {
  Python: 'Middle',
  TypeScript: 'Junior',
  JavaScript: 'Junior',
  Django: 'Junior',
  Aiogram: 'Middle',
  React: 'Junior',
  Figma: 'Junior',
  Bootstrap: 'Middle',
  Tailwind: 'Junior',
  PostgreSQL: 'Junior',
  GIT: 'Junior',
  SQL: 'Middle',
  HTML: 'Middle',
  CSS: 'Middle'
};

// Функция для обновления текста и стиля кнопки при нажатии
function toggleButtonState(button) {
  const originalText = button.getAttribute('data-original-text');
  
  if (button.classList.contains('face')) {
    button.classList.remove('face');
    button.classList.add('back');
    // Обновление текста при переходе на 'back'
    if (techLevels[originalText]) {
      button.textContent = techLevels[originalText];
    }
  } else {
    button.classList.remove('back');
    button.classList.add('face');
    
    // Возврат оригинального текста при переходе на 'face'
    button.textContent = originalText;
  }
}

// Получение всех кнопок и установка оригинального текста
const allButtons = document.querySelectorAll('.item'); 

allButtons.forEach(button => {
  // Убедимся, что кнопка имеет текст, который присутствует в techLevels
  const text = button.textContent.trim();
  if (techLevels[text]) {
    // Сохраняем оригинальный текст в data-атрибут
    button.setAttribute('data-original-text', text);
    
    // Добавляем обработчик клика
    button.addEventListener('click', function() {
      toggleButtonState(button);
    });
  }
});






document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
});

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
    document.getElementById("message-form").reset();
}

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "EEL33S7nGauLB16MH",
    });
})();
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_bsb9wle', 'template_tq6573z', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
    this.reset()
});
