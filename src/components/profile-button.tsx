import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export function ProfileButton() {
    return (
        <div>
           <Link href="/login">
            <Button>Login</Button>
            </Link> 
        </div>
    )
}
