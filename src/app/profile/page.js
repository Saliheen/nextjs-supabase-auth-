import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="card">
      <div className="flex flex-col items-start">
        <pre>{JSON.stringify(user, null, 3)}</pre>
      </div>
      <Link className="button" href="/">
        Go Home
      </Link>
      <SignOut />
    </div>
  );
}
