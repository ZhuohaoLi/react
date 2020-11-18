import {useEffect} from 'react';
export default function useDocumentTitle(title){
    useEffect(() => {
        document.title = title;
        return () => {
          console.log("Clean up");//gets called whenever the component is re-rendered
        };
    });
}