import React, { useState } from 'react'

export default function Test2(props) {

    const objectArray = [
        {
            name: 'Siraj',
            fatherName: 'Shahid Ahmed',
            designation: 'Student',
            joiningDate: '13 / 11 / 2020',
            salary: 'Rs 50,000'
        },
        {
            name: 'Ahmed',
            fatherName: 'Faraz Ahmed ',
            designation: 'Officer',
            joiningDate: '11 / 1 / 2020',
            salary: 'Rs 15,000'
        },
        {
            name: 'Atif',
            fatherName: 'Ijaz Ahmed',
            designation: 'Student',
            joiningDate: '15 / 8 / 2018',
            salary: 'Rs 18,000'
        },
    ]

    const [data, setData] = useState(objectArray);

    const handleDelete = index => {
        const getObject = [...data]
        getObject.splice(index, 1)
        setData(getObject)
    }

    return (
        <>
            <h1>Task Two</h1>
            <div>
                <table border='1'>
                    {data.map((items, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th>{items.name}</th>
                                    <td>{items.fatherName}</td>
                                    <td>{items.designation}</td>
                                    <td>{items.joiningDate}</td>
                                    <td>{items.salary}</td>

                                    <button onClick={() => handleDelete(index)}>Delete Button</button>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
