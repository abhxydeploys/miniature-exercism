package birdwatcher

func TotalBirdCount(birdsPerDay []int) int {
	count := 0
	for i := 0; i < len(birdsPerDay); i++ {
		count += birdsPerDay[i]
	}
	return count
}

func BirdsInWeek(birdsPerDay []int, week int) int {

	start := (week - 1) * 7
	end := start + 7
	count := 0

	for i := start; i < end; i++ {
		count += birdsPerDay[i]
	}

	return count
}

func FixBirdCountLog(birdsPerDay []int) []int {
	for i := 0; i < len(birdsPerDay); i += 2 {
		birdsPerDay[i]++
	}
	return birdsPerDay
}
