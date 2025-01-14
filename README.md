## Основы Markdown
Markdown — это легкий язык разметки, который позволяет создавать структурированные документы.  

---

### 1. Заголовки
# Заголовок первого уровня  
## Заголовок второго уровня  
### Заголовок третьего уровня  
#### Заголовок четвёртого уровня  
##### Заголовок пятого уровня  
###### Заголовок шестого уровня  

---

### 2. Выделение текста
*курсив*  
_курсив_  

**жирный**  
__жирный__  

***жирный курсив***  
___жирный курсив___  

~~зачеркнутый~~  

---

### 3. Ссылки

#### Обычная ссылка
Пример: [Перейти на Google](https://www.google.com)

#### Автоматическая ссылка
Пример:  
<https://www.google.com>

#### Внутренняя ссылка
Пример: [Вернуться к разделу "Заголовки"](#1-заголовки)

---

### 4. Списки

#### Нумерованный список
1. Первый элемент  
2. Второй элемент  
3. Третий элемент  

#### Маркированный список
- Первый элемент  
- Второй элемент  
- Третий элемент  

#### Вложенные списки
- Элемент первого уровня  
  - Элемент второго уровня  
    - Элемент третьего уровня  

---

### 5. Картинки

#### Добавление изображения с описанием
![Описание картинки](https://i.imgflip.com/58s68l.png?a482184 "Подсказка при наведении")

---

### 6. Блоки кода и подсветка кода

#### Строка кода

`строка кода`

Пример:

`let x = 5;`

#### Блок кода

\```
Блок кода
\```

Пример:

```
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

#### Подсветка кода

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---


## Команды Git

### 1. `git init`
Команда для инициализации нового репозитория Git в текущей директории.
```bash
git init
```

### 2. `git clone`
Команда для клонирования удаленного репозитория на локальную машину.
```bash
git clone <url>
```

### 3. `git add`
Добавление изменений в индекс для последующего коммита.
```bash
git add <файл>         # Добавление одного файла
git add .              # Добавление всех файлов в текущей директории
```

### 4. `git commit`
Создание нового коммита с добавленными изменениями.
```bash
git commit -m "Сообщение коммита"    # Коммит с сообщением
git commit -a -m "Сообщение"         # Коммит всех отслеживаемых файлов
```

### 5. `git status`
Показать состояние рабочей директории и индексированных файлов.
```bash
git status
```

### 6. `git log`
Просмотр истории коммитов.
```bash
git log                  # Показывает полный список коммитов
git log --oneline        # Показывает сокращенную историю
git log --graph          # Показывает граф истории коммитов
```

### 7. `git diff`
Отображение различий между файлами в рабочей директории и индексом, или между коммитами.
```bash
git diff                      # Различия в рабочих файлах
git diff <commit1> <commit2>  # Различия между двумя коммитами
```

### 8. `git push`
Отправка изменений на удаленный репозиторий.
```bash
git push                 # Отправка на текущую ветку
git push origin master   # Отправка на основную ветку репозитория
```
