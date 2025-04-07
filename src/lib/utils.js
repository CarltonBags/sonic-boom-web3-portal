
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const createActionButton = (label, Icon) => {
  return (
    <div className="action-button">
      <span className="text-xl font-medium">{label}</span>
      {Icon && <Icon className="right-arrow" size={32} strokeWidth={2} />}
    </div>
  )
}
