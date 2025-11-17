# ⚡ Neon

Paleta neón con colores brillantes sobre fondo oscuro.

## 🎨 Colores

```css
--neon-primary: #FF00FF;   /* Magenta neón */
--neon-secondary: #00FFFF; /* Cyan neón */
--neon-accent: #FFFF00;    /* Amarillo neón */
--neon-dark: #000000;      /* Negro */
--neon-light: #FFFFFF;     /* Blanco */
--neon-beige: #333333;     /* Gris oscuro */
```

## 🔘 Botones

```html
<button class="px-6 py-3 bg-neon-primary text-black rounded-lg font-bold hover:opacity-80 shadow-lg shadow-neon-primary/50">
  Magenta
</button>
<button class="px-6 py-3 bg-neon-secondary text-black rounded-lg font-bold hover:opacity-80 shadow-lg shadow-neon-secondary/50">
  Cyan
</button>
<button class="px-6 py-3 bg-neon-accent text-black rounded-lg font-bold hover:opacity-80 shadow-lg shadow-neon-accent/50">
  Amarillo
</button>
```

```css
.btn-neon-primary {
  background-color: #FF00FF;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  box-shadow: 0 10px 15px rgba(255, 0, 255, 0.5);
}

.btn-neon-secondary {
  background-color: #00FFFF;
  color: #000000;
  box-shadow: 0 10px 15px rgba(0, 255, 255, 0.5);
}

.btn-neon-accent {
  background-color: #FFFF00;
  color: #000000;
  box-shadow: 0 10px 15px rgba(255, 255, 0, 0.5);
}
```

## 🃏 Tarjetas

```html
<div class="bg-black border-2 border-neon-primary rounded-xl p-6 shadow-lg shadow-neon-primary/30">
  <span class="px-3 py-1 bg-neon-primary text-black font-bold rounded-full">Nuevo</span>
  <h4 class="text-lg font-bold text-neon-primary">Neón</h4>
  <p class="text-gray-300 mb-4">Estilo futurista brillante.</p>
  <button class="w-full bg-neon-secondary text-black rounded-lg px-4 py-2 font-bold">Ver más</button>
</div>
```

```css
.card-neon {
  background-color: #000000;
  border: 2px solid #FF00FF;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(255, 0, 255, 0.3);
}
```

## ⚠️ Alertas

```html
<div class="bg-neon-dark border-l-4 border-neon-primary p-4 rounded shadow-lg shadow-neon-primary/20">
  <p class="text-neon-primary font-bold">✓ Operación completada</p>
</div>
```

```css
.alert-neon {
  background-color: #000000;
  border-left: 4px solid #FF00FF;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.2);
}
```
