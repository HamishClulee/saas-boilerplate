import { SignIn } from '@clerk/nextjs';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Welcome QR',
    description: 'Best web solution for hotels',
  };
}

export default async function SignInPage() {

  return (
    <SignIn path='/sign-in' />
  );
};
