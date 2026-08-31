import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('')
  const onChange = (val: string) => {
    setValue(val)
  }
  return (
    <div>
      {t('Основная страница')}
      <Counter />
      <Input placeholder="vvfvfv" value={value} onChange={onChange} />
    </div>
  );
}

export default MainPage;
