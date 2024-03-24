"use client";


import { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { TextField } from "../components/textField";
import Button from '../components/buttons';
import clsx from 'clsx';
import Image from 'next/image';
import { AiOutlineEdit } from "react-icons/ai";



interface Step3Props {
    readonly state: "inComplete" | "incheck" | "checked";
    onNext: (step: number) => void;
    onComplete: (step: number) => void;
}


export function Step3(props: Step3Props) {

    const [etatCivil, setEtatCivil] = useState<"celibataire" | "marié(e)">("celibataire")
    const [imageData, setImageData] = useState<string>();
    const [error, setError] = useState<string>('');

    const [check, setChek] = useState([
        true,
        false,
        false,
        false,
    ])

    const handleClik1 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setEtatCivil("celibataire");

    }
    const handleClik2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setEtatCivil("marié(e)");

    }

    const hanleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value
        const numberValue: number = parseInt(str);

        if (isNaN(numberValue)) {
            setChek([...check].map((el, i) => i === 1 ? false : el))
        } else {
            setChek([...check].map((el, i) => i === 1 ? true : el))
        }
        
        if (props.state === "incheck") {
            props.onComplete(3)
        }
    }
    const hanleNationaliteChange = (e: ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value

        if (str.length > 6) {
            setChek([...check].map((el, i) => i === 2 ? true : el))
        } else {
            setChek([...check].map((el, i) => i === 2 ? false : el))
        }

        if (props.state === "incheck") {
            props.onComplete(3)
        }
    }

    const hanleImageChange = (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files && e.target.files[0];


        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Le fichier doit être une image.');
                setChek([...check].map((el, i) => i === 3 ? false : el))
            } else {

                const reader = new FileReader();

                reader.onload = () => {

                    if (typeof reader.result == "string") {
                        setImageData(reader.result);
                        setError('');
                    } else {
                        setError('Le fichier doit être une image.');
                    }
                };

                setChek([...check].map((el, i) => i === 3 ? true : el))

                reader.readAsDataURL(file);
            }
        }

        if (props.state === "incheck") {
            props.onComplete(3)
        }
    }

    // alert(props.state)

    useEffect(() => {
        
        if (props.state === "incheck") {
            if (check.every(els => els)) {
                props.onNext(3)
            }
        }
    })


    return (
        <div className="w-full flex flex-col gap-8 items-center">
            <div className='flex w-full justify-between gap-10'>
                <Button variant='transparent' onClick={handleClik1}
                    className={clsx('border-2 text-sm rounded-md flex-1 hover:text-white transition', {
                        'border-primary text-primary': etatCivil === "celibataire",
                        'border-secondary-text text-black': etatCivil === "marié(e)",
                    }
                    )}>
                    celibataire
                </Button>
                <Button variant='transparent' onClick={handleClik2}
                    className={clsx('border-2 text-sm rounded-md flex-1 hover:text-white transition', {
                        'border-primary text-primary': etatCivil === "marié(e)",
                        'border-secondary-text text-black': etatCivil === "celibataire",
                    }
                    )}>
                    marié(e)
                </Button>
                <input hidden type="text" name="etatCivile" id="etatCivile" defaultValue={etatCivil} />
            </div>
            <TextField onChange={hanleNumberChange}
                id='nombreEnfants' name='nombreEnfants'
                placeholder='nombres des enfants à votre charge' required type='number'
                state={!check[1] && props.state === "incheck" ? "error" : "normal"} />
            <TextField onChange={hanleNationaliteChange}
                id='nationalite' name='nationalité'
                placeholder='nationalite'
                state={!check[2] && props.state === "incheck" ? "error" : "normal"} />
            <div className={clsx(`relative overflow-hidden w-full min-h-[200px] max-h-[400px] flex items-center justify-center
                border rounded-xl`, {
                    "border-primary": !check[3] && props.state === "incheck",
                    "border-divider": check[3] || props.state !== "incheck",
                })}>
                <label htmlFor="imageCarteId"
                    className={`${imageData ?
                        "relative w-full h-full flex items-center justify-center"
                        : ""}`}>
                    {
                        imageData &&
                        <Image
                            alt="imageCarteId"
                            src={imageData}
                            width={300}
                            height={300}
                            className="
                    w-full
                    h-full
                    object-cover
                    overflow-hidden
                  "
                        />
                    }
                    <p className={clsx("px-4 text-xs py-2 transition rounded-lg", {
                        " shadow-md hover:shadow-xl  bg-white": !imageData,
                        " text-stone-100 absolute right-2 bottom-2 bg-transparent backdrop-blur-xl": imageData
                    })}>
                        {imageData
                            ? (<AiOutlineEdit className="stroke-white size-6 hover:scale-105" />)
                            : (<span>sur votre appareil</span>)
                        }
                    </p>
                </label>
                <input required hidden type="file" name="imageCarteId" id="imageCarteId" accept="image/*"
                    onChange={hanleImageChange}
                />
            </div>
        </div>
    );
}


