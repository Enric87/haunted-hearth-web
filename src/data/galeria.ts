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
    people: [],
    photos: [],
    videos: [],
  },
];
