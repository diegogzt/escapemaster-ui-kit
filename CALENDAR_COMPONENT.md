# Calendar Component Documentation

## Descripción

El componente `Calendar` es un calendario interactivo totalmente funcional que sigue la paleta de colores de Flhour UI Kit. Permite seleccionar fechas con distintos tamaños y variantes de color.

## Características

✅ **3 Tamaños**: sm (pequeño), md (mediano), lg (grande)
✅ **3 Variantes de Color**: primary, secondary, accent
✅ **Navegación de Meses**: Botones para ir a mes anterior/siguiente
✅ **Selección de Fechas**: Clickeable y con estado seleccionado
✅ **Fecha Actual**: Resaltada con borde
✅ **Fechas Pasadas**: Opcionalmente deshabilitadas
✅ **Pie de Página**: Muestra la fecha seleccionada en formato legible
✅ **Responsive**: Adaptable a diferentes tamaños de pantalla

## Props

```typescript
interface CalendarProps {
  size?: "sm" | "md" | "lg"; // Tamaño del calendario (default: 'md')
  selectedDate?: Date; // Fecha pre-seleccionada
  onDateSelect?: (date: Date) => void; // Callback cuando se selecciona una fecha
  variant?: "primary" | "secondary" | "accent"; // Color del calendario
  showHeader?: boolean; // Mostrar header del mes/año (default: true)
  disablePastDates?: boolean; // Deshabilitar fechas pasadas (default: false)
  className?: string; // Clases CSS adicionales
}
```

## Uso

### Calendario Básico

```tsx
import { Calendar } from "./components";

function App() {
  return <Calendar size="md" variant="primary" />;
}
```

### Con Selección de Fecha

```tsx
import { Calendar } from "./components";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      size="md"
      variant="primary"
      selectedDate={selectedDate}
      onDateSelect={setSelectedDate}
    />
  );
}
```

### Sin Fechas Pasadas

```tsx
<Calendar size="md" variant="primary" disablePastDates={true} />
```

### Con Diferentes Tamaños

```tsx
<div className="grid grid-cols-3 gap-4">
  <Calendar size="sm" variant="primary" />
  <Calendar size="md" variant="secondary" />
  <Calendar size="lg" variant="accent" />
</div>
```

## Tamaños

| Tamaño | Ancho | Uso                                |
| ------ | ----- | ---------------------------------- |
| `sm`   | 16rem | Calendarios compactos, sidebars    |
| `md`   | 20rem | Calendarios estándar (default)     |
| `lg`   | 24rem | Calendarios destacados, full-width |

## Variantes de Color

### Primary (Zest - #E46F20)

```tsx
<Calendar size="md" variant="primary" />
```

- Color principal del diseño
- Ideal para calendarios destacados

### Secondary (My Sin - #FCB72B)

```tsx
<Calendar size="md" variant="secondary" />
```

- Color secundario
- Bueno para calendarios alternativos

### Accent (Red Stage - #CC5803)

```tsx
<Calendar size="md" variant="accent" />
```

- Color de acento
- Para énfasis adicional

## Comportamiento

### Navegación

- **Flecha Izquierda (←)**: Ir al mes anterior
- **Flecha Derecha (→)**: Ir al mes siguiente
- El header muestra el mes y año actual

### Estados de Fecha

- **Fecha Seleccionada**: Fondo de color sólido
- **Fecha Actual (Hoy)**: Borde de color (si no está seleccionada)
- **Fechas Pasadas**: Deshabilitadas (si `disablePastDates={true}`)
- **Fechas Hover**: Efecto hover visual

### Footer

- Muestra la fecha seleccionada
- Formato: "viernes, 16 de noviembre de 2025"
- Se actualiza al seleccionar una fecha

## Estilos de Diseño

El calendario utiliza la paleta de colores de Figma:

```
- Fondo: #FFFFFF (white)
- Borde: #E7D7C9 (Bone)
- Texto: #582B11 (Jambalaya)
- Texto Header: #E46F20, #FCB72B o #CC5803 según variante
```

## Ejemplos Avanzados

### Calendario con Rango de Fechas

```tsx
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(null);

function handleStartDate(date) {
  setStartDate(date);
  if (endDate && date > endDate) {
    setEndDate(null);
  }
}

function handleEndDate(date) {
  if (date < startDate) return;
  setEndDate(date);
}

return (
  <div className="flex gap-4">
    <Calendar
      selectedDate={startDate}
      onDateSelect={handleStartDate}
      variant="primary"
    />
    <Calendar
      selectedDate={endDate || new Date()}
      onDateSelect={handleEndDate}
      variant="secondary"
    />
  </div>
);
```

### Calendario en Modal/Popover

```tsx
import { useState } from "react";
import { Calendar, Button } from "./components";

function DatePickerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(new Date());

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Seleccionar Fecha: {selected.toLocaleDateString()}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <Calendar
              selectedDate={selected}
              onDateSelect={(date) => {
                setSelected(date);
                setIsOpen(false);
              }}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
```

## Accesibilidad

- Botones con navegación clara (←, →)
- Texto descriptivo en el footer
- Colores contrastados según variante
- Estados visuales para fechas deshabilitadas

## Notas de Implementación

- El calendario es totalmente funcional sin dependencias externas de librerías de calendario
- Soporta localización con `toLocaleString` en español
- Los eventos son controlados mediante callbacks (`onDateSelect`)
- El componente maneja su propio estado interno para navegación de meses
- Las clases de Tailwind CSS hacen el responsive automático

## Compatibilidad

- ✅ React 18.2.0+
- ✅ TypeScript 5.3+
- ✅ Tailwind CSS 3.3.6+
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
