# ⚡ Guía de Inicio Rápido

## 🎯 Tu UI Kit está listo en: `/Users/dgtovar/work/ui-kit`

### 1️⃣ **Ver la Demo Interactiva**

```bash
cd /Users/dgtovar/work/ui-kit
npm run dev
```

Luego abre: **http://localhost:5173**

Verás todos los 18 componentes en acción:

- Botones con variantes y tamaños
- Formularios completos (Input, Select, Checkbox, etc.)
- Alertas de diferentes tipos
- Tablas con datos
- Cards, Badges, Avatar
- Y mucho más...

---

### 2️⃣ **Entender la Estructura**

```
src/
├── components/          ← Todos los componentes React (18 en total)
├── utils/              ← Función cn() para merge de clases Tailwind
└── App.tsx             ← Demostración interactiva
```

**Todos los componentes usan Tailwind CSS** - no hay estilos inline.

---

### 3️⃣ **Usar en Tu Propio Proyecto**

#### Opción A: Copiar Componentes

```bash
# Copia los componentes a tu proyecto
cp -r /Users/dgtovar/work/ui-kit/src/components tu-proyecto/src/
cp -r /Users/dgtovar/work/ui-kit/src/utils tu-proyecto/src/
```

#### Opción B: Usar como Librería

```bash
# Build the library
cd /Users/dgtovar/work/ui-kit
npm run build

# En tu proyecto, instala localmente:
npm install /Users/dgtovar/work/ui-kit
```

**Importante:** Tu proyecto destino **DEBE tener Tailwind CSS configurado**

Ver `PORTABILITY.md` para instrucciones detalladas.

---

### 4️⃣ **Personalizar Colores**

Los colores están en `tailwind.config.js`:

```javascript
colors: {
  primary: '#e46f20',    // Cambiar a tu color
  secondary: '#fcb72b',  // Cambiar a tu color
  // ... más colores
}
```

Cambia estos valores y **todos los componentes se ajustarán automáticamente**.

---

### 5️⃣ **Build para Producción**

```bash
cd /Users/dgtovar/work/ui-kit
npm run build
```

Genera:

- `dist/flhour-ui-kit.js` (ES Module)
- `dist/flhour-ui-kit.umd.js` (UMD Format)
- TypeScript definitions

---

## 📦 Componentes Disponibles

```typescript
import {
  // Botones
  Button,
  Link,

  // Alertas
  Alert,
  Spinner,
  ProgressBar,

  // Formularios
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Toggle,

  // Visualización
  Badge,
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  Table,
  List,
  Tabs,
} from "./components";
```

---

## 📚 Documentación

- **README.md** - Guía completa y ejemplos
- **PORTABILITY.md** - Cómo usar en otros proyectos
- **COMPLETION_SUMMARY.md** - Resumen técnico del proyecto

---

## 🔧 Verificar Herramientas

```bash
# Verificar que Node.js está instalado
node --version

# Verificar npm
npm --version

# Verificar dependencias
cd /Users/dgtovar/work/ui-kit
npm list react tailwindcss
```

---

## ⚠️ Si algo no funciona...

### "El servidor no inicia"

```bash
npm install  # Reinstalar dependencias
npm run dev  # Intentar de nuevo
```

### "Los estilos no se aplican"

Asegúrate de que en el proyecto destino tengas:

1. `tailwind.config.js`
2. `postcss.config.js`
3. Directivas de Tailwind en `index.css` (@tailwind ...)

### "TypeScript dice que no encuentra tipos"

```bash
npm install --save-dev typescript
npm run type-check  # Verificar tipos
```

---

## 🎨 Ejemplo Rápido de Uso

```tsx
import { Button, Input, Card } from "./components";

export function MyApp() {
  return (
    <Card>
      <h2 className="text-primary text-xl font-bold mb-4">Bienvenido</h2>
      <Input label="Tu nombre" placeholder="Juan..." />
      <Button variant="primary" className="mt-4">
        Enviar
      </Button>
    </Card>
  );
}
```

---

## 📞 Próximos Pasos

- [ ] Ejecuta `npm run dev` para ver la demo
- [ ] Explora los componentes en `src/components/`
- [ ] Lee `PORTABILITY.md` si quieres usar en otro proyecto
- [ ] Personaliza los colores en `tailwind.config.js`
- [ ] Adapta a tu proyecto según necesites

---

**¡Listo! Tu UI Kit está completamente funcional y listo para usar.** 🚀

Para más información, consulta los archivos de documentación incluidos.
