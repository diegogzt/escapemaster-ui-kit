# 🌅 Sunset

Paleta inspirada en atardeceres con tonos rosa y dorado.

**Colores:** `#FF6B9D` `#FFA07A` `#FFD700` `#C73866` `#FFF4E6` `#FFE4E1`

---

## 🔘 Botones

### Botón Primario
```html
<button style="padding: 12px 24px; background-color: #FF6B9D; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Primario
</button>
```

### Botón Secundario
```html
<button style="padding: 12px 24px; background-color: #FFA07A; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Secundario
</button>
```

### Botón Dorado
```html
<button style="padding: 12px 24px; background-color: #FFD700; color: #C73866; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: opacity 0.2s;">
  Dorado
</button>
```

### Botón Outline
```html
<button style="padding: 12px 24px; background-color: transparent; color: #FF6B9D; border: 2px solid #FF6B9D; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
  Outline
</button>
```

---

## 🃏 Tarjetas

### Tarjeta de Reserva
```html
<div style="background-color: #ffffff; border: 2px solid #FFE4E1; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 320px;">
  <div style="margin-bottom: 12px;">
    <span style="display: inline-block; padding: 4px 12px; background-color: #FF6B9D; color: #ffffff; font-size: 14px; font-weight: 600; border-radius: 20px;">
      Nuevo
    </span>
  </div>
  <h4 style="font-size: 18px; font-weight: 700; color: #C73866; margin: 0 0 8px 0;">Eventos Especiales</h4>
  <p style="color: #6B7280; margin: 0 0 16px 0; font-size: 14px; line-height: 1.5;">
    Planifica tus eventos al atardecer.
  </p>
  <button style="width: 100%; padding: 10px 16px; background-color: #FFA07A; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;">
    Ver más
  </button>
</div>
```

### Tarjeta Simple
```html
<div style="background-color: #FFF4E6; border: 2px solid #FFE4E1; border-radius: 12px; padding: 20px; max-width: 280px;">
  <h5 style="font-size: 16px; font-weight: 600; color: #C73866; margin: 0 0 8px 0;">Título</h5>
  <p style="color: #6B7280; margin: 0; font-size: 14px;">Contenido de la tarjeta.</p>
</div>
```

---

## ⚠️ Alertas

### Alerta de Éxito
```html
<div style="background-color: #FFF4E6; border-left: 4px solid #FF6B9D; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #C73866; font-weight: 600; margin: 0; font-size: 14px;">✓ Evento confirmado exitosamente</p>
</div>
```

### Alerta de Advertencia
```html
<div style="background-color: rgba(255, 160, 122, 0.2); border-left: 4px solid #FFA07A; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #C73866; font-weight: 600; margin: 0; font-size: 14px;">⚠ Verifica la hora del evento</p>
</div>
```

### Alerta de Información
```html
<div style="background-color: #FFE4E1; border-left: 4px solid #FFD700; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #C73866; font-weight: 600; margin: 0; font-size: 14px;">ℹ Información importante</p>
</div>
```

---

## 📝 Formularios

### Input de Texto
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #C73866; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Nombre del Evento</label>
  <input type="text" placeholder="Ingresa el nombre" style="width: 100%; padding: 10px 16px; border: 2px solid #FFE4E1; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#FF6B9D'" onblur="this.style.borderColor='#FFE4E1'">
</div>
```

### Select
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #C73866; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Tipo de Evento</label>
  <select style="width: 100%; padding: 10px 16px; border: 2px solid #FFE4E1; border-radius: 8px; font-size: 14px; outline: none; background-color: white; cursor: pointer;" onfocus="this.style.borderColor='#FF6B9D'" onblur="this.style.borderColor='#FFE4E1'">
    <option>Selecciona una opción</option>
    <option>Celebración</option>
    <option>Reunión</option>
    <option>Cena</option>
  </select>
</div>
```

### Textarea
```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #C73866; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Detalles</label>
  <textarea placeholder="Escribe aquí..." rows="4" style="width: 100%; padding: 10px 16px; border: 2px solid #FFE4E1; border-radius: 8px; font-size: 14px; outline: none; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='#FF6B9D'" onblur="this.style.borderColor='#FFE4E1'"></textarea>
</div>
```

---

## 📅 Calendario

### Día con Reserva
```html
<div style="background-color: #ffffff; border: 2px solid #FFE4E1; border-radius: 8px; padding: 12px; min-height: 100px; width: 120px;">
  <div style="font-weight: 600; color: #C73866; margin-bottom: 8px; font-size: 16px;">15</div>
  <div style="background-color: #FF6B9D; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px; margin-bottom: 4px;">
    18:00 Cena
  </div>
  <div style="background-color: #FFA07A; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px;">
    20:30 Evento
  </div>
</div>
```

### Calendario Completo
```html
<div style="background-color: #ffffff; border: 2px solid #FFE4E1; border-radius: 12px; padding: 24px; max-width: 900px;">
  <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">
    <!-- Día 1 -->
    <div style="background-color: #FFF4E6; border: 1px solid #FFE4E1; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #C73866; margin-bottom: 6px; font-size: 14px;">1</div>
    </div>
    <!-- Día con reserva -->
    <div style="background-color: #ffffff; border: 1px solid #FFE4E1; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #C73866; margin-bottom: 6px; font-size: 14px;">2</div>
      <div style="background-color: #FF6B9D; color: #ffffff; font-size: 11px; padding: 3px 5px; border-radius: 3px;">
        18:00 Evento
      </div>
    </div>
  </div>
</div>
```
