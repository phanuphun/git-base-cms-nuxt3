import { useState } from "#app";
import { usePageState } from "#imports";

interface TocLink {
   id: string;
   text: string;
   depth: number;
   children?: TocLink[];
}

export const useTocData = (tocData:TocLink[]) =>{
   const readState = usePageState()
   const toc = useState<TocLink[]>('test',()=>[])
   if(process.client){
      if(readState.value === 'exploring'){
         toc.value = []
      }else{
         toc.value = tocData
      }
   }
   return toc
}
