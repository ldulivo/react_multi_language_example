import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation('aboutme')
  return (
    <section>
    <h1>{t('home.title')}</h1>
    <p>{t('home.texts')}</p>
    </section>
  );
}
export default AboutMe;