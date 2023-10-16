import { StatBox } from './styles'

export function Stats() {
  const color = typeValue === "positive" ? 'text-success' :
    typeValue === "negative" ? 'text-danger' :
      null

  return (
    <StatBox>
      <div className="title">
        {title}
      </div>
      <div className={`value ${color}`}>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
    </StatBox>
  )
}