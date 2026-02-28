

# Halloween Vilamalla — Plan de implementación

## Visión general
Web oficial de 5 páginas para un evento de Halloween en Vilamalla, con estética cinematográfica oscura inspirada en Poe, King y Lovecraft. Tono elegante y sugerente, sin spoilers.

## Paso 1: Sistema de diseño global
- Fondo base con la imagen del escritorio de autores + overlay negro con viñeta
- Paleta: negro azulado, rojo sangre, dorado/marfil, cian espectral puntual
- Tipografía Cinzel para titulares, Inter para cuerpo
- Componentes reutilizables: separadores rojos, marcos ornamentales, botones, cards con hover sutil
- Textura grano suave via CSS

## Paso 2: Header + Menú hamburguesa global
- Logo a la izquierda, botón menú (3 rayas) arriba derecha
- Overlay/sidepanel oscuro con las 5 secciones: La Llamada, La Familia, El Ritual, Lo que ya despertamos, El Acceso
- Cierra con X o click fuera

## Paso 3: Footer global
- Variante Home: logos B Effects Studios + Enrigraphics + iconos IG/FB + links legales (Aviso legal, Términos, Cookies)
- Variante internas: solo links legales mínimos

## Paso 4: HOME — La Llamada
- Logo principal centrado (imagen proporcionada)
- Fecha "31 de octubre de 2026" + horario "18h a 22h"
- Countdown en vivo (DD:HH:MM:SS) con labels
- Claim "LITERALMENTE TERRORÍFICO"
- Hero vídeo full-width con thumbnail + botón play circular rojo con glow
- 3 cards de autores con las ilustraciones proporcionadas (Poe, King, Lovecraft) + nombre + microtexto
- CTA "Desciende al Ritual" bajo el vídeo
- Bloque colaboradores + redes antes del footer

## Paso 5: La Familia
- H1 + intro "No montamos un pasaje. Abrimos una casa."
- 3 bloques con foto + rol + frase para Enric, Emili, Bruno (placeholders hasta tener fotos tratadas)
- Mini-bloque "Cada año cambiamos algo"
- CTA "Ver El Ritual"

## Paso 6: El Ritual
- H1 + intro atmosférica
- Secciones por zonas con H2: Exterior, Umbral, Planta baja, Escaleras, 1ª planta (biblioteca, lavabo, puerta cocina, comedor)
- Cada zona con texto sugerente corto
- Bloque de normas (3 reglas claras)
- CTA "Consulta El Acceso"

## Paso 7: Lo que ya despertamos
- H1 + intro "No son recuerdos. Son pruebas."
- Grid galería con lightbox para fotos y vídeos (placeholders iniciales)
- Filtros opcionales: Fotos / Vídeos / Momentos
- CTA "Volver a La Llamada"

## Paso 8: El Acceso
- H1 + dirección (placeholder hasta confirmar)
- Mapa Google Maps embed
- Horario + fecha
- Recomendaciones en bullets
- CTAs: "Abrir en Google Maps" + "Escríbenos" (IG)

## Paso 9: Responsive + Optimización
- Menú hamburguesa siempre visible
- Cards autores en stack 1 columna en móvil
- Countdown adaptativo
- Vídeo 16:9 con poster y carga diferida
- Imágenes optimizadas, lazy-load en galería
- Hover cards con brillo + elevación sutil, respetando prefers-reduced-motion

## Assets a usar (proporcionados)
- Logo: Logo_entero.png
- Fondo base: ChatGPT_Image_28_feb_2026_17_03_25.png
- Ilustraciones autores: Poe.png, King.png, Lovecraft.png
- Mockup referencia (no embeber): ChatGPT_Image_28_feb_2026_11_43_40.png
- Storyboard vídeo (referencia): Idea_de_video_para_la_intro.png

