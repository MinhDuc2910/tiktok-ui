import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import TitleContainer from '~/layouts/TitleConcainer/TitleContainer';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const [valueName, setValueName] = useState();

    function handleSubmit() {}
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('container-activate')}>
                    <TitleContainer title="Hoạt động" className={cx('color-text')} />
                    <div className={cx('box-activate')}>
                        <div className={cx('name-company')}>Công ty cổ phần công nghệ GGame</div>
                        <div className={cx('box-address')}>
                            <div className={cx('address-1')}>
                                <p>Sđt liên hệ : 0982098686</p>
                                <p className={cx('map')}>
                                    Địa chỉ: Tầng 9, số 124 Lạc Trung, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
                                </p>
                            </div>
                            <div className={cx('address-2')}>
                                <p>Email: ketoanggame@gmail.com</p>
                                <p className={cx('map')}>
                                    {' '}
                                    Địa chỉ: Tầng 9, số 124 Lạc Trung, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('container-mailbox')}>
                    <TitleContainer title="Hòm thư" className={cx('color-text')} />
                    <div>
                        <input
                            type="text"
                            className={cx('form-control')}
                            placeholder="Nhập tên của bạn"
                            value={valueName}
                            onChange={(e) => {
                                setValueName(e.target.value);
                            }}
                        />
                        <input type="email" className={cx('form-control')} placeholder="Nhập email của bạn" />
                        <textarea
                            type="text"
                            className={cx('form-control-message')}
                            required
                            rows="5"
                            placeholder="Nhập tin nhắn của bạn"
                        ></textarea>
                        <div className={cx('button')} onClick={handleSubmit}>
                            <Button green large>
                                Gửi
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
