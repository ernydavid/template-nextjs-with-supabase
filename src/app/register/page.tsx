import { CreateUser } from '@/utils/supabase/actions-server'

function SubmitButton () {
  return (
    <button
      type='submit'
      className='p-3 bg-primary rounded-xl font-bold'
    >
      Register
    </button>
  )
}

export default function RegisterPage ({ searchParams }: { searchParams: { message: string } }) {
  const styleInput: string = 'bg-divider/10 py-2 px-4 rounded-xl text-foreground'
  return (
    <main className='w-full max-w-7xl h-screen m-auto flex flex-col justify-center items-center gap-3 p-6'>
      <h1 className='text-5xl text-primary text-center'>Register</h1>
      <form
        action={CreateUser}
        className='flex flex-col gap-3'
      >
        <input
          className={`${styleInput}`}
          type='text'
          name='first'
          id='first'
        />
        <input
          className={styleInput}
          type='text'
          name='last'
          id='last'
        />
        <input
          className={styleInput}
          type='email'
          name='email'
          id='email'
        />
        <input
          className={styleInput}
          type='password'
          name='password'
          id='password'
        />
        <SubmitButton />
      </form>
      {searchParams?.message &&
        <p>{searchParams.message}</p>}
    </main>
  )
}
