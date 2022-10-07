/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/tippy.css';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);
const tabHeader = [
    {
        title: 'Trang chủ',
        link: config.routes.home,
    },
    {
        title: 'Giới thiệu',
        link: config.routes.following,
    },
    {
        title: 'Tuyển  dụng',
        link: config.routes.profile,
    },
    {
        title: 'Hoạt động',
        link: config.routes.live,
    },
];

function Header() {
    const line = useRef();

    const tabs = useRef();
    useEffect(function () {
        const tab = tabs.current;
        tab.onClick = function () {
            console.log(tab);
        };
    }, []);

    const tabb = document.getElementsByClassName('tab');

    console.log(tabb);

    return (
        <>
            <header id="a" className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className="logo-link">
                        <img src={images.logo} alt="Ggame" className={cx('logo')} />
                    </Link>
                    <div className={cx('tab-large')}>
                        <div className={cx('list-tab')}>
                            {tabHeader.map((tab) => (
                                <Link key={tab.title} to={tab.link}>
                                    <div ref={tabs} className={cx('tab')}>
                                        {tab.title}
                                    </div>
                                </Link>
                            ))}

                            <div ref={line} className={cx('line-tab')}></div>
                        </div>
                        <div className={cx('language')}>
                            <img src={images.flagVn} className={cx('language-vn')} />

                            <img src={images.flagUS} className={cx('language-us')} />
                        </div>
                    </div>
                </div>
            </header>

            <img src={images.banner1} className={cx('banner')} />
        </>
    );
}
export default Header;
