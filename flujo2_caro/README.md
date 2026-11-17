# Flujo 2, subir a GitHub

Repo https://github.com/franciscogodoys-cl/IHC_SUM2

##Preparar

Acepta la invitacion de colaboradora que llego a tu correo


git clone https://github.com/franciscogodoys-cl/IHC_SUM2.git
cd IHC_SUM2
git pull
git config user.name "Carolina Vallejos"
git config user.email "tu-correo@mayor.cl"


##Copiar

Copia la carpeta flujo2-contacto-verificacion del zip dentro de `prototipo/` y no borres el README.md que ya esta ahi


prototipo/flujo2-contacto-verificacion/
├── README.md
├── p3-contacto.html
├── p4-verificar-celular.html
├── css/flujo2.css
└── js/flujo2.js


#Probar

Abre prototipo/index.html entra a Prototipo completo y avanza hasta el paso 3

##Commit y push

git add prototipo/flujo2-contacto-verificacion/css prototipo/flujo2-contacto-verificacion/js
git commit -m "Agrega estilos y validaciones del flujo de contacto"

git add prototipo/flujo2-contacto-verificacion/p3-contacto.html
git commit -m "Agrega pantalla de contacto con celular, correo opcional y canal"

git add prototipo/flujo2-contacto-verificacion/p4-verificar-celular.html
git commit -m "Agrega verificacion del celular con codigo por SMS simulado"

git pull --rebase
git push


La primera vez GitHub pide iniciar sesion en el navegador

git commit -m "Ajusta mensaje de error del celular"

