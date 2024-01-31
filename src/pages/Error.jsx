import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/page_not_found.svg'

const Error = () => {
    const error = useRouteError()
    console.log(error, 'heere')
    if(error.status === 404){
        return (
            <Wrapper>
                <div>
                    <img src={img} alt='page not found' />
                    <h3>Ohh!</h3>
                    <p>We can't seem to find the page you are looking</p>
                    <Link to='/' className='btn'>
                        Back Home
                    </Link>
                </div>
            </Wrapper>
        )
    }
  return (
    <Wrapper>
        <div>
            <h3>something went wrong</h3>
        </div>
    </Wrapper>
  )
}

export default Error