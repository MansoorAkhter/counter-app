// import React from 'react';
import React, { useState } from 'react';

function FormHand() {

    const [students, setStudents] = useState([
        {
            name: "Mansoor",
            batch: "Batch 7",
            roll: "17509",
            class: "Web & Mobile",
        },
        {
            name: "Saqib",
            batch: "Batch 7",
            roll: "15691",
            class: "Web & Mobile",
        },
        {
            name: "Mohsin",
            batch: "Batch 7",
            roll: "18564",
            class: "Web & Mobile",
        },
        {
            name: "Sufiyan",
            batch: "Batch 7",
            roll: "14569",
            class: "Web & Mobile",
        },
    ])

    console.log("students", students)
    return (
        <div>
            <h3>List of Students</h3>

            <table >
                <tr>
                    <th>No:</th>
                    <th>Student Name</th>
                    <th>Student Batch</th>
                    <th>Student Roll No</th>
                    <th>Student Class</th>
                </tr>
                {
                    students.map((student, index) => {
                        return (
                            <tr>
                            <td>{index+1}</td>
                                <td>{student.name}</td>
                                <td>{student.batch}</td>
                                <td>{student.roll}</td>
                                <td>{student.class}</td>

                            </tr>
                        )
                    })
                }



            </table>
        </div>
    )

}

export default FormHand;