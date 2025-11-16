# 📦 Guía de Portabilidad - UI Kit

Esta guía te ayudará a extraer y utilizar los componentes de este UI Kit en otros proyectos React.

## 🎯 Objetivos de Portabilidad

Este UI Kit está diseñado para ser **altamente portable**. Los componentes:

- ✅ Usan **Tailwind CSS** (fácil de personalizar vía configuración)
- ✅ Tienen **cero dependencias externas** (solo React)
- ✅ Están **bien tipados** con TypeScript
- ✅ Son **independientes** entre sí
- ✅ Usan **clases CSS** en lugar de estilos inline

## 📋 Requisitos en el Proyecto Destino

Para usar estos componentes en otro proyecto, necesitas:

1. **React 18+**
2. **TypeScript 5+** (opcional pero recomendado)
3. **Tailwind CSS 3+**

```bash
npm install react react-dom tailwindcss typescript
npm install -D @tailwindcss/forms autoprefixer postcss
```

## 📂 Qué Copiar

### Opción 1: Copiar Componentes Individuales

Si solo necesitas algunos componentes:

1. Copia la carpeta `src/components/` a tu proyecto
2. Copia la carpeta `src/utils/` (necesaria para la función `cn()`)
3. Asegúrate de tener Tailwind CSS configurado

**Ejemplo:**

```
tu-proyecto/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── cn.ts
│   │   └── index.ts
│   └── ...
```

### Opción 2: Usar como Librería (Recomendado)

```bash
# En la raíz del UI Kit
npm run build

# En tu proyecto destino
npm install /ruta/a/ui-kit/dist
```

## 🔧 Configuración de Tailwind

Tu proyecto destino **debe tener** Tailwind CSS configurado. Si no lo tiene:

### 1. Instala Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configura `tailwind.config.js`

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e46f20",
        secondary: "#fcb72b",
        accent: "#cc5803",
        dark: "#582b11",
        light: "#f6e6c4",
        beige: "#e7d7c9",
      },
    },
  },
  plugins: [],
};
```

### 3. Importa Directivas de Tailwind en `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 💻 Uso en tu Proyecto

### Importar Componentes

```tsx
import { Button, Input, Card } from "./components";

export function MyApp() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Nombre" placeholder="Tu nombre" />
    </div>
  );
}
```

### Personalizar Colores

Modifica `tailwind.config.js` en tu proyecto:

```javascript
extend: {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
    // ... más colores
  }
}
```

Los componentes se ajustarán automáticamente al nuevo paleta de colores.

## 🎨 Personalización por Componente

### Button - Agregar un Nuevo Variant

En `src/components/Button.tsx`, edita `variantStyles`:

```tsx
const variantStyles = {
  primary: "bg-primary text-white hover:bg-accent",
  secondary: "bg-secondary text-dark hover:bg-hover",
  accent: "bg-accent text-white hover:bg-dark",
  // Agrega tu variante aquí
  custom: "bg-purple-500 text-white hover:bg-purple-600",
};
```

### Input - Cambiar Estilos por Defecto

Modifica las clases Tailwind en `src/components/Input.tsx`:

```tsx
className={cn(
  'w-full px-3 py-2 border-2 rounded-lg text-base transition-colors bg-white text-dark',
  // Añade más clases según necesites
  'shadow-sm', // nuevo
  'font-sans', // nuevo
)}
```

## ⚙️ Estructura de Archivos a Mantener

Para que la portabilidad funcione correctamente, mantén esta estructura:

```
componentes/
├── Button.tsx          # Independiente ✓
├── Input.tsx          # Usa cn() utility ✓
├── Card.tsx           # Usa cn() utility ✓
├── Table.tsx          # Usa cn() utility ✓
├── Avatar.tsx         # Independiente ✓
├── Badge.tsx          # Usa cn() utility ✓
├── Alert.tsx          # Usa cn() utility ✓
├── Toggle.tsx         # Independiente ✓
├── Spinner.tsx        # Independiente ✓
├── ProgressBar.tsx    # Independiente ✓
├── Select.tsx         # Usa cn() utility ✓
├── Textarea.tsx       # Usa cn() utility ✓
├── Checkbox.tsx       # Usa cn() utility ✓
├── Radio.tsx          # Usa cn() utility ✓
├── Link.tsx           # Usa cn() utility ✓
├── Tabs.tsx           # Usa cn() utility ✓
├── List.tsx           # Usa cn() utility ✓
└── index.ts           # Exporta todos ✓

utils/
├── cn.ts              # REQUERIDO para todos ✓
└── index.ts           # Re-exporta cn ✓
```

## 🔄 Actualizar Componentes

Si actualizar los componentes en tu proyecto:

### Desde Copia Local

```bash
# Copia manualmente los archivos nuevos/actualizados
cp /ruta/ui-kit/src/components/Button.tsx ./src/components/
```

### Desde Librería NPM

```bash
npm update @tu-org/ui-kit
```

## ✅ Checklist de Portabilidad

- [ ] Tailwind CSS instalado y configurado
- [ ] Colores extendidos en `tailwind.config.js`
- [ ] Directivas de Tailwind en `index.css`
- [ ] Carpeta `utils/` copiada
- [ ] Carpeta `components/` copiada
- [ ] TypeScript configurado (opcional pero recomendado)
- [ ] Probados los componentes en tu proyecto

## 🐛 Solución de Problemas

### "No se aplican los estilos"

**Causa:** Tailwind CSS no está configurado correctamente

**Solución:** Verifica que:

1. `tailwind.config.js` existe
2. `content` incluye tu carpeta de componentes
3. Las directivas de Tailwind están en `index.css`

### "Clase no reconocida"

**Causa:** Clase Tailwind no está en tu configuración

**Solución:** Agrega la clase a `tailwind.config.js`:

```javascript
safelist: [
  'bg-primary', 'text-primary', 'border-primary', // etc
],
```

### "cn() no está definida"

**Causa:** Falta el archivo `utils/cn.ts`

**Solución:** Copia la carpeta `utils/` del UI Kit

## 📚 Recursos

- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de React 18](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Soporte

Si encuentras problemas al portar los componentes:

1. Verifica que tienes todas las dependencias instaladas
2. Comprueba la configuración de Tailwind
3. Asegúrate de copiar la carpeta `utils/`
4. Revisa que los imports sean correctos

---

**¡Listo para portar tus componentes a otros proyectos!** 🚀
