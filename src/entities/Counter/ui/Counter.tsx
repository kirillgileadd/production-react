import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        {t('increment')}
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        {t('decrement')}
      </Button>
    </div>
  );
};
