import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import TitleContainer from '~/layouts/TitleConcainer/TitleContainer';
import Position from './Positions/Position';
import Button from '~/components/Button';
import ModalContent from './ModalContent/ModalContent.js';
import { useState } from 'react';

const menu = [
    {
        id: 1,
        name: 'kĩ thuật',
    },
    {
        id: 2,
        name: 'vận hành, kiểm thử',
    },
    {
        id: 3,
        name: 'kinh doanh',
    },
];

const positions = [
    {
        id: 1,
        label: 'Vận hành, kiểm thử',
        title: 'Nhân viên tester',
        date: '09/12/22',
        text: 'Nhân viên Tester Số lượng: 03 người 1. Mô tả công việc: - Đảm nhận vị trí tester, tham...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/tuyen-dung-lap-trinh-vien-website-1.html',
    },
    {
        id: 2,
        label: 'Kinh doanh',
        title: 'Nhân viên Marketing',
        date: '05/06/22',
        text: '1. MÔ TẢ CÔNG VIỆC:  -  Viết bài, quay video,up bài, lên các kênh youtube, web giới th...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/nhan-vien-marketing-13.html',
    },
    {
        id: 3,
        label: 'PHP',
        title: 'LẬP TRÌNH PHP',
        date: '15/05/22',
        text: 'MÔ TẢ CÔNG VIỆC• Lập trình web bằng ngôn ngữ PHP• Xây dựng và phát triển ...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/lap-trinh-php-10.html',
    },
    {
        id: 4,
        label: 'Kinh doanh',
        title: 'Nhân viên SEO',
        date: '15/05/22',
        text: '1. MÔ TẢ CÔNG VIỆC:- Lên kế hoạch và chạy Quảng cáo google ads, tối ưu SEO - Đảm nhiệm ph&aacut...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/nhan-vien-seo-9.html',
    },
    {
        id: 5,
        label: '',
        title: 'Thiết kế đồ họa',
        date: '18/12/21',
        text: 'Số lượng: 02 1. Mô tả công việc:   • Làm hiệu ứng 3D cho các sản phẩm ga...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/thiet-ke-do-hoa-8.html',
    },
    {
        id: 6,
        label: 'Kinh doanh',
        title: 'Nhân viên hành chính nhân sự',
        date: '08/06/22',
        text: 'TUYỂN DỤNG NHÂN VIÊN HÀNH CHÍNH NHÂN SỰSố lượng: 01 người 1. Mô tả công việc...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/nhan-vien-hanh-chinh-nhan-su-7.html',
    },
    {
        id: 7,
        label: 'Mobile',
        title: 'Lập trình viên Unity',
        date: '10/12/21',
        text: 'Lập trình viên UnitySố lượng: 03 người1. Mô tả công việc:- Phối hợp với team, ph&aa...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/lap-trinh-vien-unity-6.html',
    },
    {
        id: 8,
        label: 'Mobile',
        title: 'Lập trình viên Java-backend',
        date: '08/12/21',
        text: 'TUYỂN DỤNG LẬP TRÌNH VIÊN JAVA-BACKEND1. Mô tả công việc- Xây dựng backend cho các hệ th�...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/lap-trinh-vien-java-backend-5.html',
    },
    {
        id: 9,
        label: 'Javascript',
        title: 'Tuyển dụng lập trình app',
        date: '13/05/22',
        text: 'TUYỂN DỤNG LẬP TRÌNH VIÊN APPSố lượng: 03 người1. Mô tả công việc - Tham gia đội ngũ ph...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/tuyen-dung-lap-trinh-app-4.html',
    },
    {
        id: 10,
        label: 'Mobile',
        title: 'Tuyển dụng thực tập viên lập trình ứng dụng trên di động',
        date: '29/11/21',
        text: 'Lập trình ứng dụng trên di độngSố lượng: 05 người1. Mô tả công việc:- Nghiên...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/tuyen-dung-thuc-tap-vien-lap-trinh-ung-dung-tren-di-dong-2.html',
    },
    {
        id: 11,
        label: 'PHP',
        title: 'Tuyển dụng lập trình viên website',
        date: '13/05/22',
        text: 'TUYỂN DỤNG LẬP TRÌNH VIÊN WEBSITESố lượng: 02 người1. Mô tả công việc- Xây dựng c&...',
        link: 'https://sgcmedia.net.vn/tuyen-dung/tuyen-dung-lap-trinh-vien-website-1.html',
    },
];

const cx = classNames.bind(styles);

function Profile() {
    const [register, setRegister] = useState(true);
    console.log(register);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <TitleContainer title="Tuyển dụng" />
                <div className={cx('recruit')}>
                    <div className={cx('department')}>
                        <div className={cx('title')}>Các vị trí</div>
                        <ul className={cx('department-menu')}>
                            {menu.map((value) => {
                                return (
                                    <li key={value.id}>
                                        <a href={value.name}>{value.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Position onClick={() => setRegister(false)} positions={positions} />
                    <div className={cx('subscribe')}>
                        <div className={cx('title')}>Các vị trí</div>
                        <div className={cx('subscribe-form')}>
                            <input type="text" className={cx('form-control')} placeholder="Nhập tên của bạn" />
                            <input type="email" className={cx('form-control')} placeholder="Nhập email của bạn" />

                            <Button green small>
                                Đăng Ký
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ModalContent
                    onClick={() => setRegister(true)}
                    className={register ? cx('modal-content') : ''}
                    data={positions}
                />
            </div>
        </div>
    );
}

export default Profile;
