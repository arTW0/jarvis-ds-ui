import { ComponentProps } from 'react';
import { GoalContent, Goals, Item, Price, Progress, ProgressBar } from './styles'

export interface SavingGoalsProps extends ComponentProps<typeof Goals> {
  goal: string;
  category: string;
  amount: number;
  locked: number;
}

export function SavingGoals({ goal, category, amount, locked }: SavingGoalsProps) {
  const percentage = (locked * 100) / amount

  return (
    <Goals>
      <Item>
        <GoalContent>
          <div>
            <h4>{goal}</h4>
            <p>{category}</p>
          </div>
          <Price>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Price>
        </GoalContent>
        <Progress>
          <ProgressBar
            max="100"
            value={percentage}
          />

          <p>
            {`${percentage.toFixed(0)} %`}
          </p>
        </Progress>
      </Item>
    </Goals>
  )
}