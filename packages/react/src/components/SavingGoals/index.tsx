import { GoalContent, Goals, Item, Price, Progress } from './styles'

export function SavingGoals() {
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
          <progress
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