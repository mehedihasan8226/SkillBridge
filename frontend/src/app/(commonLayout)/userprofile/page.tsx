import ProfileCard from '@/components/modules/user/UserPorfile/UserProfile'
import { User } from '@/types';


type Props = {
  user: User;
};

const UserProfilePage = () => {
  return (
    <div className=''>
      <ProfileCard  />
    </div>
  )
}

export default UserProfilePage