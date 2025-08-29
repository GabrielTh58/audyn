import { fullStar, halfStar, emptyStar } from "@/utils/Stars"

interface RatingProps {
  rating?: number
}

function Star({ type }: { type: "full" | "half" | "empty" }) {
    if (type === "full") return fullStar
    if (type === "half") return halfStar
    return emptyStar
}
export default function Rating({ rating = 0 }: RatingProps) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5 ? 1 : 0
  const empty = 5 - full - half

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }, (_, i) => <Star key={`full-${i}`} type="full" />)}
      {half === 1 && <Star key="half" type="half" />}
      {Array.from({ length: empty }, (_, i) => <Star key={`empty-${i}`} type="empty" />)}
    </div>
  )
}
