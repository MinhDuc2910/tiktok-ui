import classNames from 'classnames/bind';
import TitleContainer from '~/layouts/TitleConcainer/TitleContainer';

import styles from './Event.module.scss';

const cx = classNames.bind(styles);

const events = [
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/GIOITHIEUGAME.png',
        title: 'THÀNH CHIẾN MOBILE - CỰC PHẨM GAME CHIẾN THUẬT VIỆT NAM',
        text: 'Thành Chiến Mbile là game chiến thuật thời gian thực 24/24, tái hiện lại từ việc các vị tướng t..',
        link: 'https://sgcmedia.net.vn/tin-tuc/thanh-chien-mobile-cuc-pham-game-chien-thuat-viet-nam-16.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/t%E1%BA%A3i_xu%E1%BB%91ng_(1).jpg',
        title: 'CÔNG THỨC 2 BÁNH XE, 4 NGUYÊN TẮC, 8 ĐỪNG',
        text: 'Dẫn dắt một nhóm người là dẫn dắt lòng người. Một nhà lãnh đạo thực sự giỏi không chỉ cần biết c..',
        link: 'https://sgcmedia.net.vn/tin-tuc/cong-thuc-2-banh-xe-4-nguyen-tac-8-dung-15.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/ea87086c485460123cd2978fd7e46dbe-15208455902861969544910.jpg',
        title: 'Mạng Internet phi tập trung - thứ đối địch với mạng Internet mà ta vẫn biết, đã xuất hiện rồi đây',
        text: 'Người ta gọi mạng Internet phân tán là một thứ Vườn Địa đàng Số, nơi mà từ đó ta có thể lấy lại được s..',
        link: 'https://sgcmedia.net.vn/tin-tuc/mang-internet-phi-tap-trung-thu-doi-dich-voi-mang-internet-ma-ta-van-biet-da-xuat-hien-roi-day-14.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/java.png',
        title: 'Giới thiệu về ngôn ngữ Java',
        text: 'Lịch sử phát triển Năm 1990, Sun MicroSystems thực hiện dự án Green nhằm phát triển phần mềm trong c..',
        link: 'https://sgcmedia.net.vn/tin-tuc/gioi-thieu-ve-ngon-ngu-java-13.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/Unity-3d.jpg',
        title: 'Giới thiệu tổng quát về Unity',
        text: ' Unity3D là phần mềm làm games trực tiếp theo thời gian thực, mà không cần render, cho phép người  design game ',
        link: 'https://sgcmedia.net.vn/tin-tuc/gioi-thieu-tong-quat-ve-unity-12.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/1.jpg',
        title: 'Chuyên gia công nghệ cho biết tính năng sạc không dây mới của iPhone đã khiến pin chai nhanh hơn bình',
        text: 'Dù tôi có yêu thích sạc không dây đến mấy, tôi vẫn sẽ quay lại với cái dây sạc.',
        link: 'https://sgcmedia.net.vn/tin-tuc/chuyen-gia-cong-nghe-cho-biet-tinh-nang-sac-khong-day-moi-cua-iphone-da-khien-pin-chai-nhanh-hon-binh-thuong--11.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/5_21.jpg',
        title: '7 phương pháp tuyển dụng lợi hại',
        text: 'Mục đích của việc tuyển dụng thành công chính là việc tuyển đúng người. Khi tuyển d...',
        link: 'https://sgcmedia.net.vn/tin-tuc/7-phuong-phap-tuyen-dung-loi-hai-10.html',
    },
    {
        icon: 'https://sgcmedia.net.vn/public/images/news/llll.jpg',
        title: "ĐỂ 'THỨ HAI' KHÔNG CÒN LÀ NỖI SỢ !!!",
        text: 'ĐỂ "THỨ HAI" KHÔNG CÒN LÀ NỖI SỢ !“Hôm nay là thứ mấy? Chắc chắn là',
        link: 'https://sgcmedia.net.vn/tin-tuc/de-thu-hai-khong-con-la-noi-so--9.html',
    },
];

function Event() {
    return (
        <div className={cx('event')}>
            <div className={cx('event-container')}>
                <TitleContainer title="Tin tức-Sự kiện" />
                <div className={cx('event-box')}>
                    {events.map((event) => {
                        return (
                            <div key={event.title} className={cx('item-style')}>
                                <a href={event.link}>
                                    <div className={cx('box-image')}>
                                        <img src={event.icon} className={cx('image')} alt="" />
                                    </div>
                                    <div className={cx('text-box')}>
                                        <div className={cx('title-item-style')}>{event.title} </div>
                                        <div className={cx('content-item-style')}>{event.text}</div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Event;
