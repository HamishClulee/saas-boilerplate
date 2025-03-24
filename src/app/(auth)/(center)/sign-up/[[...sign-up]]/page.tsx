import { SignUp } from '@clerk/nextjs';

export async function generateMetadata() {
  return {
    title: 'Welcome QR',
    description: 'The best',
  };
}

export default async function SignUpPage() {
  return (
    <SignUp path='/sign-up' />
  );
};
