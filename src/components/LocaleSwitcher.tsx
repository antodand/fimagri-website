import { useLocale } from 'next-intl';
import LocaleSwitcherButtons from './LocaleSwitcherButton';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return <LocaleSwitcherButtons currentLocale={locale} />;
}