import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <section>
      <h1>{t('home.title')}</h1>
      <p>{t('home.texts')}</p>
    </section>
  );
}
export default Home;