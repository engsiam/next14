import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div>
        <h1>404 not Found</h1>
        <Link href="/">Go back</Link>
    </div>
  )
}
