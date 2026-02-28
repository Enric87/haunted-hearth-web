

## Limitación y alternativa

No puedo generar un archivo de vídeo real (.mp4/.webm) — Lovable es un editor web, no una herramienta de edición de vídeo. 

Sin embargo, puedo crear una **animación interactiva en la web** que simule el storyboard del libro, directamente en la sección de vídeo de la Home. La secuencia sería:

1. Libro pequeño a lo lejos (scale pequeño, centrado)
2. Libro se acerca (animación scale + translateY)
3. Pausa dramática (fade sutil)
4. Libro se abre → muestra "POE" con silueta de cuervo
5. Páginas giran → "KING"
6. Páginas giran → "LOVECRAFT" con símbolos
7. Libro se cierra de golpe (scale down rápido)
8. Salpicadura de sangre + texto "No es lectura. Es locura."

### Implementación técnica

- Nuevo componente `BookAnimation.tsx` con estados secuenciales controlados por `setTimeout` o `requestAnimationFrame`
- Cada "frame" es un estado con transiciones CSS (opacity, transform, scale)
- Textos y fondos oscuros simulando las escenas del storyboard
- Se reemplaza el placeholder de vídeo actual en `Index.tsx`
- Auto-play al hacer scroll (IntersectionObserver) o al pulsar el botón play
- Duración total ~10-12 segundos
- Responsive y edge-to-edge como el contenedor actual

### Alternativa más simple

Si prefieres usar un vídeo real generado externamente (con CapCut, After Effects, etc.), simplemente súbelo y lo incrusto con un `<video>` tag en la Home.

