import * as React from "react"

const Compos = (props) => (
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
      d="M15 13.9c-.61 0-1.1.49-1.1 1.1 0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1ZM15 5C9.48 5 5 9.48 5 15s4.48 10 10 10 10-4.48 10-10S20.52 5 15 5Zm2.19 12.19L9 21l3.81-8.19L21 9l-3.81 8.19Z"
      fill="#3361FF"
    />
  </svg>
)

export default Compos
