# 🌸 Warm Pastel

Paleta con tonos cálidos pastel suaves y acogedores.

## 🎨 Colores

```css
--warm-primary: #FFB5A7;   /* Rosa coral suave */
--warm-secondary: #FCD5CE; /* Rosa pálido */
--warm-accent: #F8EDEB;    /* Blanco rosado */
--warm-dark: #E8B4B8;      /* Rosa empolvado */
--warm-light: #FFF5F3;     /* Blanco cálido */
--warm-beige: #FFEEF0;     /* Beige rosado */
```

## 🔘 Botones

### Botón Primario
```html
<button class="px-6 py-3 bg-warm-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Primario
</button>
```

```css
.btn-warm-primary {
  padding: 0.75rem 1.5rem;
  background-color: #FFB5A7;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn-warm-primary:hover {
  opacity: 0.9;
}
```

### Botón Secundario
```html
<button class="px-6 py-3 bg-warm-secondary text-warm-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Secundario
</button>
```

```css
.btn-warm-secondary {
  padding: 0.75rem 1.5rem;
  background-color: #FCD5CE;
  color: #E8B4B8;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
```

### Botón Outline
```html
<button class="px-6 py-3 border-2 border-warm-primary text-warm-primary rounded-lg font-semibold hover:bg-warm-light transition-colors">
  Outline
</button>
```

```css
.btn-warm-outline {
  padding: 0.75rem 1.5rem;
  border: 2px solid #FFB5A7;
  color: #FFB5A7;
  background-color: transparent;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-warm-outline:hover {
  background-color: #FFF5F3;
}
```

## 🃏 Tarjetas

```html
<div class="bg-white border-2 border-warm-beige rounded-xl p-6 shadow-sm">
  <div class="mb-3">
    <span class="px-3 py-1 bg-warm-primary text-white text-sm font-semibold rounded-full">
      Nuevo
    </span>
  </div>
  <h4 class="text-lg font-bold text-warm-dark mb-2">Reserva Express</h4>
  <p class="text-gray-700 mb-4">
    Gestiona tus reservas de forma rápida y sencilla.
  </p>
  <button class="w-full px-4 py-2 bg-warm-secondary text-warm-dark rounded-lg font-semibold hover:opacity-90">
    Ver más
  </button>
</div>
```

```css
.card-warm {
  background-color: #ffffff;
  border: 2px solid #FFEEF0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-warm-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #FFB5A7;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
}
```

## ⚠️ Alertas

### Alerta de Éxito
```html
<div class="bg-warm-light border-l-4 border-warm-primary p-4 rounded">
  <p class="text-warm-dark font-semibold">✓ Reserva confirmada exitosamente</p>
</div>
```

```css
.alert-warm-success {
  background-color: #FFF5F3;
  border-left: 4px solid #FFB5A7;
  padding: 1rem;
  border-radius: 0.25rem;
}
```

### Alerta de Advertencia
```html
<div class="bg-warm-secondary bg-opacity-20 border-l-4 border-warm-secondary p-4 rounded">
  <p class="text-warm-dark font-semibold">⚠ Verifica los datos de contacto</p>
</div>
```

```css
.alert-warm-warning {
  background-color: rgba(252, 213, 206, 0.2);
  border-left: 4px solid #FCD5CE;
  padding: 1rem;
  border-radius: 0.25rem;
}
```

## 📝 Formularios

```html
<div class="mb-4">
  <label class="block text-warm-dark font-semibold mb-2">Nombre</label>
  <input 
    type="text" 
    class="w-full px-4 py-2 border-2 border-warm-beige rounded-lg focus:border-warm-primary focus:outline-none"
    placeholder="Ingresa tu nombre"
  />
</div>
```

```css
.form-input-warm {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid #FFEEF0;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.form-input-warm:focus {
  border-color: #FFB5A7;
  outline: none;
}
```

## 📅 Calendario

```html
<div class="bg-white border-2 border-warm-beige rounded-xl p-8">
  <div class="grid grid-cols-7 gap-2">
    <div class="p-2 border border-warm-beige rounded min-h-20">
      <div class="font-semibold text-warm-dark mb-1">1</div>
      <div class="text-xs p-1 rounded" style="background-color: #FFB5A7; color: white;">
        11:45 Alice
      </div>
    </div>
  </div>
</div>
```

```css
.calendar-warm {
  background-color: #ffffff;
  border: 2px solid #FFEEF0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.calendar-warm-reservation {
  background-color: #FFB5A7;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
}
```
