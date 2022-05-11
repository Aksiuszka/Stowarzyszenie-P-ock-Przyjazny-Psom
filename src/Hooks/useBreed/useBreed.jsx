import React from 'react'
import {useState, useEffect} from 'react';

const localCache ={};
export default function useBreed(animal) {
    const [breedList, setBreedList] = useState("");
    const [status, setStatus] = useState("unloaded");

    useEffect(()=>{
        if(!animal){
            setBreedList([]);
        }
        else if(localCache[animal]){
            setBreedList(localCache[animal]);
        }
        else{
            requestBreedList();
        }

        async function requestBreedList(){
            setStatus("pending");
            setBreedList([]);
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            localCache[animal]= json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    })

  return (
    <div>useBreed</div>
  )
}

