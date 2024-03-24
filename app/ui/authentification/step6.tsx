"use client";


import { ChangeEvent, useRef } from 'react';
import { useState, useEffect } from 'react';
import { TextField } from "../components/textField";
import { FaSlideshare } from 'react-icons/fa';




interface Step6Props {
    readonly state: "inComplete" | "incheck" | "checked";
    onNext: (step: number) => void;
    onComplete: (step: number) => void;
}


export function Step6(props: Step6Props) {

    const elementCode = [
        "code1",
        "code2",
        "code3",
        "code4",
        "code5",
    ]

    const refInputsCode = [

        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),   
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ]

    const [stateCode, setStateCode ] = useState<string[]>([
        "",
        "",
        "",
        "",
        "",
    ]);

    const [check, setChek] = useState(false)

    const handleCodeChange = (e: ChangeEvent<HTMLInputElement>, el: number) => {

        const str = e.target.value;
        console.log(str)
        
        if(str.length <= 1){
            setStateCode([...stateCode].map((element, i) => i === el  ? str : element))
            
        }
        if(str.length === 1){
            refInputsCode[el + 1]?.current?.focus()
        }

        if(!refInputsCode[el + 1]){
            refInputsCode[el].current?.blur( )
        }

        if (props.state === "incheck") {
            props.onComplete(6)
        }



    }

    useEffect(()=>{
        if(stateCode.every(element  => (element?.length === 1))){
            setChek(true)
        }else{
            setChek(false)
        }
    },[check, stateCode])

    // alert(props.state)

    useEffect(() => {

        console.log(check)
        if (props.state === "incheck") {
            if (check) {
                props.onNext(6)
            }
        }
    })


    return (
        <div className="w-full flex flex-col gap-8 items-center">
            <div className='flex gap-1'>
                <p className='w-[40px] border-2 rounded-md border-secondary-text
                    flex items-center justify-center font-bold text-xl'>
                    T
                </p>
                <div className='flex gap-1 items-center'>
                    {elementCode.map((el, i) => (
                        <>
                            <span>-</span>
                            <TextField className='min-w-[20px] w-[40px] text-center flex items-center justify-center font-medium'
                                ref={refInputsCode[i]} key={el} id={el} name={el}
                                required type='text'
                                value={stateCode[i]}
                                state={!check && props.state === "incheck" ? "error" : "normal"}
                                onChange={(event) => handleCodeChange(event, i)}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}



