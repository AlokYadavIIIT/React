import { useEffect, useState } from "react";//custom hook

function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(
  `https://api.exchangerate.host/latest?base=${currency.toUpperCase()}`
)

            .then((res) => res.json())
            .then((res) => setData(res[currency]))// it means res['inr'] if currency is inr
            // console.log(res[currency]);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;