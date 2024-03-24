"use client";


import { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { TextField } from "../components/textField";




interface Step4Props {
    readonly state: "inComplete" | "incheck" | "checked";
    onNext: (step: number) => void;
    onComplete: (step: number) => void;
}


export function Step4(props: Step4Props) {


    const [check, setChek] = useState([
        false,
        false,
    ])

    const hanleEmailChamge = (e: ChangeEvent<HTMLInputElement>) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const str = e.target.value
        if (regex.test(str)) {
            setChek([...check].map((el, i) => i === 0 ? true : el))
        } else {
            setChek([...check].map((el, i) => i === 0 ? false : el))
        }

        if (props.state === "incheck") {
            props.onComplete(4)
        }
    }

    const handleNumeroTelChange = (e: ChangeEvent<HTMLInputElement>) => {

        const regex = /^\d{10}$/

        const str = e.target.value
        if (regex.test(str)) {
            setChek([...check].map((el, i) => i === 1 ? true : el))
        } else {
            setChek([...check].map((el, i) => i === 1 ? false : el))
        }

        if (props.state === "incheck") {
            props.onComplete(4)
        }
    }

    // alert(props.state)

    useEffect(() => {
        
        if (props.state === "incheck") {
            if (check.every(els => els)) {
                props.onNext(4)
            }
        }
    })

    return (
        <div className="w-full flex flex-col gap-8 items-center">
            <TextField id='adresseEmail' name='adresseEmail'
                required type='email'
                state={!check[0] && props.state === "incheck" ? "error" : "normal"}
                onChange={hanleEmailChamge}
                placeholder='adresse mail'
            />
            <TextField id='nummeroTelephone' name='nummeroTelephone' 
                required type='tel'
                state={!check[1] && props.state === "incheck" ? "error" : "normal"}
                onChange={handleNumeroTelChange}
                placeholder='numero téléphone'
            />
        </div>
    );
}


