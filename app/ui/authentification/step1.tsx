"use client";

import { AiOutlineEdit } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import { ChangeEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";
import { createPortal } from 'react-dom';
import { VideoModal } from "../components/videoModal";
import { TextField } from "../components/textField";
import { Console } from "console";


interface Step1Props {
  readonly state  :  "inComplete" | "incheck" | "checked";
  onNext: (step:number) => void;
  onComplete : (step:number) => void;
}

type dateParams = {
  min : string;
  max : string;
  value : string;
  state : 'normal' | 'error' | 'success' | 'active' ;
}

export function Step1(props: Step1Props) {

  const  [check, setChek] = useState([
    false,
    false,
    false,
    true
  ])

  useEffect(()=>{
    if(props.state === "incheck"){
      if(check.every(els => els)){
        props.onNext(1)
      }
    }
  })



  const videoRef = useRef<HTMLVideoElement>(null);
  const DivRef = useRef<HTMLDivElement>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const refImage = useRef<HTMLImageElement>(null)
  const [error, setError] = useState<string>('');

  const root = document.body
  let streaming: MediaStream;
  

  const today = new Date();
  const plusVieux = new Date(today.getFullYear() - 200, today.getMonth(), today.getDate());
  const minDate = plusVieux.toISOString().split('T')[0];
  const maxDate = today.toISOString().split('T')[0];
  

  const [dateParams, setDateParams] = useState<dateParams>(
    {
      min: plusVieux.toISOString().split('T')[0],
      max: today.toISOString().split('T')[0],
      value : maxDate ,
      state : "normal",
    }
  )

  
  const handleNameChange = (event:ChangeEvent<HTMLInputElement>) => {


    const str = event.target.value

    const wordRegex = /^[a-zA-Z0-9]{3,}$/;
    const words = str.split(" ")

    if(words.length >= 2 && words.length <= 4 && words.every(word => wordRegex.test(word))){
      setChek([...check].map((el, i) => i===1 ? true : el) )
    }else{
      setChek([...check].map((el, i) => i===1 ? false : el))
    }
    
    if(props.state === "incheck"){
      props.onComplete(1)
    }

  }

  const handleLieuChange = (event:ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value

    if(str.length > 3 ){
      setChek([...check].map((el, i) => i===2 ? true : el) )
    }else{
      setChek([...check].map((el, i) => i===2 ? false : el) )
    }

    if(props.state === "incheck"){
      props.onComplete(1)
    }

  }

  const DateChange = (event:ChangeEvent<HTMLInputElement>) => {
    
    if(event.target.min === minDate && event.target.max === maxDate){
      setDateParams({
        min: minDate,
        max: maxDate,
        value : event.target.value,
        state : "normal"
      })
      setChek([...check].map((el, i) => i===3 ? true : el) )
    }else{
      setDateParams({
        min: minDate,
        max: maxDate,
        value : maxDate,
        state : "error"
      })
      setChek([...check].map((el, i) => i===3 ? false : el) )
    }

    if(props.state === "incheck"){
      props.onComplete(1)
    }

  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {

    console.log(e.target.files)
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Le fichier doit être une image.');
        setChek([...check].map((el, i) => i===0 ? false : el) )
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

        setChek([...check].map((el, i) => i===0 ? true : el) )

        reader.readAsDataURL(file);
      }
    }

    if(props.state === "incheck"){
      props.onComplete(1)
    }

  };

  const handleCapture = async () => {

    DivRef.current?.classList.remove('hidden');

    try {
      if (videoRef.current) {

        streaming = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        videoRef.current.srcObject = streaming;
        videoRef.current.play();

        videoRef.current.addEventListener(
          "canplay",
          (ev) => {
            if (!streaming
              && videoRef.current !== undefined
              && videoRef.current !== null) {

            }
          },
          false,
        );

      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePicture = async (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    if (videoRef.current) {

      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current?.videoWidth as number;
      canvas.height = videoRef.current?.videoHeight as number;

      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current as HTMLVideoElement, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        setImageData(dataURL);
      }
    }
    DivRef.current?.classList.add('hidden');

    const tracks = streaming.getVideoTracks();
    tracks[0].stop();

    ev.preventDefault();
  }

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className='w-full flex flex-col gap-3'>
        <h1 className='text-sm font-semibold'>votre portrait</h1>
        <div className='flex w-full gap-8 justify-between items-stretch'>
          <div className={clsx(`relative overflow-hidden w-full max-w-[300px] aspect-square flex items-center justify-center
            border rounded-xl`,{
              "border-primary" : !check[0] && props.state === "incheck",
              "border-divider" : check[0] || props.state !== "incheck",
            })}>
            <label htmlFor="imageProtrait"
              className={`${imageData ?
                "relative w-full h-full flex items-center justify-center"
                : ""}`}>
              {
                imageData &&
                <Image ref={refImage}
                  alt="imagePrortrait"
                  src={imageData as string | StaticImport}
                  width={300}
                  height={300}
                  className="
                    w-full max-w-[300px]
                    h-full max-h-[300px]
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
            <input required hidden  type="file" name="imageProtrait" id="imageProtrait" accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className='flex flex-col items-center flex-grow gap-0.5'>
            <hr className='border-l-2 h-3 border-secondary-text' />
            <span className='font-semibold'>ou</span>
            <hr className='border-l-2 h-3 border-secondary-text' />
          </div>
          <div className="">
            <IoCameraOutline onClick={handleCapture}
              className='stroke-primary z-0 stroke-1 size-14 hover:scale-105
                transition'
            />
            {createPortal(
              <VideoModal className="hidden fixed top-0 h-screen bg-black/80  w-full"
                takePicture={takePicture}
                divRef={DivRef}
                videoRef={videoRef}
                imageData={imageData as string} />, root)
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <TextField required onChange={handleNameChange} 
          id='nomC' name='nomC'
          state={!check[1] && props.state === "incheck" ? "error" : "normal"}  
          placeholder="nom complet (nom, postnom, prénom)" />
        <div className="flex justify-between gap-5">
          <TextField required onChange={handleLieuChange} 
            id='lieuN' name='lieuN'
            state={!check[2] && props.state === "incheck" ? "error" : "normal"} 
            placeholder="lieu de naissance"/>
          <TextField required type="date" onChange={DateChange} 
            id='dateN' name='dateN'
            state={!check[3] && props.state === "incheck" ? "error" : "normal"} 
            min={dateParams.min} max={dateParams.max} value={dateParams.value}
          />
        </div>
      </div>
    </div>
  );
}


