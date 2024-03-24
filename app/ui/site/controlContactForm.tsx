"use client"

import { useState } from "react"
import { TextField } from "../components/textField"

export function ControlContactForm() {

    const [value, setValue] = useState<string>()

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const handlerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const handlerTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col w-full sm:flex-row gap-5">
                <TextField required label="nom" placeholder="seraphin" onChange={handlerChange} value={value} type="text" id="nom" />
                <TextField required label="post nom" placeholder="ndibwami" onChange={handlerChange} value={value} type="text" id="postNom" />
            </div>
            <TextField required label="adresse email" placeholder="seraphinnds@gmail.com" onChange={handlerEmailChange} value={value} type="email" id="email" />
            <TextField label="numero téléphone" placeholder="+243 992 345 315" onChange={handlerTelChange} value={value} type="tel" id="numeroTel" /> 
        </div>
    )
}