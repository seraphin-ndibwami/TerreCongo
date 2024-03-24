"use client";


import { ChangeEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TextField } from "../components/textField";


interface Step2Props {
    readonly state  :  "inComplete" | "incheck" | "checked";
    onNext: (step:number) => void;
    onComplete : (step:number) => void;
}


export function Step2(props: Step2Props) {

  const  [check, setChek] = useState([
    false,
    false,
    true,
    true,
  ])

  const hanleAdresseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value

    if(str.length > 3 ){
      setChek([...check].map((el, i) => i===0 ? true : el) )
    }else{
      setChek([...check].map((el, i) => i===0 ? false : el) )
    }

    if(props.state === "incheck"){
      props.onComplete(2)
    }
  }

  const hanleProfessionChange = (e: ChangeEvent<HTMLInputElement>) => {

    const str = e.target.value

    if(str.length > 3 ){
      setChek([...check].map((el, i) => i===1 ? true : el) )
    }else{
      setChek([...check].map((el, i) => i===1 ? false : el) )
    }

    if(props.state === "incheck"){
      props.onComplete(2)
    }
  }

  useEffect(()=>{
    if(props.state === "incheck"){
      if(check.every(els => els)){
        props.onNext(2)
      }
    }
  })


  return (
    <div className="w-full flex flex-col gap-8 items-center">
        <TextField onChange={hanleAdresseChange}
          id='adresse' name='adresse'
          placeholder='adresse exacte' required
          state={!check[0] && props.state === "incheck" ? "error" : "normal"}/>
        <TextField onChange={hanleProfessionChange}
          id='preofession' name='preofession'
          placeholder='profession (emploi, activité, fonction, grade exacte)' required
          state={!check[1] && props.state === "incheck" ? "error" : "normal"}/>
        <TextField placeholder="noms complet de l'employeur (de l'établissement)"
          id='nomEmploayeur' name='nomEmploayeur'/>
        <TextField placeholder="adresse exacte de l'employer" 
          id='adresseEmploeyeur' name='adresseEmploeyeur'/>
    </div>
  );
}


