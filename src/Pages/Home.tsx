import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div className="card" >
            <h1>Home page</h1>
            <div style={{ marginTop: '100px',
                textAlign: 'center'}}>
            <Link style={{textDecoration : 'none'}} to='/todo'>
            <Button variant="contained"
                style={{margin : 'auto', }}
            >
               To Do List page
            </Button>
            </Link>
            </div>
        </div>
    )
}
