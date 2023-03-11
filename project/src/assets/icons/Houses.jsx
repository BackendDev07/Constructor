import * as React from "react"

const Houses = (props) => (
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
      d="M18 14.582v-5.17c0-.53-.21-1.04-.59-1.41l-1.71-1.71a.996.996 0 0 0-1.41 0l-1.7 1.7c-.38.38-.59.89-.59 1.42v1.17H8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-4Zm-8 8H8v-2h2v2Zm0-4H8v-2h2v2Zm0-4H8v-2h2v2Zm6 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm6 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z"
      fill="#C3CAD9"
    />
  </svg>
)

export default Houses
