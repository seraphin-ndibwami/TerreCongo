"use client";

import { IoIosWarning } from "react-icons/io";
import { useState } from 'react';
import { Step0 } from './step0';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Step6 } from "./step6";
import { Step7 } from "./step7";
import Button from '../components/buttons';


export function MultiStepForm() {

    const hStep = [
        ["", ""],
        ["informations personnelles","Entrer les informations correctez sinon votre compte ne sera validé"],
        ["informations personnelles","Entrer les informations correctez sinon votre compte ne sera validé"],
        ["informations personnelles","Entrer les informations correctez sinon votre compte ne sera validé"],
        ["informations de contacts","Entrer les informations correctez sinon votre compte ne sera validé"],
        ["securité du compte","si votre compte est validé, vous utliserez ces informations pour vous connectez"],
        ["validation du compte","pour vous tenir informer nous utilisersons votre adresse mail, entre le code que nous envons envoyez à votre adresse pour valider vos informations de contact"],
        ["féliciations","il reste la validation de votre identité par le service d'identité numerique"],
    ]

    const [step, setStep] = useState<number>(0);
    const [state, setState] = useState<("inComplete" | "incheck" | "checked")[]>(
        [   
            "checked",
            "inComplete",
            "inComplete",
            "inComplete",
            "inComplete",
            "inComplete",
            "inComplete",
            "inComplete",
        ]
    )

    const next = (googstep : number) => {
        setState([...state].map((el, i) => i == googstep ? "checked" : el))
        setStep(step + 1);
    }
    const prev = () => {
        // alert("prev")
        setStep(step - 1)
        setState([...state].map((el, i) => i == step ? "inComplete" : el))
    }

    const handlerNext = () => {
        setState([...state].map((el, i) => i == step ? "incheck" : el))
    }

    return (
        < form className="w-full max-w-[500px]">
            <div className={`${step == 0 ? "flex" :  "hidden"}`}><Step0 onNext={next} /></div>
            
            <div className={`${step !== 0 
                ? "flex flex-col justify-between w-full h-full" 
                : "hidden"}`}>
                <div className='scrollbar-thin flex flex-col gap-5 w-full overflow-y-scroll mb-10'>
                    <div className="flex flex-col justify-between w-full gap-5">
                        <div>
                            <h1 className='font-bold'>
                                {hStep[step][0]}
                            </h1>
                        </div>
                        <div className="flex gap-3 w-full">
                            <IoIosWarning className="stroke-primary size-8 fill-primary min-w-[24px]"/>
                            <p className="text-xs">
                                {hStep[step][1]}
                            </p>
                        </div>
                    </div>
                    <div className={`${step == 1 ? "flex" :  "hidden"}`}>
                        <Step1 onNext={next} state={state[1]}
                            onComplete={() => setState([...state].map((el, i) => i == 1 ? "inComplete" : el))} />
                    </div>
                    <div className={`${step == 2 ? "flex" :  "hidden"}`}>
                        <Step2 state={state[2]} onNext={next}
                            onComplete={() => setState([...state].map((el, i) => i == 2 ? "inComplete" : el))} 
                        />
                    </div>
                    <div className={`${step == 3 ? "flex" :  "hidden"}`}>
                        <Step3 state={state[3]} onNext={next}
                            onComplete={() => setState([...state].map((el, i) => i == 3 ? "inComplete" : el))} 
                        />
                    </div>
                    <div className={`${step == 4 ? "flex" :  "hidden"}`}>
                        <Step4 state={state[4]} onNext={next}
                            onComplete={() => setState([...state].map((el, i) => i == 4 ? "inComplete" : el))} 
                        />
                    </div>
                    <div className={`${step == 5 ? "flex" :  "hidden"}`}>
                        <Step5 state={state[5]} onNext={next}
                            onComplete={() => setState([...state].map((el, i) => i == 5 ? "inComplete" : el))} 
                        />
                    </div>
                    <div className={`${step == 6 ? "flex" :  "hidden"}`}>
                        <Step6 state={state[6]} onNext={next}
                            onComplete={() => setState([...state].map((el, i) => i == 6 ? "inComplete" : el))} 
                        />
                    </div>
                    <div className={`${step == 7 ? "flex" :  "hidden"}`}>
                        <Step7 />
                    </div>
                </div>
                <div className={`${step == 7 ? "hidden" :  "flex justify-between w-full"}`}>
                    <Button onClick={prev} size='sm' variant='secondary' className='rounded-md flex-1 max-w-[100px] text-sm'>
                        précedent
                    </Button>
                    <Button onClick={handlerNext} size='sm' className='rounded-md flex-1 max-w-[100px] text-sm'>
                        suivant
                    </Button>
                </div>
            </div>
        </form>
    )

}