import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Service from './service/Service.js';
import Event from './Event/Event.js';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main')}>
            <div className={cx('service')}>
                <Service />
            </div>
            <div className={cx('event')}>
                <Event />
            </div>
        </div>
    );
}

export default Home;
