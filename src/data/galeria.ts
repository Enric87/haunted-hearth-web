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
    year: "2024",
    introText: "En 2024 no hubo rostros.\nSolo pruebas… y testigos.",
    people: [],
    photos: [],
    videos: [],
  },
  {
    year: "2025",
    people: [
      { id: "kike", name: "Kike", posterUrl: "/images/posters/kike.png", photos: [], videos: [] },
      { id: "emili", name: "Emili", posterUrl: "/images/posters/emili.jpeg", photos: [], videos: [] },
      { id: "bruno", name: "Bruno", posterUrl: "/images/posters/bruno.jpg", photos: [], videos: [] },
    ],
    photos: [],
    videos: [],
  },
];
