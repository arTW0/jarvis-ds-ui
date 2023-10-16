import { ComponentProps } from 'react';
import { StatBox } from './styles'

export interface StatsProps extends ComponentProps<typeof StatBox> {
  title: string;
  value: number;
  typeValue: string;
}

export function Stats({ title, value, typeValue }: StatsProps) {
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