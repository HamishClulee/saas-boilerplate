import { UserProfile } from '@clerk/nextjs';

export default async function UserProfilePage() {
  return (
    <div className="my-6 -ml-16">
      <UserProfile
        path='/dashboard/user-profile'
      />
    </div>
  );
};
