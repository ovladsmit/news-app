import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      {t('Основная страница')}
      <Counter/>
    </div>
  );
}

export default MainPage;
