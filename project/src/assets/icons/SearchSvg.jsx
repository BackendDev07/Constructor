import * as React from "react"

const SearchSvg = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 17h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L18.5 17Zm-6 0C10.01 17 8 14.99 8 12.5S10.01 8 12.5 8s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"
      fill="#C3CAD9"
    />
  </svg>
)

export default SearchSvg
