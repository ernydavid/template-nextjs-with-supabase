import MenuButton from './navbar/menu-button'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { UnAuthButton } from './navbar/button-logout'

async function NavbarActions () {
  const supabase = await createClient()
  const session = await supabase.auth.getSession()

  if (session !== null) {
    return (
      <UnAuthButton />
    )
  } else {
    return (
      <>
        <Link href='/login'>
          Login
        </Link>
        <Link href='/register'>
          Register
        </Link>
      </>
    )
  }
}

export default async function Navbar () {
  const supabase = await createClient()

  const { data: { session } } = await supabase.auth.getSession()

  return (
    <div className='w-full h-16 md:h-20 p-6 fixed'>
      <div className='w-full max-w-7xl flex items-center justify-between m-auto'>
        <div>
          <Link href='/'>
            5999cargo.finance
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <NavbarActions />
          {session?.user &&
            <p>{session?.user?.email?.split('@', 1).join(',')}</p>}
          <MenuButton />
        </div>
      </div>

    </div>
  )
}
