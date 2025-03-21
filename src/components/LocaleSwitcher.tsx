import { useLocale } from 'next-intl';
import LocaleSwitcherButtons from './LocaleSwitcherButton';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return <LocaleSwitcherButtons currentLocale={locale} />;
}


/*
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/src/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
*/