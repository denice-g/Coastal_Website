const base = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none', stroke: '#518C8A', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export function ServiceIcon({ name }) {
  if (name === 'renovation')
    return (
      <svg {...base}>
        <path d="M6 19 20 7l14 12" /><path d="M10 17v16h20V17" /><path d="M16 33V23h8v10" /><path d="M28 9v4" />
      </svg>
    )
  return (
    <svg {...base}>
      <path d="M5 33h30" /><path d="M9 33V15l11-8 11 8v18" /><path d="M15 33V22h10v11" />
    </svg>
  )
}
