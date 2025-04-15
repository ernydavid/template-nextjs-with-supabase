'use client'

import { logout } from '@/app/login/actions'
import { useRouter } from 'next/navigation'

export function UnAuthButton () {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={async () => {
        await logout()
        await router.refresh()
      }}
    >
      Logout
    </button>
  )
}
