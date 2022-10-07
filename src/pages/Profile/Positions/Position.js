import styles from './Position.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Position({ onClick, positions }) {
    return (
        <div className={cx('positions')}>
            <div className={cx('title')}>Vị trí đang tuyển</div>
            {positions.map((position) => {
                return (
                    <div key={position.id} className={cx('positions-list')}>
                        <div className={cx('box-label')}>
                            <span className={cx('label')}> {position.label}</span>
                            <span className={cx('item-date')}>{position.date}</span>
                        </div>
                        <div className={cx('title-position')}>{position.title}</div>
                        <div className={cx('text-position')}>{position.text}</div>

                        <div className={cx('item-recruit')}>
                            <div className={cx('group-btn-recruit')}>
                                <div className={cx('detail')}>
                                    <a href={position.link}>
                                        <Button green small className={cx('btn')}>
                                            Chi tiết
                                        </Button>
                                    </a>
                                </div>

                                <div className={cx('register')} onClick={onClick}>
                                    <Button white small className={cx('btn')}>
                                        Ứng tuyển
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Position;
