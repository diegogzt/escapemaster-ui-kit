# 🎯 Contrast

Paleta de alto contraste para máxima legibilidad y accesibilidad.

## 🎨 Colores

```css
--contrast-primary: #FF6B6B;   /* Rojo coral */
--contrast-secondary: #4ECDC4; /* Turquesa */
--contrast-accent: #FFE66D;    /* Amarillo brillante */
--contrast-dark: #F38181;      /* Rosa salmón */
--contrast-light: #FFF9E5;     /* Amarillo muy claro */
--contrast-beige: #FFE5E5;     /* Rosa muy claro */
```

## 🔘 Botones

```html
<button class="px-6 py-3 bg-contrast-primary text-white rounded-lg font-semibold hover:opacity-90">
  Primario
</button>

<button class="px-6 py-3 bg-contrast-secondary text-white rounded-lg font-semibold hover:opacity-90">
  Secundario
</button>

<button class="px-6 py-3 bg-contrast-accent text-contrast-dark rounded-lg font-semibold hover:opacity-90">
  Accent
</button>
```

```css
.btn-contrast-primary {
  background-color: #FF6B6B;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.btn-contrast-secondary {
  background-color: #4ECDC4;
  color: #ffffff;
}

.btn-contrast-accent {
  background-color: #FFE66D;
  color: #F38181;
}
```

## 🃏 Tarjetas

```html
<div class="bg-white border-2 border-contrast-beige rounded-xl p-6 shadow-sm">
  <span class="px-3 py-1 bg-contrast-primary text-white text-sm font-semibold rounded-full">
    Nuevo
  </span>
  <h4 class="text-lg font-bold text-contrast-dark mb-2">Reserva Express</h4>
  <p class="text-gray-700 mb-4">Gestiona tus reservas de forma rápida.</p>
  <button class="w-full px-4 py-2 bg-contrast-secondary text-white rounded-lg font-semibold">
    Ver más
  </button>
</div>
```

## ⚠️ Alertas

```html
<div class="bg-contrast-light border-l-4 border-contrast-primary p-4 rounded">
  <p class="text-contrast-dark font-semibold">✓ Operación exitosa</p>
</div>

<div class="bg-contrast-secondary bg-opacity-20 border-l-4 border-contrast-secondary p-4 rounded">
  <p class="text-contrast-dark font-semibold">⚠ Advertencia importante</p>
</div>
```

```css
.alert-contrast {
  background-color: #FFF9E5;
  border-left: 4px solid #FF6B6B;
  padding: 1rem;
  border-radius: 0.25rem;
}
```

## 📝 Formularios

```html
<input 
  type="text" 
  class="w-full px-4 py-2 border-2 border-contrast-beige rounded-lg focus:border-contrast-primary"
  placeholder="Nombre"
/>
```

```css
.form-input-contrast {
  border: 2px solid #FFE5E5;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.form-input-contrast:focus {
  border-color: #FF6B6B;
  outline: none;
}
```
