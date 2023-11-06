'use client'

import { LogOutUser } from '@/utils/supabase/actions-server'
import { useRouter } from 'next/navigation'

export function UnAuthButton () {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={async () => {
        await LogOutUser()
        await router.refresh()
      }}
    >
      Logout
    </button>
  )
}
