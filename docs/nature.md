# 🌿 Nature

Paleta inspirada en la naturaleza con tonos verdes frescos.

**Colores:** `#2D6A4F` `#52B788` `#95D5B2` `#1B4332` `#D8F3DC` `#B7E4C7`

---

## 🔘 Botones

### Botón Primario
```html
<button style="padding: 12px 24px; background-color: #2D6A4F; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Primario
</button>
```

### Botón Secundario
```html
<button style="padding: 12px 24px; background-color: #52B788; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Secundario
</button>
```

### Botón Menta
```html
<button style="padding: 12px 24px; background-color: #95D5B2; color: #1B4332; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Menta
</button>
```

### Botón Outline
```html
<button style="padding: 12px 24px; background-color: transparent; color: #2D6A4F; border: 2px solid #2D6A4F; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
  Outline
</button>
```

---

## 🃏 Tarjetas

### Tarjeta de Reserva
```html
<div style="background-color: #ffffff; border: 2px solid #B7E4C7; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 320px;">
  <div style="margin-bottom: 12px;">
    <span style="display: inline-block; padding: 4px 12px; background-color: #2D6A4F; color: #ffffff; font-size: 14px; font-weight: 600; border-radius: 20px;">
      Eco
    </span>
  </div>
  <h4 style="font-size: 18px; font-weight: 700; color: #1B4332; margin: 0 0 8px 0;">Experiencia Natural</h4>
  <p style="color: #6B7280; margin: 0 0 16px 0; font-size: 14px; line-height: 1.5;">
    Conecta con la naturaleza y relájate.
  </p>
  <button style="width: 100%; padding: 10px 16px; background-color: #52B788; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;">
    Ver más
  </button>
</div>
```

### Tarjeta Simple
```html
<div style="background-color: #D8F3DC; border: 2px solid #B7E4C7; border-radius: 12px; padding: 20px; max-width: 280px;">
  <h5 style="font-size: 16px; font-weight: 600; color: #1B4332; margin: 0 0 8px 0;">Título</h5>
  <p style="color: #6B7280; margin: 0; font-size: 14px;">Contenido de la tarjeta.</p>
</div>
```

---

## ⚠️ Alertas

### Alerta de Éxito
```html
<div style="background-color: #D8F3DC; border-left: 4px solid #2D6A4F; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #1B4332; font-weight: 600; margin: 0; font-size: 14px;">✓ Reserva confirmada exitosamente</p>
</div>
```

### Alerta de Advertencia
```html
<div style="background-color: rgba(82, 183, 136, 0.2); border-left: 4px solid #52B788; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #1B4332; font-weight: 600; margin: 0; font-size: 14px;">⚠ Verifica disponibilidad</p>
</div>
```

### Alerta de Información
```html
<div style="background-color: #B7E4C7; border-left: 4px solid #95D5B2; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #1B4332; font-weight: 600; margin: 0; font-size: 14px;">ℹ Información importante</p>
</div>
```

---

## 📝 Formularios

### Input de Texto
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #1B4332; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Nombre</label>
  <input type="text" placeholder="Ingresa tu nombre" style="width: 100%; padding: 10px 16px; border: 2px solid #B7E4C7; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#2D6A4F'" onblur="this.style.borderColor='#B7E4C7'">
</div>
```

### Select
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #1B4332; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Actividad</label>
  <select style="width: 100%; padding: 10px 16px; border: 2px solid #B7E4C7; border-radius: 8px; font-size: 14px; outline: none; background-color: white; cursor: pointer;" onfocus="this.style.borderColor='#2D6A4F'" onblur="this.style.borderColor='#B7E4C7'">
    <option>Selecciona una opción</option>
    <option>Yoga al aire libre</option>
    <option>Meditación</option>
    <option>Senderismo</option>
  </select>
</div>
```

### Textarea
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #1B4332; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Comentarios</label>
  <textarea placeholder="Escribe aquí..." rows="4" style="width: 100%; padding: 10px 16px; border: 2px solid #B7E4C7; border-radius: 8px; font-size: 14px; outline: none; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='#2D6A4F'" onblur="this.style.borderColor='#B7E4C7'"></textarea>
</div>
```

---

## 📅 Calendario

### Día con Reserva
```html
<div style="background-color: #ffffff; border: 2px solid #B7E4C7; border-radius: 8px; padding: 12px; min-height: 100px; width: 120px;">
  <div style="font-weight: 600; color: #1B4332; margin-bottom: 8px; font-size: 16px;">15</div>
  <div style="background-color: #2D6A4F; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px; margin-bottom: 4px;">
    09:00 Yoga
  </div>
  <div style="background-color: #52B788; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px;">
    14:30 Senderismo
  </div>
</div>
```

### Calendario Completo
```html
<div style="background-color: #ffffff; border: 2px solid #B7E4C7; border-radius: 12px; padding: 24px; max-width: 900px;">
  <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">
    <!-- Día 1 -->
    <div style="background-color: #D8F3DC; border: 1px solid #B7E4C7; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #1B4332; margin-bottom: 6px; font-size: 14px;">1</div>
    </div>
    <!-- Día con reserva -->
    <div style="background-color: #ffffff; border: 1px solid #B7E4C7; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #1B4332; margin-bottom: 6px; font-size: 14px;">2</div>
      <div style="background-color: #2D6A4F; color: #ffffff; font-size: 11px; padding: 3px 5px; border-radius: 3px;">
        10:00 Actividad
      </div>
    </div>
  </div>
</div>
```
