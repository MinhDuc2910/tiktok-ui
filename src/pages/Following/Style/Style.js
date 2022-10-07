import classNames from 'classnames/bind';
import styles from './Style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const contentss = [
    {
        id: 1,
        icon: faTurnUp,
        title: 'Học hỏi kinh nghiệm - phát huy năng lực',
        text: 'Phát triển và sản xuất trò chơi trực tuyến, phát hành ra thị trường trong nước cũng như thị trường quốc tế. Sản phẩm: Vườn treo Babylon, Skycity, thành chiến mobile…).',
    },
    {
        id: 2,
        icon: faTurnUp,
        title: 'Học hỏi kinh nghiệm - phát huy năng lực',
        text: 'Phát triển và sản xuất trò chơi trực tuyến, phát hành ra thị trường trong nước cũng như thị trường quốc tế. Sản phẩm: Vườn treo Babylon, Skycity, thành chiến mobile…).',
    },
];

function Style() {
    return (
        <>
            {contentss.map((content) => {
                return (
                    <div key={content.id} className={cx('style-container')}>
                        <div className={cx('box-style')}>
                            <div className={cx('style')}>
                                <div className={cx('icon-style')}>
                                    <FontAwesomeIcon icon={content.icon} />
                                </div>
                                <h2 className={cx('title-style')}>{content.title}</h2>
                            </div>
                            <div>
                                <p className={cx('text-style')}>{content.text}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Style;
