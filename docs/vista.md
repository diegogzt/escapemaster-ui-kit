# 🏞️ Vista

Paleta inspirada en tonos naturales y terrosos, evocando paisajes cálidos y serenos.

**Colores:** `#d56a34` `#3f170e` `#f9f7e9` `#2a0f08` `#fdfcf5` `#f4f1e0` `#c45a28` `#f0ead6`

---

## 🔘 Botones

### Botón Primario

```html
<button
  style="padding: 12px 24px; background-color: #d56a34; color: #f9f7e9; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;"
>
  Primario
</button>
```

### Botón Secundario

```html
<button
  style="padding: 12px 24px; background-color: #3f170e; color: #f0ead6; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;"
>
  Secundario
</button>
```

### Botón Outline

```html
<button
  style="padding: 12px 24px; background-color: transparent; color: #d56a34; border: 2px solid #d56a34; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: background-color 0.2s;"
>
  Outline
</button>
```

### Botón Deshabilitado

```html
<button
  style="padding: 12px 24px; background-color: #f4f1e0; color: #3f170e; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: not-allowed; opacity: 0.6;"
>
  Deshabilitado
</button>
```

---

## 🃏 Tarjetas

### Tarjeta de Reserva

```html
<div
  style="background-color: #fdfcf5; border: 2px solid #f0ead6; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 320px;"
>
  <div style="margin-bottom: 12px;">
    <span
      style="display: inline-block; padding: 4px 12px; background-color: #d56a34; color: #f9f7e9; font-size: 14px; font-weight: 600; border-radius: 20px;"
    >
      Nuevo
    </span>
  </div>
  <h4
    style="font-size: 18px; font-weight: 700; color: #3f170e; margin: 0 0 8px 0;"
  >
    Reserva Express
  </h4>
  <p
    style="color: #2a0f08; margin: 0 0 16px 0; font-size: 14px; line-height: 1.5;"
  >
    Gestiona tus reservas de forma rápida y sencilla.
  </p>
  <button
    style="width: 100%; padding: 10px 16px; background-color: #3f170e; color: #f0ead6; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;"
  >
    Ver más
  </button>
</div>
```

### Tarjeta Simple

```html
<div
  style="background-color: #f9f7e9; border: 2px solid #f0ead6; border-radius: 12px; padding: 20px; max-width: 280px;"
>
  <h5
    style="font-size: 16px; font-weight: 600; color: #3f170e; margin: 0 0 8px 0;"
  >
    Título
  </h5>
  <p style="color: #2a0f08; margin: 0; font-size: 14px;">
    Contenido de la tarjeta.
  </p>
</div>
```

---

## ⚠️ Alertas

### Alerta de Éxito

```html
<div
  style="background-color: #f0ead6; border-left: 4px solid #d56a34; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #3f170e; font-weight: 600; margin: 0; font-size: 14px;">
    ✓ Reserva confirmada exitosamente
  </p>
</div>
```

### Alerta de Advertencia

```html
<div
  style="background-color: #f4f1e0; border-left: 4px solid #c45a28; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #3f170e; font-weight: 600; margin: 0; font-size: 14px;">
    ⚠ Verifica los datos de contacto
  </p>
</div>
```

### Alerta de Información

```html
<div
  style="background-color: #f9f7e9; border-left: 4px solid #3f170e; padding: 16px; border-radius: 4px; max-width: 400px;"
>
  <p style="color: #3f170e; font-weight: 600; margin: 0; font-size: 14px;">
    ℹ Información importante
  </p>
</div>
```

---

## 📝 Formularios

### Input de Texto

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label
    style="display: block; margin-bottom: 8px; color: #3f170e; font-weight: 600; font-size: 14px;"
  >
    Nombre completo
  </label>
  <input
    type="text"
    placeholder="Ej. Juan Pérez"
    style="width: 100%; padding: 10px 12px; border: 2px solid #f0ead6; border-radius: 8px; font-size: 14px; color: #2a0f08; outline: none; transition: border-color 0.2s;"
    onfocus="this.style.borderColor='#d56a34'"
    onblur="this.style.borderColor='#f0ead6'"
  />
</div>
```

### Checkbox

```html
<div style="display: flex; align-items: center; gap: 8px;">
  <input
    type="checkbox"
    id="terms"
    style="accent-color: #d56a34; width: 16px; height: 16px; cursor: pointer;"
  />
  <label for="terms" style="color: #3f170e; font-size: 14px; cursor: pointer;">
    Acepto los términos y condiciones
  </label>
</div>
```
