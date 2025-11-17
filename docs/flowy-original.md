# 🌊 Flowy Original

Paleta principal del sistema de diseño con tonos naranjas vibrantes y cálidos.

## 🎨 Colores

```css
--primary: #e46f20;    /* Zest - Naranja principal */
--secondary: #fcb72b;  /* My Sin - Amarillo dorado */
--accent: #cc5803;     /* Red Stage - Naranja oscuro */
--dark: #582b11;       /* Jambalaya - Marrón oscuro */
--light: #f6e6c4;      /* Sidecar - Beige claro */
--beige: #e7d7c9;      /* Bone - Beige medio */
```

## 🔘 Botones

### Botón Primario
```html
<button class="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Primario
</button>
```

```css
.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: #e46f20;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
}
```

### Botón Secundario
```html
<button class="px-6 py-3 bg-secondary text-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Secundario
</button>
```

```css
.btn-secondary {
  padding: 0.75rem 1.5rem;
  background-color: #fcb72b;
  color: #582b11;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn-secondary:hover {
  opacity: 0.9;
}
```

### Botón Accent
```html
<button class="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Accent
</button>
```

```css
.btn-accent {
  padding: 0.75rem 1.5rem;
  background-color: #cc5803;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn-accent:hover {
  opacity: 0.9;
}
```

### Botón Outline
```html
<button class="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-light transition-colors">
  Outline
</button>
```

```css
.btn-outline {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e46f20;
  color: #e46f20;
  background-color: transparent;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-outline:hover {
  background-color: #f6e6c4;
}
```

## 🃏 Tarjetas

### Tarjeta con Badge
```html
<div class="bg-white border-2 border-beige rounded-xl p-6 shadow-sm">
  <div class="mb-3">
    <span class="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
      Nuevo
    </span>
  </div>
  <h4 class="text-lg font-bold text-dark mb-2">Reserva Express</h4>
  <p class="text-gray-700 mb-4">
    Gestiona tus reservas de forma rápida y sencilla.
  </p>
  <button class="w-full px-4 py-2 bg-secondary text-dark rounded-lg font-semibold hover:opacity-90">
    Ver más
  </button>
</div>
```

```css
.card {
  background-color: #ffffff;
  border: 2px solid #e7d7c9;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #e46f20;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #582b11;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #767676;
  margin-bottom: 1rem;
}

.card-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #fcb72b;
  color: #582b11;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.card-button:hover {
  opacity: 0.9;
}
```

## ⚠️ Alertas

### Alerta de Éxito
```html
<div class="bg-light border-l-4 border-primary p-4 rounded">
  <p class="text-dark font-semibold">✓ Reserva confirmada exitosamente</p>
</div>
```

```css
.alert-success {
  background-color: #f6e6c4;
  border-left: 4px solid #e46f20;
  padding: 1rem;
  border-radius: 0.25rem;
}

.alert-success p {
  color: #582b11;
  font-weight: 600;
  margin: 0;
}
```

### Alerta de Advertencia
```html
<div class="bg-secondary bg-opacity-20 border-l-4 border-secondary p-4 rounded">
  <p class="text-dark font-semibold">⚠ Verifica los datos de contacto</p>
</div>
```

```css
.alert-warning {
  background-color: rgba(252, 183, 43, 0.2);
  border-left: 4px solid #fcb72b;
  padding: 1rem;
  border-radius: 0.25rem;
}

.alert-warning p {
  color: #582b11;
  font-weight: 600;
  margin: 0;
}
```

### Alerta de Información
```html
<div class="bg-accent bg-opacity-20 border-l-4 border-accent p-4 rounded">
  <p class="text-dark font-semibold">ℹ Nueva actualización disponible</p>
</div>
```

```css
.alert-info {
  background-color: rgba(204, 88, 3, 0.2);
  border-left: 4px solid #cc5803;
  padding: 1rem;
  border-radius: 0.25rem;
}

.alert-info p {
  color: #582b11;
  font-weight: 600;
  margin: 0;
}
```

## 📝 Formularios

### Input de Texto
```html
<div class="mb-4">
  <label class="block text-dark font-semibold mb-2">Nombre</label>
  <input 
    type="text" 
    class="w-full px-4 py-2 border-2 border-beige rounded-lg focus:border-primary focus:outline-none"
    placeholder="Ingresa tu nombre"
  />
</div>
```

```css
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  color: #582b11;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid #e7d7c9;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #e46f20;
  outline: none;
}

.form-input::placeholder {
  color: #a0a0a0;
}
```

### Select
```html
<div class="mb-4">
  <label class="block text-dark font-semibold mb-2">Categoría</label>
  <select class="w-full px-4 py-2 border-2 border-beige rounded-lg focus:border-primary focus:outline-none">
    <option>Selecciona una opción</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
  </select>
</div>
```

```css
.form-select {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid #e7d7c9;
  border-radius: 0.5rem;
  background-color: #ffffff;
  transition: border-color 0.2s;
}

.form-select:focus {
  border-color: #e46f20;
  outline: none;
}
```

## 📅 Calendario con Reservas

```html
<div class="bg-white border-2 border-beige rounded-xl p-8">
  <div class="grid grid-cols-7 gap-2 mb-4">
    <div class="text-center font-semibold text-dark">Dom</div>
    <div class="text-center font-semibold text-dark">Lun</div>
    <div class="text-center font-semibold text-dark">Mar</div>
    <div class="text-center font-semibold text-dark">Mié</div>
    <div class="text-center font-semibold text-dark">Jue</div>
    <div class="text-center font-semibold text-dark">Vie</div>
    <div class="text-center font-semibold text-dark">Sáb</div>
  </div>
  
  <div class="grid grid-cols-7 gap-2">
    <!-- Día con reserva -->
    <div class="p-2 border border-beige rounded min-h-20">
      <div class="font-semibold text-dark mb-1">1</div>
      <div class="text-xs p-1 rounded mb-1" style="background-color: #e46f20; color: white;">
        11:45 Alice
      </div>
      <div class="text-xs p-1 rounded" style="background-color: #fcb72b; color: #582b11;">
        13:45 Party
      </div>
    </div>
    <!-- Más días... -->
  </div>
</div>
```

```css
.calendar-container {
  background-color: #ffffff;
  border: 2px solid #e7d7c9;
  border-radius: 0.75rem;
  padding: 2rem;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.calendar-day-name {
  text-align: center;
  font-weight: 600;
  color: #582b11;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-day {
  padding: 0.5rem;
  border: 1px solid #e7d7c9;
  border-radius: 0.25rem;
  min-height: 5rem;
}

.calendar-day-number {
  font-weight: 600;
  color: #582b11;
  margin-bottom: 0.25rem;
}

.calendar-reservation {
  font-size: 0.75rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
}

.calendar-reservation-primary {
  background-color: #e46f20;
  color: #ffffff;
}

.calendar-reservation-secondary {
  background-color: #fcb72b;
  color: #582b11;
}
```

## 🎯 Uso con Tailwind CSS

```html
<!-- Incluir en tu HTML -->
<link href="https://cdn.tailwindcss.com" rel="stylesheet">

<!-- Configurar colores personalizados -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#e46f20',
          secondary: '#fcb72b',
          accent: '#cc5803',
          dark: '#582b11',
          light: '#f6e6c4',
          beige: '#e7d7c9',
        }
      }
    }
  }
</script>
```
