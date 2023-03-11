import * as React from "react"

const Comment = (props) => (
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
      d="M15 5C9.477 5 5 9.171 5 14.317c0 2.932 1.454 5.547 3.727 7.255v3.552l3.405-1.88c.908.253 1.871.39 2.868.39 5.523 0 10-4.172 10-9.317C25 9.17 20.523 5 15 5Zm.994 12.547-2.547-2.733-4.969 2.733 5.466-5.839 2.609 2.733 4.907-2.733-5.466 5.839Z"
      fill="#C3CAD9"
    />
  </svg>
)

export default Comment
