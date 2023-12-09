import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import DataInsertionButton from './Components/DataInsertionButton'

const supabase = createClient('https://mifxsaojqrawlhoyxigq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZnhzYW9qcXJhd2xob3l4aWdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMDkwNzYsImV4cCI6MjAxNzY4NTA3Nn0.f0_DpWGZAxscH006ZUlaykIfb5l2nta0CJnTbcfdfsY')

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
        <DataInsertionButton />
      )
  }
}