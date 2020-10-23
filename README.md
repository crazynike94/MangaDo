# MangaDo

## [Видеопрезентация проекта](https://youtu.be/5hNBXkrXIX0?t=573)

Перед вами сервис, созданный для координации работы команды переводчиков манги (комиксов). В процессе работы участники команды сталкиваются с рядом организационных проблем и наш сервис готов их решить.

## Проблемы, которые мы решаем:

1. Проблема позиционирования перевода отностилельно оригинала.
   > В связи со спецификой материала первой возникает проблема позиционирования. На каждой странице любой манги находится множество небольших фрагментов текста, а также звуков, которые нужно перевести. Очень часто переводчику неудобно работать в сложных и громоздких приложениях, вроде Photoshop'а, чтобы явно указать соответствие между оригиналом и переводом. Мы решаем эту проблему путем проставления виртуальных меток.
2. Проблема позиционирования редакторских правок и их обсуждения.
   > Аналогичная проблема возникает при работе редактора, которая отягощается тем, что каждая правка требует также обсуждения. Как правило такие обсуждения проходят в мессенджерах и в проекте длинной больше 3 страниц превращаются в настоящий "кошмар". Наш проект решает и эту проблему за счет того, что у каждой виртуальной метки есть свой собственный чат.
3. Отслеживание состояния документа без использования Photoshop.
   > Следующая важная задача, которую мы решаем — синхронизация актуальной версии рабочих файлов между участниками команды и имитация функционала слоев Photoshop'а онлайн. Все рабочие файлы команды хранятся в облачном хранилище Яндекс.Диск. Наш сервис также подключен к этому хранилищу и всегда оперирует файлами со всеми актуальными изменениями. При открытии файла на сайте пользователь видит весь набор слоев, аналогичный оригиналу. Также реализовано включение и отключение видимости каждого слоя по отдельности. Эти функции необходимы для упрощения работы участников команды, которые по тем или иным причинам (не хватает ресурсов компьютера или установлена неподходящая ОС) не пользуются Photoshop'ом. Таким образом любой участник команды может увидеть актуальное состояние проекта на любом устройтве и проконтролировать порядок и содержание слоев .psd файла без необходимости запуска сложных и требовательных приложений.

## Вы можете войти на сайт в режиме "только для чтения" для оценки функционала на примере реальных проектов. <br /> Перейдите на страницу [ВОЙТИ](https://mangado.site/signIn) и нажмите кнопку "Демонстрация".

#### Список технологий, которые использовались при разработке:

- Node.js
- React
- Redux
- React Router
- WebSocket
- ImageMagick
- Яндекс.Диск
- MongoDB
- ExpressJS
- PM2
- nginx
- JWT tokens
- bcrypt

#### Для запуска проекта необходимо:

1. установить [Node.js](https://nodejs.org/en/download/) (не ниже 14 версии)
2. установить [ImageMagick](https://imagemagick.org/script/download.php)
3. установить [Яндекс.Диск](https://disk.yandex.ru/download)
4. создать онлайн базу данных [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

#### Порядок запуска:

1. открыть в терминале каталог server и набрать команду `npm install`
2. скопировать файл .env.example, переименовать его в .env и дописать отсутствующие (и заменить существующие) поля:
   > PORT= *порт на котором будет запущен сервер* <br/>
   > YANDEX_ROOT= *полный путь к целевой папке на Яндекс.Диск* <br/>
   > DB_NAME= *имя базы данных Atlas* <br/>
   > DB_LOGIN= *логин для подключения к базе данных Atlas* <br/>
   > DB_PASS= *пароль для подключения к базе данных Atlas* <br/>
   > jwtToken= *секретная число-буквенная комбинация* <br/>
   > jwtRefreshToken= *секретная число-буквенная комбинация* <br/>
   > tokenLife= *время жизни обычного токена* <br/>
   > refreshTokenLife= *время жизни refresh-токена* <br/>
   > INVITE_ADMIN= *инвайт для регистрации в качестве администратора* <br/>
   > INVITE_WORKER= *инвайт для регистрации в качестве рядового работника* <br/>
   > INVITE_DON= *инвайт для регистрации в качестве спонсора* <br/>
3. набрать в терминале `npm start`
4. открыть новую копию терминала, перейти в папку client и набрать команду `npm install`
5. скопировать файл .env.example, переименовать его в .env и при необходимости заменить существующие поля:
   > REACT_APP_SERVER_PATH= *адрес сервера* <br/>
   > REACT_APP_WEBSOCKET_PATH= *адрес сервера вебсокетов* <br/>
6. набрать команду `npm start`

### В планах:

- [x] Кликабельные ссылки в чате
- [ ] Перенастроить сохранение слоев в .webp
- [ ] Получать оригинальные названия слоев
- [ ] Организовать "прослушивание" каталога chokidar'ом
- [ ] Добавить отдельное состояние "завершенности" каждой метки
- [ ] Добавить кнопку "скопировать в буфер" к сообщению
- [ ] Добавить оповещение о непрочитанных сообщениях
- [ ] Добавить подсветку меток
- [ ] Унифицировать метод передачи данных
