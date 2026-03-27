
export function removeDuplicates(playlist) {
  const set = new Set(playlist)
  return [...set]
}

export function hasTrack(playlist, track) {
  const set = new Set(playlist)
  return set.has(track)
}

export function addTrack(playlist, track) {
  const set = new Set(playlist)
  return [...set.add(track)]
}

export function deleteTrack(playlist, track) {
  const set = new Set(playlist)
  set.delete(track)
  return [...set]
}

export function listArtists(playlist) {
  const artists = new Set()
  for(const item of playlist) {
    const artist = item.split(" - ")[1]
    artists.add(artist)
  }
  return [...artists]
}
