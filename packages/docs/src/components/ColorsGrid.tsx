import { colors } from '@jarvis-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div
      key={key}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: color,
        color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
      }}
    >
      <strong>{key}</strong>
      <span>{color}</span>
    </div>
  ))
}