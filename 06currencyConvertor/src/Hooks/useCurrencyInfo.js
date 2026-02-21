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
    return data;// we are returning the data which is the exchange rate of the currency with respect to usd, so that we can use it in our component to convert the amount from one currency to another.
}

export default useCurrencyInfo;