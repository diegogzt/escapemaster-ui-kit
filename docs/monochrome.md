# ⚫ Monochrome

Paleta monocromática elegante en escala de grises.

## 🎨 Colores

```css
--monochrome-primary: #2C3E50;   /* Gris azulado oscuro */
--monochrome-secondary: #34495E; /* Gris medio */
--monochrome-accent: #7F8C8D;    /* Gris claro */
--monochrome-dark: #1A252F;      /* Casi negro */
--monochrome-light: #ECF0F1;     /* Gris muy claro */
--monochrome-beige: #BDC3C7;     /* Gris plateado */
```

## 🔘 Botones

```html
<button class="px-6 py-3 bg-monochrome-primary text-white rounded-lg font-semibold hover:opacity-90">
  Primario
</button>

<button class="px-6 py-3 bg-monochrome-secondary text-white rounded-lg font-semibold hover:opacity-90">
  Secundario
</button>

<button class="px-6 py-3 bg-monochrome-accent text-white rounded-lg font-semibold hover:opacity-90">
  Accent
</button>
```

```css
.btn-monochrome-primary {
  background-color: #2C3E50;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.btn-monochrome-secondary {
  background-color: #34495E;
  color: #ffffff;
}

.btn-monochrome-accent {
  background-color: #7F8C8D;
  color: #ffffff;
}
```

## 🃏 Tarjetas

```html
<div class="bg-white border-2 border-monochrome-beige rounded-xl p-6 shadow-sm">
  <span class="px-3 py-1 bg-monochrome-primary text-white text-sm font-semibold rounded-full">
    Nuevo
  </span>
  <h4 class="text-lg font-bold text-monochrome-dark mb-2">Reserva Express</h4>
  <p class="text-gray-700 mb-4">Sistema profesional de gestión.</p>
  <button class="w-full px-4 py-2 bg-monochrome-secondary text-white rounded-lg font-semibold">
    Ver más
  </button>
</div>
```

```css
.card-monochrome {
  background-color: #ffffff;
  border: 2px solid #BDC3C7;
  border-radius: 0.75rem;
  padding: 1.5rem;
}
```

## ⚠️ Alertas

```html
<div class="bg-monochrome-light border-l-4 border-monochrome-primary p-4 rounded">
  <p class="text-monochrome-dark font-semibold">✓ Operación completada</p>
</div>
```

```css
.alert-monochrome {
  background-color: #ECF0F1;
  border-left: 4px solid #2C3E50;
  padding: 1rem;
  border-radius: 0.25rem;
}
```

## 📝 Formularios

```html
<input 
  type="text" 
  class="w-full px-4 py-2 border-2 border-monochrome-beige rounded-lg focus:border-monochrome-primary"
/>
```

```css
.form-input-monochrome {
  border: 2px solid #BDC3C7;
  padding: 0.5rem 1rem;
}

.form-input-monochrome:focus {
  border-color: #2C3E50;
}
```
