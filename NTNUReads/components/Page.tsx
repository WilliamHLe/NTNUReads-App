import {Button} from "react-native";
import React, {useEffect, useState} from "react";


const Page = (props:any) => {
    const [pagination, setPagination] = useState(1)
    const [count, setCount] = useState(0)
    const [countRes, setCountRes] = useState(0)

    useEffect(() => {
        setCountRes(props.countRes)
    }, [setCountRes, props.countRes])

    const prevPage = () => {
        if (pagination > 1) {
            setPagination(pagination - 1)
            setCount(count - 10)
            props.change(count-10)
        }
    }

    const nextPage = () => {
        if ((countRes/10) >= pagination ) {
            setPagination(pagination + 1)
            setCount(count + 10)
            props.change(count+10)
        }
    }

    return(
        <view>
            <Button
                onPress={prevPage}
                title="<"
            />
            <Button
                onPress={nextPage}
                title=">"
            />
            <text>Viser: {countRes} resultater</text>
            <text>Side: {pagination} av {Math.floor(countRes/10 + 1)}</text>
        </view>
    )
}

export default Page