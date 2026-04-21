type DriftMarkProps = {
  className?: string;
};

export default function DriftMark({ className = "h-9 w-9" }: DriftMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 4C30.5 16.5 26.5 26.5 4 32C26.5 37.5 30.5 47.5 32 60C33.5 47.5 37.5 37.5 60 32C37.5 26.5 33.5 16.5 32 4Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
