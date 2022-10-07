import classNames from 'classnames/bind';
import styles from './TitleContainer.module.scss';

const cx = classNames.bind(styles);

function TitleContainer({ title, className }) {
    return (
        <div className={cx('title-container')}>
            <h2 className={className}>{title}</h2>
        </div>
    );
}

export default TitleContainer;
