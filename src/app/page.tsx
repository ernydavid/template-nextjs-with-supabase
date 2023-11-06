import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home (
  { searchParams }:
    { searchParams: { message: string } }
) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    return (
      <main className='w-full max-w-7xl h-screen m-auto flex flex-col justify-center items-center gap-3 p-6'>
        <h1 className='text-5xl text-primary text-center'>Welcome to Finance App</h1>
        {searchParams?.message &&
          <p>{searchParams.message}</p>}
      </main>
    )
  } else {
    return (
      <main className='w-full max-w-7xl h-screen m-auto flex flex-col justify-center items-center gap-3 p-6'>
        <h1 className='text-5xl text-primary text-center'>
          {`Welcome back, ${session?.user?.email?.split('@', 1).join(',')}`}
        </h1>
        {searchParams?.message &&
          <p>{searchParams.message}</p>}
      </main>
    )
  }
}
