import { ComponentProps } from 'react';
import { StatBox, Title } from './styles'

export interface StatsProps extends ComponentProps<typeof StatBox> {
  title: string;
  value: number;
  typeValue: string;
  bgColor?: string;
  labelColor?: string;
}

export function Stats({ title, value, typeValue, bgColor = '$gray500', labelColor = '$gray100' }: StatsProps) {
  const color = typeValue === "positive" ? 'text-success' :
    typeValue === "negative" ? 'text-danger' :
      null

  return (
    <StatBox css={{ backgroundColor: bgColor }}>
      <Title css={{ color: labelColor }}>
        {title}
      </Title>
      <div className={`value ${color}`}>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
    </StatBox>
  )
}