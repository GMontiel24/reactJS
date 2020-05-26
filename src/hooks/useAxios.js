import { useState, useEffect } from 'react'
import axios from 'axios'


const useAxios = url => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //similar a componentDidMount(). Se usa cuando se renderea por 1era vez o se actualiza.
    useEffect(() => {
        const axiosResource = async () => {
            try {
                await axios(url)
                    .then(res => {
                        console.log(res.data);
                        setData(res.data)
                        setLoading(false)
                    })
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        axiosResource()
    }, [url])

    return { data, loading, error }
}

export default useAxios