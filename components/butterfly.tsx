export default function Butterfly({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="components\ezgif-6e2e1a34550b69.gif"
      className={className}
    >
      <path
        d="M16 4C12 4 9 6 8 10C5 11 3 13 3 16C3 19 5 21 8 22C9 26 12 28 16 28C20 28 23 26 24 22C27 21 29 19 29 16C29 13 27 11 24 10C23 6 20 4 16 4Z"
        fill="#4ADE80"
        fillOpacity="0.2"
        stroke="#4ADE80"
        strokeWidth="1"
      />
      <circle cx="16" cy="16" r="2" fill="#4ADE80" />
      <path d="M8 16H24" stroke="#4ADE80" strokeWidth="1" />
    </svg>
  )
}

