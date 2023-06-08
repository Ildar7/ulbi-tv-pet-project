import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
