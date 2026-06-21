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
    year: "2023",
    people: [],
    photos: [
      // Copia tus fotos en public/images/galeria/2023 y añade entradas así:
      // { src: "/images/galeria/2023/foto-1.jpg", alt: "Foto del ritual de 2023" },
    ],
    videos: [
      // Copia tus vídeos en public/videos/galeria/2023 y añade entradas así:
      // { src: "/videos/galeria/2023/video-1.mp4", alt: "Vídeo del ritual de 2023" },
    ],
  },
  {
    year: "2024",
    people: [],
    photos: [
      // Copia tus fotos en public/images/galeria/2024 y añade entradas así:
      // { src: "/images/galeria/2024/foto-1.jpg", alt: "Foto del ritual de 2024" },
    ],
    videos: [
      // Copia tus vídeos en public/videos/galeria/2024 y añade entradas así:
      // { src: "/videos/galeria/2024/video-1.mp4", alt: "Vídeo del ritual de 2024" },
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
    photos: [],
    videos: [],
  },
  {
    year: "2026",
    people: [
      // Copia tus posters en public/images/posters y añade entradas así:
      // { id: "nombre", name: "Nombre", posterUrl: "/images/posters/nombre-2026.jpg", photos: [], videos: [] },
    ],
    photos: [
      // Copia tus fotos en public/images/galeria/2026 y añade entradas así:
      // { src: "/images/galeria/2026/foto-1.jpg", alt: "Foto del ritual de 2026" },
    ],
    videos: [
      // Copia tus vídeos en public/videos/galeria/2026 y añade entradas así:
      // { src: "/videos/galeria/2026/video-1.mp4", alt: "Vídeo del ritual de 2026" },
    ],
  },
];
