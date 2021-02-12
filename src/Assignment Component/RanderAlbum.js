import React, { useEffect, useState } from 'react'

export default function Randeralbum(props) {
    const [album, setAlbum] = useState([])
    const [album2, setAlbum2] = useState([])
    const [selectedAlbum, setselectedAlbum] = useState();
    const [renderProduct, setrenderProduct] = useState();


    useEffect(() => {
        fetchAlbum1()
        fetchAlbum2()
    }, []);

    const fetchAlbum1 = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setAlbum(json))
    }

    const fetchAlbum2 = () => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
            .then(response => response.json())
            .then(json => setAlbum2(json))
    }

    const product = e => {
        setselectedAlbum(e)
        setrenderProduct(true)
    }


    return (
        <div>

            {
                renderProduct ?
                    <div style={style.productWrapper}>
                        <button style={style.backBtn} onClick={() => setrenderProduct(false)}>
                            Back
                        </button><br />

                        {album2.map((items, index) => {
                            return selectedAlbum === index && <img src={items.url}
                                style={style.productImage}
                            />
                        })
                        }
                    </div>
                    :
                    <>
                        <div style={style.wrapper}>

                            {
                                album.map((items, index) => {
                                    return (
                                        <div key={index}
                                            style={style.container}
                                            onClick={() => product(index)}
                                        >
                                            <h5>{items.title}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
            }
        </div>
    )
}


const style = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '10px',
        height: '100%',
        backgroundColor: 'yellow',
    },
    container: {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    productWrapper: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#bca4a4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    productImage: {
        height: '400px',
        width: '400px'
    },
    backBtn: {
        width: '200px',
        padding: '15px 20px',
    },
}