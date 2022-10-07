import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ModalContent({ onClick, className, data }) {
    return (
        <div className={className || cx('modal-container')}>
            <div className={cx('modal-content')}>
                <div className={cx('modal-header')}>
                    <button className={cx('button-close')} onClick={onClick}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <h4 className={cx('modal-title')}>Form ứng tuyển</h4>
                </div>
                <div className={cx('modal-body')}>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>Họ tên:</label>
                        <div className={cx('box-input')}>
                            <input className={cx('input-btn')} type="text" name="name" placeholder="Nhập tên của bạn" />
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>Email:</label>
                        <div className={cx('box-input')}>
                            <input
                                className={cx('input-btn')}
                                type="email"
                                name="email"
                                placeholder="Nhập email của bạn"
                            />
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>Điện thoại:</label>
                        <div className={cx('box-input')}>
                            <input
                                className={cx('input-btn')}
                                type="number"
                                name="number"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>Ngày sinh:</label>
                        <div className={cx('box-input')}>
                            <input
                                className={cx('input-btn')}
                                type="date"
                                name="date"
                                placeholder="Nhập ngày sinh của bạn"
                            />
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>Giới tính:</label>
                        <div className={cx('box-input')}>
                            <div className={cx('input-btn')}></div>
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <label className={cx('input-name')}>File CV:</label>
                        <div className={cx('box-input')}>
                            <div className={cx('input-btn')}></div>
                        </div>
                    </div>
                    <div className={cx('input-submit')}>
                        <Button green large className={cx('button-btn')}>
                            Ứng tuyển
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalContent;
