interface LocalDate {
  day: number
  month: number
  year: number
}

export function getDatesBetween(
  startDateStr: string,
  endDateStr: string,
): string[] {
  const initialDate = new Date(startDateStr)
  const finalDate = new Date(endDateStr)
  finalDate.setDate(finalDate.getDate() + 1)
  const dates: Date[] = []

  if (initialDate > finalDate) return getDatesBetween(endDateStr, startDateStr)

  for (
    let currentDate = new Date(initialDate);
    currentDate < finalDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dates.push(new Date(currentDate))
  }

  return dates.map((item) => {
    const [dateStr] = item.toISOString().split('T')
    return dateStr
  })
}
