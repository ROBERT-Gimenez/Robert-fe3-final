import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
    const [detail , setDetail] = useState({});
    const {state} = useContextGlobal()
    const {id} = useParams();
    const url = "https://jsonplaceholder.typicode.com/users/"+ id
    useEffect(() => {
        axios(url).then((res) => {
            console.log(res.data)
            setDetail(res.data)
        })
    },[])



  return (
    <div className={'Detail-content ' + (!state.theme ? "dark" : "white")}>
      <table className={'Detail-table ' + (!state.theme ? "dark" : "white")}>
        <thead >
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.username}</td>
            <td>{detail.phone}</td>
            <td>{detail.email}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail