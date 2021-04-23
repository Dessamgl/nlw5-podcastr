import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextDate = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episodes: Episode) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
}

export const PlayerContext = createContext({} as PlayerContextDate);