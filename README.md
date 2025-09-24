# Tienda - Routing (React + Vite)

Instrucciones rápidas para ejecutar la app localmente (Windows PowerShell):

1. Abrir PowerShell en la carpeta del proyecto (`C:/Users/Uro/OneDrive/Escritorio/hola`).
2. Instalar dependencias:

```powershell
npm install
```

3. Iniciar el servidor de desarrollo:

```powershell
npm run dev
```

La app quedará disponible por defecto en `http://localhost:5173/`.

Descripción:
- Rutas: `/` listará todos los productos.
- `/category/:categoryId` filtrará por categoría (e.g. `/category/ropa`).
- `/item/:itemId` mostrará el detalle del producto.
- `/cart` muestra el carrito.
- `/checkout` formulario de compra (simulado).
- Ruta `*` muestra una página 404.

Funcionalidades implementadas (sin Firebase):
- Navegación SPA con `react-router-dom`.
- Contenedores y componentes de presentación separados.
- Listado dinámico y detalle usando servicios mock asíncronos.
- `ItemCount` permite seleccionar cantidad; al agregar, desaparece y muestra confirmación.
- Estado global del carrito mediante `CartContext` (add, remove, clear, totales).
- `CartWidget` muestra el total de unidades y enlaza al carrito.
- `CheckoutForm` simula la creación de una orden y devuelve un id de orden.

Siguientes pasos (Firebase):
- Configurar Firebase en el proyecto y añadir credenciales en un archivo `.env`.
- Implementar Firestore para: cargar productos desde la colección `products` y crear documentos en la colección `orders` al confirmar la compra.

Firebase/Firestore
- El proyecto ahora incluye `src/services/firebaseService.js` que inicializa Firebase con la configuración proporcionada y expone `getProducts`, `getProductById` y `createOrder`.
- Si no existen documentos en Firestore, el servicio hace fallback a los datos mock.
- Para usar Firestore en producción asegúrate de:
	- Añadir las reglas de seguridad apropiadas en la consola Firebase.
	- Crear una colección `products` con los documentos de tus productos (campos: `title`, `category`, `price`, `description`).
	- Revisar la política de CORS y la configuración de hosting si fuera necesario.

Siguiente paso sugerido:
- Abre la consola de Firebase -> Firestore -> crea la colección `products` y agrega algunos documentos.
- Después puedes probar la app: al leer productos la app usará Firestore si está disponible.
Seed de productos y variables de entorno

- Crea un archivo `.env.local` en la raíz del proyecto con las variables del `.env.example` (no lo subas al repo).

- Para subir los productos de ejemplo a Firestore puedes usar el script incluido:

Windows PowerShell (ejemplo, reemplaza valores):
```powershell
$env:VITE_FIREBASE_PROJECT_ID="vrbags-c27fe"; $env:VITE_FIREBASE_API_KEY="<tu-api-key>"; node scripts/seedProducts.js
```

El script leerá `data/products.json` y creará documentos en la colección `products`.

Comprobaciones y seguridad
- Añade `.env.local` a tu `.gitignore` para no subir credenciales al repo.
- Verifica la colección `orders` en la consola de Firebase para confirmar que las órdenes creadas desde la app o desde `scripts/createOrder.js` existan.
- Archivo con reglas sugeridas: `FIRESTORE_RULES.md`.

Nota de seguridad:
- Se recomienda exigir autenticación (Firebase Auth) para la creación de órdenes y validar los datos en backend o Cloud Functions antes de almacenarlas en Firestore.
