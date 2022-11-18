import type Author from './author'

type YoutubePlaylistItem = {
  title: string
  link: string
  totalTime: string
  sort: number
}

type YoutubePlaylist = {
  title: string
  description: string
  link: string
  videos: Array<YoutubePlaylistItem>
}

export type {
  YoutubePlaylist,
  YoutubePlaylistItem
}
