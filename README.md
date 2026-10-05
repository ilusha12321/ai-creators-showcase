# AI Creators Showcase

Інтерактивна веб-вітрина AI-блогерів із сучасним адаптивним інтерфейсом.

Проєкт демонструє, як можна швидко створити комерційний frontend-продукт із профілями AI-персонажів, інтерактивними профілями та переходом у Telegram.

## Demo

🔗 **Live Demo:** *додати посилання після деплою*

🔗 **GitHub:** https://github.com/ilusha12321/ai-creators-showcase

---

## Про проєкт

AI Creators Showcase — односторінковий сайт із каталогом віртуальних AI-блогерів.

Користувач може:

* переглядати AI-персонажів;
* ознайомитися з їхніми профілями;
* переглянути опис, інтереси та останні публікації;
* відкрити інтерактивний профіль;
* переглянути демонстрацію AI-чату;
* перейти до спілкування через Telegram;
* користуватися сайтом із мобільного телефону, планшета або desktop.

---

## AI Creators

### Alex

Lifestyle & Travel

AI-блогер про подорожі, lifestyle та нові враження.

### Noah

Technology & Business

AI-блогер про технології, стартапи та digital-бізнес.

### Mia

Fashion & Lifestyle

AI-блогер про моду, стиль та сучасний lifestyle.

### Emma

Fitness & Travel

AI-блогер про спорт, подорожі та активний спосіб життя.

---

## Основний функціонал

### Каталог персонажів

Кожен персонаж представлений окремою карткою з:

* аватаром;
* ім'ям;
* username;
* коротким описом;
* категорією;
* статусом online;
* кількістю підписників;
* кнопкою перегляду профілю.

### Профіль персонажа

При відкритті профілю користувач бачить:

* великий портрет;
* опис персонажа;
* personality;
* останні публікації;
* preview AI-чату;
* кнопку переходу в Telegram.

На мобільних пристроях профіль адаптований під формат bottom sheet / fullscreen.

### AI Chat Preview

На сайті реалізовано демонстрацію діалогу з AI-персонажем.

Інтерфейс показує:

* повідомлення користувача;
* відповіді персонажа;
* avatar;
* статус online;
* час повідомлення;
* поле введення.

Основна мета — показати користувачу формат взаємодії з AI-персонажем.

### Telegram

Для продовження спілкування використовується CTA **Continue in Telegram**.

Telegram-посилання винесене в окрему конфігурацію, тому його можна змінити без редагування компонентів.

---

## Адаптивність

Інтерфейс адаптований для:

* Mobile — 320px+
* Tablet — 768px+
* Desktop — 1024px+
* Large Desktop — 1440px

Особлива увага приділена mobile-first підходу, зручності навігації та відсутності горизонтального scroll.

---

## Технології

* React
* TypeScript
* Vite
* Tailwind CSS
* React Hooks
* Responsive Design
* WebP images
* Git / GitHub

---

## Структура проєкту

```text
src/
├── assets/
│   └── creators/
│       ├── alex.webp
│       ├── emma.webp
│       ├── mia.webp
│       └── noah.webp
│
├── components/
│   ├── Header
│   ├── Hero
│   ├── CreatorCard
│   ├── CreatorGrid
│   ├── CreatorModal
│   ├── ChatPreview
│   ├── PostPreview
│   ├── Portrait
│   └── HowItWorks
│
├── data/
│   ├── creators.ts
│   └── images.ts
│
├── types/
│   └── creator.ts
│
├── App.tsx
├── config.ts
├── index.css
└── main.tsx
```

---

# Screenshots

## 1. Desktop — головна сторінка

**Сюди вставити скриншот головної сторінки на desktop (1440px).**

<img width="1555" height="957" alt="image" src="https://github.com/user-attachments/assets/06189987-e764-4bd9-8a55-7f03e63ed380" />


![Desktop Home](docs/screenshots/desktop-home.png)


## 3. Профіль AI-персонажа

**Сюди вставити скриншот відкритого профілю персонажа.**

<img width="1315" height="967" alt="image" src="https://github.com/user-attachments/assets/2e82f112-42e3-476a-ac55-33d4e869f6f4" />


![Creator Profile](docs/screenshots/profile.png)

---

## 4. AI Chat

**Сюди вставити скриншот блоку AI-чату.**

<img width="1132" height="982" alt="image" src="https://github.com/user-attachments/assets/9a30d7d5-1525-4ce2-b6d0-817027290e70" />

<img width="584" height="946" alt="image" src="https://github.com/user-attachments/assets/417ac8d0-03ad-4dad-a318-01ef649b5b32" />

![AI Chat](docs/screenshots/chat.png)

---

## Локальний запуск

Клонувати репозиторій:

```bash
git clone https://github.com/ilusha12321/ai-creators-showcase.git
```

Перейти до проєкту:

```bash
cd ai-creators-showcase
```

Встановити залежності:

```bash
npm install
```

Запустити development server:

```bash
npm run dev
```

---

## Мета проєкту

Проєкт створений як демонстрація frontend-розробки та продуктового підходу.

Основний фокус:

* сучасний UI/UX;
* адаптивність;
* зрозуміла структура React-компонентів;
* повторне використання компонентів;
* інтерактивність;
* mobile-first;
* підготовка інтерфейсу до подальшого підключення реального AI backend.

---

## Автор

**Ілля Холодов**

GitHub: https://github.com/ilusha12321
