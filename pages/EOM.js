//"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth

import React from 'react'

const EOM = ({employee}) => {
  return (
    <div>{employee.name}</div>
  )
}

export const getServerSideProps = async pageContext => {
    const response = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth")
    const employee = await response.json()
 
    return {
        props: {
            employee
        }
    }
}

export default EOM







