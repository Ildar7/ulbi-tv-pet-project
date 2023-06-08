import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={classNames(cls.errors, {}, [])}>
                {t('Произошла непредвиденная ошибка')}
                <Button
                    className={cls.button}
                    onClick={reload}
                >
                    {t('Перезагрузить страницу')}
                </Button>
            </div>
        </div>
    );
};
