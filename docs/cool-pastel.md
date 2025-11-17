# ❄️ Cool Pastel

Paleta con tonos fríos pastel refrescantes y serenos.

## 🎨 Colores

```css
--cool-primary: #A7C7E7;   /* Azul cielo pastel */
--cool-secondary: #B8E0D2; /* Verde menta pastel */
--cool-accent: #D6EADF;    /* Verde muy claro */
--cool-dark: #89B5D6;      /* Azul medio */
--cool-light: #E8F4F8;     /* Azul muy claro */
--cool-beige: #D4E7ED;     /* Azul grisáceo */
```

## 🔘 Botones

### Botón Primario
```html
<button class="px-6 py-3 bg-cool-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Primario
</button>
```

```css
.btn-cool-primary {
  padding: 0.75rem 1.5rem;
  background-color: #A7C7E7;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
```

### Botón Secundario
```html
<button class="px-6 py-3 bg-cool-secondary text-cool-dark rounded-lg font-semibold hover:opacity-90 transition-opacity">
  Secundario
</button>
```

```css
.btn-cool-secondary {
  padding: 0.75rem 1.5rem;
  background-color: #B8E0D2;
  color: #89B5D6;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
```

## 🃏 Tarjetas

```html
<div class="bg-white border-2 border-cool-beige rounded-xl p-6 shadow-sm">
  <div class="mb-3">
    <span class="px-3 py-1 bg-cool-primary text-white text-sm font-semibold rounded-full">
      Nuevo
    </span>
  </div>
  <h4 class="text-lg font-bold text-cool-dark mb-2">Reserva Express</h4>
  <p class="text-gray-700 mb-4">
    Gestiona tus reservas de forma rápida y sencilla.
  </p>
  <button class="w-full px-4 py-2 bg-cool-secondary text-cool-dark rounded-lg font-semibold hover:opacity-90">
    Ver más
  </button>
</div>
```

```css
.card-cool {
  background-color: #ffffff;
  border: 2px solid #D4E7ED;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

## ⚠️ Alertas

```html
<div class="bg-cool-light border-l-4 border-cool-primary p-4 rounded">
  <p class="text-cool-dark font-semibold">✓ Reserva confirmada exitosamente</p>
</div>
```

```css
.alert-cool-success {
  background-color: #E8F4F8;
  border-left: 4px solid #A7C7E7;
  padding: 1rem;
  border-radius: 0.25rem;
}
```

## 📝 Formularios

```html
<input 
  type="text" 
  class="w-full px-4 py-2 border-2 border-cool-beige rounded-lg focus:border-cool-primary focus:outline-none"
  placeholder="Ingresa tu nombre"
/>
```

```css
.form-input-cool {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid #D4E7ED;
  border-radius: 0.5rem;
}

.form-input-cool:focus {
  border-color: #A7C7E7;
  outline: none;
}
```
