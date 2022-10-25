import { useTranslation } from 'react-i18next';

const ContactMe = () => {
  const { t } = useTranslation('contactme')
  return (
    <section>
    <h1>{t('home.title')}</h1>
    <p>{t('home.texts')}</p>
    </section>
  );
}

export default ContactMe;