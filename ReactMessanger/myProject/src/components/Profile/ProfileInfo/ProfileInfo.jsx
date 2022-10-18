import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/User-Avatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			{/* <img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb' /> */}

			<div className={styles.descriptionBlock}>
				<div>
					<img
						className={styles.userPhoto}
						src={
							props.profile.photos.large != null
								? props.profile.photos.large
								: userPhoto
						}
					/>
				</div>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
				<div>Name: {props.profile.fullName}</div>
				<div>About me: {props.profile.aboutMe}</div>
				<div>facebook: {props.profile.contacts.facebook}</div>
				<div>website: {props.profile.contacts.website}</div>
				<div>vk: {props.profile.contacts.vk}</div>
				<div>twitter: {props.profile.contacts.twitter}</div>
				<div>instagram: {props.profile.contacts.instagram}</div>
				<div>youtube: {props.profile.contacts.youtube}</div>
				<div>gitHub: {props.profile.contacts.gitHub}</div>
				<div>mainLink: {props.profile.contacts.mainLink}</div>
				<div>
					Looking for a Job: {props.profile.lookingForAJob ? 'Yees' : 'Naaah'}
				</div>
				<div>Job description : {props.profile.lookingForAJobDescription}</div>
			</div>
		</div>
	);
};
export default ProfileInfo;
