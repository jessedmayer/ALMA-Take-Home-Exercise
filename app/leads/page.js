import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
    const { data: session } = useSession()
    if(session) {
        return (
            <div>Leads</div>
        )
    }

    return <>
    Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
    </>
}

export default page