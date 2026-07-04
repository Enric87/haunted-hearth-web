export interface MediaItem {
  src: string;
  alt: string;
}

export interface Person {
  id: string;
  name: string;
  posterUrl: string;
  photos: MediaItem[];
  videos: MediaItem[];
}

export interface YearData {
  year: string;
  introText?: string;
  people: Person[];
  photos: MediaItem[];
  videos: MediaItem[];
}

export const galeriaData: YearData[] = [
  {
    year: "2022",
    people: [],
    photos: [
      { src: "/images/galeria/2022/decor-pasillo-puerta-01.jpg", alt: "Decoracion de tumbas y velas del pasillo 2022" },
      { src: "/images/galeria/2022/decor-pasillo-puerta-02.jpg", alt: "Decoracion del pasillo con tumbas y luces 2022" },
      { src: "/images/galeria/2022/decor-pasillo-puerta-03.jpg", alt: "Detalle de lapida y calavera en la decoracion 2022" },
      { src: "/images/galeria/2022/decor-pasillo-puerta-04.jpg", alt: "Detalle de mascara terrorifica de la decoracion 2022" },
      { src: "/images/galeria/2022/decor-pasillo-puerta-05.jpg", alt: "Decoracion de escalera con telaranas 2022" },
      { src: "/images/galeria/2022/decor-pasillo-puerta-06.jpg", alt: "Decoracion de cementerio con luces y flores 2022" },
      { src: "/images/galeria/2022/adri-mestre-bruno.jpg", alt: "Participantes disfrazados en Halloween Vilamalla 2022" },
      { src: "/images/galeria/2022/bruno-ruth.jpg", alt: "Bruno y Ruth en Halloween Vilamalla 2022" },
      { src: "/images/galeria/2022/bruno-vero-bruno.jpg", alt: "Bruno y Vero en Halloween Vilamalla 2022" },
      { src: "/images/galeria/2022/juanma-ruth.jpg", alt: "Juanma y Ruth en Halloween Vilamalla 2022" },
      { src: "/images/galeria/2022/vero-adri-adri.jpg", alt: "Vero y Adri en Halloween Vilamalla 2022" },
      { src: "/images/galeria/2022/vero-bruno.jpg", alt: "Vero y Bruno en Halloween Vilamalla 2022" },
    ],
    videos: [],
  },
  {
    year: "2023",
    people: [],
    photos: [
      { src: "/images/galeria/2023/tematica-comedor.jpg", alt: "Comedor decorado de Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/tematica-exterior-cementerio.jpg", alt: "Cementerio exterior de Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/gente-pasillo-escalera.jpg", alt: "Vero y Adri en el pasillo de Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/emili-pruebas.jpg", alt: "Emili preparando pruebas de Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/selfie-bruno-vero-bruno.jpg", alt: "Selfie de Bruno, Vero y Bruno en Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/selfie-balcon.jpg", alt: "Selfie de grupo en el balcon de Halloween Vilamalla 2023" },
      { src: "/images/galeria/2023/selfie-balcon-vero-bruno-ruth.jpg", alt: "Selfie de Vero, Bruno y Ruth en el balcon 2023" },
      { src: "/images/galeria/2023/selfie-vero-bruno-emili-bruno.jpg", alt: "Selfie de Vero, Bruno, Emili y Bruno en Halloween Vilamalla 2023" },
    ],
    videos: [],
  },
  {
    year: "2024",
    people: [],
    photos: [
      { src: "/images/galeria/2024/emili-disfrazado.jpg", alt: "Emili disfrazado en Halloween Vilamalla 2024" },
    ],
    videos: [
      // Copia tus videos en public/videos/galeria/2024 y anade entradas asi:
      // { src: "/videos/galeria/2024/video-1.mp4", alt: "Video del ritual de 2024" },
    ],
  },
  {
    year: "2025",
    people: [
      { id: "kike", name: "Kike", posterUrl: "/images/posters/kike-2025-web.jpg", photos: [], videos: [] },
      { id: "emili", name: "Emili", posterUrl: "/images/posters/emili-2025-web.jpg", photos: [], videos: [] },
      { id: "bruno", name: "Bruno", posterUrl: "/images/posters/bruno-2025-web.jpg", photos: [], videos: [] },
      { id: "adri", name: "Adri", posterUrl: "/images/posters/adri-2025-web.jpg", photos: [], videos: [] },
      { id: "vero-adri", name: "Veronica", posterUrl: "/images/posters/vero-adri-2025-web.jpg", photos: [], videos: [] },
      { id: "vero-bruno", name: "Vero", posterUrl: "/images/posters/vero-bruno-2025-web.jpg", photos: [], videos: [] },
    ],
    photos: [
      { src: "/images/galeria/2025/tematica-biblioteca.jpg", alt: "Decoracion de biblioteca de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/tematica-escalera.jpg", alt: "Decoracion de escalera de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/tematica-escalera-rostros.jpeg", alt: "Escalera decorada con rostros de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/tematica-exterior-cementerio.jpeg", alt: "Cementerio exterior de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/tematica-exterior-esqueleto-photocall.jpg", alt: "Exterior con esqueleto y photocall de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/tematica-pasillo.jpeg", alt: "Decoracion del pasillo de Halloween Vilamalla 2025" },
      { src: "/images/galeria/2025/selfie-emili-lavabo.jpg", alt: "Selfie de Emili en el lavabo 2025" },
      { src: "/images/galeria/2025/selfie-emili-bruno-bano.jpg", alt: "Selfie de Emili y Bruno en el bano 2025" },
      { src: "/images/galeria/2025/selfie-gerard-kike-comedor.jpg", alt: "Gerard y Kike en el comedor de Halloween Vilamalla 2025" },
    ],
    videos: [],
  },
  {
    year: "2026",
    people: [
      // Copia tus posters en public/images/posters y anade entradas asi:
      // { id: "nombre", name: "Nombre", posterUrl: "/images/posters/nombre-2026.jpg", photos: [], videos: [] },
    ],
    photos: [
      // Copia tus fotos en public/images/galeria/2026 y anade entradas asi:
      // { src: "/images/galeria/2026/foto-1.jpg", alt: "Foto del ritual de 2026" },
    ],
    videos: [
      // Copia tus videos en public/videos/galeria/2026 y anade entradas asi:
      // { src: "/videos/galeria/2026/video-1.mp4", alt: "Video del ritual de 2026" },
    ],
  },
];
