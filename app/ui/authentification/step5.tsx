"use client";


import { ChangeEvent } from 'react';
import { useState, useEffect} from 'react';
import { TextField } from "../components/textField";




interface Step5Props {
    readonly state: "inComplete" | "incheck" | "checked";
    onNext: (step: number) => void;
    onComplete: (step: number) => void;
}


export function Step5(props: Step5Props) {

    const [passWord, setPassWord] = useState<string>()

    const [check, setChek] = useState([
        false,
        false,
    ])

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {

        // Longueur minimale de 8 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=[\]{}|:;'"/?.])[A-Za-z\d!@#$%^&*()-_+=[\]{}|:;'"/?.]{8,}$/;
        const str = e.target.value
        setPassWord(str)


        if (regex.test(str)) {
            setChek([...check].map((el, i) => i === 0 ? true : el))
        } else {
            setChek([...check].map((el, i) => i === 0 ? false : el))
        }

        if (props.state === "incheck") {
            props.onComplete(5)
        }
    }

    const handleConfrimPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value

        if (str === passWord) {
            setChek([...check].map((el, i) => i === 1 ? true : el))
        } else {
            setChek([...check].map((el, i) => i === 1 ? false : el))
        }


        if (props.state === "incheck") {
            props.onComplete(5)
        }
    }

    // alert(props.state)

    useEffect(() => {

        if (props.state === "incheck") {
            if (check.every(els => els)) {
                props.onNext(5)
            }
        }
    })


    return (
        <div className="w-full flex flex-col gap-8 items-center">
            <TextField id='password' name='password'
                required type='password'
                state={!check[0] && props.state === "incheck" ? "error" : "normal"}
                onChange={handlePasswordChange}
                placeholder='mot de passe'
            />
            <TextField id='confirmPassword' name='confirmPassword'
                required type='password'
                state={!check[1] && props.state === "incheck" ? "error" : "normal"}
                onChange={handleConfrimPasswordChange}
                placeholder='confirmer le mot de passe'
            />
        </div>
    );
}



