import { useState, useEffect } from "react"
import { getGrifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGrifs( category )
            .then( imgs => {
                setState({ data: imgs, loading: false });
            })
    }, [ ] )
    return state;
}