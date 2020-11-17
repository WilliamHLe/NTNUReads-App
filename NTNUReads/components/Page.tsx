import React, {useEffect, useState} from "react";
import { DataTable } from "react-native-paper";


const Page = (props:any) => {
    const [pagination, setPagination] = useState(1)
    const [count, setCount] = useState(0)
    const [countRes, setCountRes] = useState(0)

    useEffect(() => {
        setCountRes(props.countRes)
    }, [countRes, props.countRes])


    const changePage = (page:any) => {
        if (pagination > 1 && page < pagination) {
            setPagination(page)
            setCount(count - 10)
            props.change(count-10)
        }
        if ((countRes/10) >= pagination && page > pagination) {
            setPagination(page)
            setCount(count + 10)
            props.change(count+10)
        }
    }

    return(
        <DataTable.Pagination
            style={{alignSelf: "center"}}
            page={pagination}
            numberOfPages={Math.floor(countRes/10 + 2)}
            onPageChange={page => {
                changePage(page)
            }}
            label={`Side ${pagination} av ${Math.floor(countRes/10 + 1)}`}
        />
    )
}

export default Page