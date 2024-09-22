import { useState } from "#app";
import { usePageState } from "#imports";

interface TocLink {
   id: string;
   text: string;
   depth: number;
   children?: TocLink[];
}

/**
 *
 * @param tocData รับข้อมูลประเภท TocLink[] ที่ได้จาก queryContent() เพื่อเพิ่มข้อมูลไปยัง SideBar TOC
 * @returns
 */
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
