import { useState } from "#app";
type ReadState = 'reading' | 'isHome' | 'other'

export const useReadState = () =>{
  return useState<ReadState>('read', ()=>  'isHome' )
}
