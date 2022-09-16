import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb' />
			</div>
			<div className={s.descriptionBlock}>ava +desck</div>
		</div>
	);
};
export default ProfileInfo;
