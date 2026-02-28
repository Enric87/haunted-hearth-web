

## Ajuste de visibilidad del fondo

El overlay actual usa opacidades de 0.85–0.95, lo que oscurece mucho la imagen de fondo. Reduciremos las opacidades para que la imagen se vea más, manteniendo suficiente contraste para el texto.

### Cambio en `src/index.css`
- Reducir el overlay lineal de `0.85/0.9` a `0.65/0.75`
- Reducir la viñeta exterior de `0.95` a `0.85`

Esto hará la imagen de fondo más visible sin comprometer la legibilidad del texto claro sobre fondo oscuro.

