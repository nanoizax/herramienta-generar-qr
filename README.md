# Generador de Código QR

Convierte un enlace o un texto en un código QR descargable, sin subir nada a ningún servidor.

Herramienta gratuita y de código abierto de [SonhoLab](https://sonholab.com). Corre **100 % en el navegador**: los archivos no se suben a ningún servidor.

> Licencia: **MIT** · Autor: Leandro Manuel Perez Montañana · Idiomas de la interfaz: español, inglés, francés, portugués (BR), alemán, hindi, indonesio y ruso.

## Qué hace

Pegas un enlace o escribes un texto y obtienes un código QR en imagen, listo para descargar e imprimir en un cartel, un menú o una tarjeta. El código se arma dentro de tu navegador: nada viaja a un servidor nuestro. Además es una imagen tuya, así que no caduca ni depende de ningún servicio externo.

**Cuándo te sirve:**

- Un restaurante que pega el QR de su menú digital en cada mesa y actualiza los platos sin reimprimir nada.
- Alguien que vende por WhatsApp y quiere que el cliente le escriba desde un QR impreso en el volante o en el paquete.
- Una secretaria que arma la invitación de un evento y agrega el QR con la ubicación y el formulario de confirmación.

## Cómo se usa

1. **Escribe o pega el contenido.** Coloca el enlace de tu sitio, tu WhatsApp o el texto que quieras mostrar. El código se dibuja al instante mientras escribes.
2. **Pruébalo con tu teléfono.** Apunta la cámara del teléfono al código que aparece en pantalla y confirma que abre el enlace correcto antes de imprimirlo.
3. **Descarga la imagen.** Guarda el código como imagen y llévalo a tu cartel, tu menú o tu tarjeta. Queda en tu equipo, sin marca de agua ni registro.

## Qué necesita para funcionar

### Para instalarla y compilarla

- [Node.js](https://nodejs.org) 18 o superior (probado con Node 22) y npm.
- Conexión a internet **solo** durante `npm install`. Una vez compilada, la herramienta no pide nada a internet.

### Complementos específicos de esta herramienta

- **Ninguno.** No usa modelos, binarios ni servicios externos: todo está en el código y en dependencias normales de npm.

### En el navegador de quien la usa

- Cualquier navegador moderno (Chrome, Edge, Firefox, Safari). No necesita permisos especiales.

## Instalación

```bash
git clone https://github.com/nanoizax/herramienta-generar-qr.git
cd herramienta-generar-qr
npm install
npm run dev         # servidor de desarrollo en http://localhost:5173
```

Para publicarla:

```bash
npm run build       # genera la carpeta dist/
npm run preview     # probar la versión compilada
```

Esta herramienta **no tiene servidor propio**: todo ocurre en el navegador de quien la usa. Basta con publicar la carpeta `dist/` en cualquier hosting estático (GitHub Pages, Netlify, Cloudflare Pages, Nginx, Apache...).

## Cómo está organizado

```
src/pages/tools/   La página de la herramienta (interfaz y lógica de pantalla)
src/lib/tools/     La lógica de la herramienta, separada de la interfaz
src/components/    Piezas compartidas (zona de arrastre de archivos, botón)
src/locales/       Textos en 8 idiomas (esta herramienta solamente)
src/i18n.ts        Configuración de idiomas
```

## Cómo meterla en tu propia plataforma

1. **Como página aparte:** publica `dist/` en una ruta de tu sitio, por ejemplo `/herramientas/generar-qr/`. Si la sirves en una subcarpeta, define `base` en `vite.config.ts`.
2. **Dentro de tu aplicación React:** copia `src/pages/tools/*Page.tsx`, `src/lib/tools/` y `src/components/` a tu proyecto, instala las mismas dependencias de `package.json` y renderiza la página donde quieras.
3. **Con tu diseño:** el marco de la página (título, ayuda, preguntas frecuentes) está en `src/components/tools/ToolPageLayout.tsx` y es intencionalmente simple. Cámbialo por tu cabecera, tu pie y tus estilos; solo necesita pintar `children`.
4. **Con tu analítica:** `src/lib/hitCounter.ts` no hace nada. Si quieres medir el uso, conéctalo ahí a tu propia herramienta.

## Privacidad

Todo el procesamiento ocurre en el navegador. Esta copia no incluye analítica, cookies, contadores ni llamadas a ningún servidor propio. Los archivos del usuario no salen de su equipo.

## Preguntas frecuentes

**¿Es gratis o tiene algún límite?**  
Es gratis y no hay límite de códigos. No pedimos correo, registro ni suscripción, y tampoco hay versión de pago con funciones escondidas. Puedes generar los que necesites, uno detrás de otro, el mismo día.

**¿Qué pasa con el enlace o el texto que escribo?**  
Se queda en tu dispositivo. El código se dibuja con el navegador que estás usando, así que el contenido nunca se envía a un servidor nuestro ni queda guardado en ningún lado. Puedes cerrar la pestaña y no queda rastro.

**¿El código QR caduca después de un tiempo?**  
No. Es un QR estático: el enlace va escrito dentro del dibujo, no pasa por un acortador nuestro. Va a funcionar mientras el sitio al que apunta siga en línea. La contra es que, una vez impreso, no se puede cambiar el destino sin generar otro.

**¿Necesito instalar algo o crear una cuenta?**  
No hace falta nada de eso. Funciona en el navegador que ya tienes, en computadora o en teléfono, y no hay que descargar ningún programa. Tampoco hay cola de espera: el código aparece apenas terminas de escribir.

**¿La imagen sirve para imprimir en grande?**  
Sí. Genera el código en el tamaño más grande que puedas y úsalo en carteles o vitrinas. Deja siempre un margen blanco alrededor y no lo estires: si la imagen se deforma, la cámara del teléfono deja de leerlo.

## Licencia

Este proyecto se publica bajo la licencia **MIT**. El texto completo está en [LICENSE](LICENSE).

Las dependencias tienen sus propias licencias, listadas en [THIRD-PARTY.md](THIRD-PARTY.md).

## Más herramientas gratuitas

Esta es una de las herramientas gratuitas de SonhoLab. Encuentra el resto, cada una con su repositorio, en https://sonholab.com/es/herramientas.

---

Hecho por Leandro Manuel Perez Montañana.
