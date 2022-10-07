import classNames from 'classnames/bind';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Service.module.scss';
import { faDesktop, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import TitleContainer from '~/layouts/TitleConcainer/TitleContainer';

const cx = classNames.bind(styles);

const contents = [
    {
        icon: faFutbol,
        title: 'Trò chơi trực tuyến',
        text: 'Phát triển và sản xuất trò chơi trực tuyến, phát hành ra thị trường trong nước cũng như thị trường quốc tế. Sản phẩm: Vườn treo Babylon, Skycity, thành chiến mobile…).',
    },
    {
        icon: faMobileScreenButton,
        title: 'Thiết kế app mobile',
        text: 'Tư vấn thiết kế và phát triển các App Mobile theo yêu cầu của Doanh nghiệp và khách hàng',
    },
    {
        icon: faDesktop,
        title: 'Thiết kế website',
        text: 'Sử dụng công nghệ mới để xây dựng và thiết kế phần mềm Website quảng bá cho các doanh nghiệp vừa và nhỏ trong nước và các tổ chức nước ngoài hoạt động tại Việt Nam chuyên nghiệp, xứng tầm thương hiệu nhằm quảng bá thông tin, sản phẩm dịch vụ của công ty.',
    },
];

function Service() {
    return (
        <div className={cx('service')}>
            <div className={cx('service-container')}>
                <TitleContainer title="Dịch vụ của chúng tôi" />
                <div className={cx('service-box')}>
                    {contents.map((content) => {
                        return (
                            <div key={content.title} className={cx('item-style')}>
                                <div className={cx('box-icon')}>
                                    <div className={cx('icon-style')}>
                                        <FontAwesomeIcon icon={content.icon} />
                                    </div>
                                </div>
                                <div className={cx('title-item-style')}> {content.title}</div>
                                <div className={cx('content-item-style')}>{content.text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Service;
