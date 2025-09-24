Firestore rules (sugeridas)

Reglas sugeridas para un e-commerce simple:

1) Lectura pública de `products`, escritura prohibida por clientes:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Productos: lectura pública
    match /products/{productId} {
      allow read: if true;
      allow write: if false;
    }

    // Orders: permitir creación solo a usuarios autenticados
    match /orders/{orderId} {
      allow create: if request.auth != null;
      allow read, update, delete: if false; // sólo backoffice o funciones deben leer
    }
  }
}
```

Notas:
- La condición `request.auth != null || true` está como ejemplo; en producción deberías validar el usuario autenticado o restringir mediante Cloud Functions.
- Considera delegar la validación adicional (validar campos, precios, stock) a Cloud Functions o a reglas más estrictas.
