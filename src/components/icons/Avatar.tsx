import { icons } from "../../data/product"


export const Avatar = () => {
  return (
    <img
      src={icons.avatar}
      className="w-12 rounded-full border-2 border-transparent hover:border-orange cursor-pointer transition-colors"
      alt="Profile"
    />
  )
}
