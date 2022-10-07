import classNames from 'classnames/bind';
import TitleContainer from '../../layouts/TitleConcainer/TitleContainer';

import styles from './LiveLayout.module.scss';

const cx = classNames.bind(styles);
function LiveLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <TitleContainer title="Thông tin hoạt động" />
                <div className={cx('box')}>
                    <div className={cx('company')}>
                        <div className={cx('company-title')}>Công ty cổ phần công nghệ GGame</div>
                        <div className={cx('information')}>
                            <p>0982098686</p>
                            <p>ketoanggame@gmail.com</p>
                        </div>
                        <div className={cx('address')}>
                            <div>
                                <span>
                                    Địa chỉ: Tầng 9, số 124 Lạc Trung, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
                                </span>
                            </div>
                            <div>
                                <span>
                                    Địa chỉ: Tầng 9, số 124 Lạc Trung, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('map')}>Vị trí trên bản đồ đang cập nhật</div>
                </div>
            </div>
        </div>
    );
}

export default LiveLayout;
