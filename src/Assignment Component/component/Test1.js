import React, { useState } from 'react'
import gig from '../images/gig.PNG'
import gig2 from '../images/gig2.PNG'

export default function Test(props) {

    const [gigChange, setGigChange] = useState();

    return (
        <>
            {gigChange ?
                <img src={gig} />
                :
                <img src={gig2} />
            }
            <br />
            <button onClick={() => setGigChange(!gigChange)} >change Gig</button>
        </>
    )
}
