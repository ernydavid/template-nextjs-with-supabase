'use server'

import { createClient } from '@/utils/supabase/server'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const CreateUser = async (formdata: FormData) => {
  const data = Object.fromEntries(formdata)

  const origin = headers().get('origin')
  const email = data.email as string
  const password = data.password as string
  const firstName = data.first as string
  const lastName = data.last as string

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName
      },
      emailRedirectTo: `${origin}/auth/callback`
    }
  })

  if (error) {
    return redirect('/register?message=Could not authenticate email')
  }

  return redirect('/register?message=Check email to continue sign in process')
}

export const LoginUser = async (formdata: FormData) => {
  const data = Object.fromEntries(formdata)

  const origin = headers().get('origin') ?? '/'
  const email = data.email as string
  const password = data.password as string

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return redirect(`/login?message=${error.message}`)
  }

  return redirect(`${origin}`)
}

export const LogOutUser = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  await supabase.auth.signOut()
}
