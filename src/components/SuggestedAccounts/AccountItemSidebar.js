import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import styles from './Account.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPrevew from './AccountPrevew';

const cx = classNames.bind(styles);

function AccountItemSidebar({ data }) {
    return (
        <div>
            <Tippy
                interactive
                offset={[15, 10]}
                delay={[800, 0]}
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPrevew data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('container')}>
                        <img className={cx('avatar')} src={data.avatar} alt="" />

                        <div className={cx('box')}>
                            <h4 className={cx('nick-name')}>
                                {data.nickname}
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </h4>
                            <p className={cx('name')}>{data.full_name}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
AccountItemSidebar.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItemSidebar;
