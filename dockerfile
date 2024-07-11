# Використовуємо офіційний образ Node.js версії 14
FROM node:14

# Встановлюємо змінні середовища
ENV NODE_ENV=production

# Створюємо робочий каталог в контейнері
WORKDIR /usr/src/app

# Копіюємо package.json та package-lock.json (якщо є) в робочий каталог
COPY package*.json ./

# Встановлюємо залежності з package-lock.json
RUN npm ci

# Копіюємо файли проекту, включаючи webpack.config.js
COPY . .

# Виконуємо збірку проекту
RUN npm run build

# Відкриваємо порт, на якому працює додаток Express
EXPOSE 5500

# Запускаємо додаток
CMD ["node", "build/app.js"]
