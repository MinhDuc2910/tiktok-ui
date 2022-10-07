import classNames from 'classnames/bind';

import styles from './Following.module.scss';

import Style from './Style/Style';
import TitleContainer from '~/layouts/TitleConcainer/TitleContainer';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Following() {
    const introduce = [
        {
            image: images.imageCty,
            title: 'Về chúng tôi',
            text: 'Công ty cổ phần truyền thông SGC Việt Nam, hoạt động trong các lĩnh vực kinh doanh chính là phát triển và sản xuất trò chơi trực tuyến phát hành ra thịtrường trong nước cũng như Quốc tế, thiết kế app Mobile; Xây dựng thiết kế phầnmềm Website quảng bá cho các doanh nghiệp vừa và nhỏ trong nước và các tổ chứcnước ngoài hoạt động tại Việt Nam.',
        },
        {
            image: images.mission,
            title: 'Sứ mệnh',
            text: `SGC Việt Nam được thành lập với sứ mệnh mang lại các phần mềm, ứng dụng trên mobile, các trang thông tin điện tử tốt nhất dành cho người dùng. Chúng tôi là làm ngắn lại khoảng cách giữa các bạn với thông tin trên toàn cầu, làm thỏa mãn tối đa mọi nhu cầu cuộc sống của bất kỳ ai, dù ở bất cứ đâu, dù làm bất cứ ngành nghề.`,
        },
        {
            image: images.strengths,
            title: 'Sức mạnh',
            text: 'Quy tụ đông đảo đội ngũ có kinh nghiệm về các công nghệ: React Native, Unity, Java, HTML5, PHP... Có các giải pháp và kinh nghiệm trong lĩnh vực phát triển và sản xuất các phần mềm và ứng dụng trò chơi trực tuyến. Các sản phẩm của SGC đã được thị trường đánh giá cao, thu hút nhiều tập user khách hàng phải kể đến Game skyctity, game vườn treo Babylon, Thành chiến Mobile, các thể loại game offline …..Hình thức hợp tác mềm dẻo giúp khách hàng cân bằng được chi phí và rủi ro về công nghệ cũng như nhân lực thực hiện dự án.',
        },
        {
            image: images.target,
            title: 'Mục tiêu',
            text: 'Với mục tiêu trở thành nhà sản xuất, phát hành ứng dựng game chuyên nghiệp, tạo nên một thương hiệu uy tín, thương hiệu tin cậy hàng đầu trong khối thị trường. Với phương châm lấy chữ tín làm đầu, sự hài lòng của khách hàng là nguồn sống của doanh nghiệp. Trong suốt quá trình hoạt động toàn thể cán bộ nhân viên trong công ty không ngừng phấn đấu nỗ lực hết mình để phục vụ và đáp ứng ngày một tốt hơn nhu cầu của quý khách hàng.',
        },
    ];

    return (
        <div className={cx('main')}>
            <div className={cx('main-container')}>
                <div className={cx('box-style')}>
                    <TitleContainer title="Phong cách SGC" />

                    <div className={cx('owl-stage-outer')}>
                        <div className={cx('owl-stage')}>
                            <Style />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('introduce')}>
                <div className={cx('introduce-container')}>
                    <TitleContainer title="Giới thiệu" />
                    <div className={cx('cd-container')}>
                        <div className={cx('cd-timeline')}>
                            {introduce.map(function (data) {
                                return (
                                    <div key={data.title} className={cx('cd-timeline-block')}>
                                        <div className={cx('image-block')}>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className={cx('content-block')}>
                                            <h2>{data.title}</h2>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Following;
