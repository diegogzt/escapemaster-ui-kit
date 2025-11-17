# 🌊 Ocean

Paleta inspirada en el océano con azules y turquesas.

**Colores:** `#006D77` `#83C5BE` `#EDF6F9` `#003844` `#E29578` `#FFDDD2`

---

## 🔘 Botones

```html
<button style="padding: 12px 24px; background-color: #006D77; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">Primario</button>
```

```html
<button style="padding: 12px 24px; background-color: #83C5BE; color: #003844; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">Secundario</button>
```

```html
<button style="padding: 12px 24px; background-color: #E29578; color: #ffffff; border: none; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">Accent</button>
```

```html
<button style="padding: 12px 24px; background-color: transparent; color: #006D77; border: 2px solid #006D77; border-radius: 8px; font-weight: 600; font-size: 16px; cursor: pointer;">Outline</button>
```

---

## 🃏 Tarjetas

```html
<div style="background-color: #ffffff; border: 2px solid #EDF6F9; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 320px;">
  <div style="margin-bottom: 12px;">
    <span style="display: inline-block; padding: 4px 12px; background-color: #006D77; color: #ffffff; font-size: 14px; font-weight: 600; border-radius: 20px;">Nuevo</span>
  </div>
  <h4 style="font-size: 18px; font-weight: 700; color: #003844; margin: 0 0 8px 0;">Reserva Marina</h4>
  <p style="color: #6B7280; margin: 0 0 16px 0; font-size: 14px; line-height: 1.5;">Disfruta de experiencias acuáticas únicas.</p>
  <button style="width: 100%; padding: 10px 16px; background-color: #83C5BE; color: #003844; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;">Ver más</button>
</div>
```

```html
<div style="background-color: #EDF6F9; border: 2px solid #83C5BE; border-radius: 12px; padding: 20px; max-width: 280px;">
  <h5 style="font-size: 16px; font-weight: 600; color: #003844; margin: 0 0 8px 0;">Título</h5>
  <p style="color: #6B7280; margin: 0; font-size: 14px;">Contenido de la tarjeta.</p>
</div>
```

---

## ⚠️ Alertas

```html
<div style="background-color: #EDF6F9; border-left: 4px solid #006D77; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #003844; font-weight: 600; margin: 0; font-size: 14px;">✓ Reserva confirmada</p>
</div>
```

```html
<div style="background-color: rgba(131, 197, 190, 0.2); border-left: 4px solid #83C5BE; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #003844; font-weight: 600; margin: 0; font-size: 14px;">⚠ Verifica disponibilidad</p>
</div>
```

```html
<div style="background-color: #FFDDD2; border-left: 4px solid #E29578; padding: 16px; border-radius: 4px; max-width: 400px;">
  <p style="color: #003844; font-weight: 600; margin: 0; font-size: 14px;">ℹ Información importante</p>
</div>
```

---

## 📝 Formularios

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #003844; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Nombre</label>
  <input type="text" placeholder="Ingresa tu nombre" style="width: 100%; padding: 10px 16px; border: 2px solid #EDF6F9; border-radius: 8px; font-size: 14px; outline: none;" onfocus="this.style.borderColor='#006D77'" onblur="this.style.borderColor='#EDF6F9'">
</div>
```

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #003844; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Servicio</label>
  <select style="width: 100%; padding: 10px 16px; border: 2px solid #EDF6F9; border-radius: 8px; font-size: 14px; outline: none; background-color: white; cursor: pointer;" onfocus="this.style.borderColor='#006D77'" onblur="this.style.borderColor='#EDF6F9'">
    <option>Buceo</option>
    <option>Snorkel</option>
    <option>Kayak</option>
  </select>
</div>
```

```html
<div style="margin-bottom: 16px; max-width: 320px;">
  <label style="display: block; color: #003844; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Comentarios</label>
  <textarea placeholder="Escribe aquí..." rows="4" style="width: 100%; padding: 10px 16px; border: 2px solid #EDF6F9; border-radius: 8px; font-size: 14px; outline: none; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='#006D77'" onblur="this.style.borderColor='#EDF6F9'"></textarea>
</div>
```

---

## 📅 Calendario

```html
<div style="background-color: #ffffff; border: 2px solid #EDF6F9; border-radius: 8px; padding: 12px; min-height: 100px; width: 120px;">
  <div style="font-weight: 600; color: #003844; margin-bottom: 8px; font-size: 16px;">15</div>
  <div style="background-color: #006D77; color: #ffffff; font-size: 12px; padding: 4px 6px; border-radius: 4px; margin-bottom: 4px;">09:00 Buceo</div>
  <div style="background-color: #83C5BE; color: #003844; font-size: 12px; padding: 4px 6px; border-radius: 4px;">14:30 Kayak</div>
</div>
```

```html
<div style="background-color: #ffffff; border: 2px solid #EDF6F9; border-radius: 12px; padding: 24px; max-width: 900px;">
  <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">
    <div style="background-color: #EDF6F9; border: 1px solid #83C5BE; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #003844; margin-bottom: 6px; font-size: 14px;">1</div>
    </div>
    <div style="background-color: #ffffff; border: 1px solid #EDF6F9; border-radius: 6px; padding: 10px; min-height: 90px;">
      <div style="font-weight: 600; color: #003844; margin-bottom: 6px; font-size: 14px;">2</div>
      <div style="background-color: #006D77; color: #ffffff; font-size: 11px; padding: 3px 5px; border-radius: 3px;">10:00 Actividad</div>
    </div>
  </div>
</div>
```
