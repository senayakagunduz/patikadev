import { useState } from "react"
import React from 'react'
import "./todoSandbox.css";

function TodoSandbox() {
    const INITIAL_STATE = [{ id: 1, baslik: "alisveris yap", tamamlandi: false },
    { id: 2, baslik: "fatura öde", tamamlandi: true }]
    const [liste, setListe] = useState(INITIAL_STATE);
    const [yeniBaslik,setYeniBaslik]=useState("");

    const addNew=title=>{
        setListe([...liste,{id:Date.now(), baslik:title,tamamlandi:false}]);
        setYeniBaslik("");
    }
    const markCompleted=(id)=>{
        setListe(
                 liste.map(el => el.id === id ? { ...el, tamamlandi: !el.tamamlandi }
                    : el));
               }
    const clearCompleted=()=>{
        setListe(liste.filter(item=>!item.tamamlandi))
    }
    return (
        <div className="main">
            <div>
                <h1 className="title">Yapılacaklar listesi</h1>
                <div className="ekleme_formu">
                    <input className="input" value={yeniBaslik} onChange={(e)=>setYeniBaslik( e.target.value)} placeholder="Listeye ekle" />
                    <button className="btn-ekle"
                     onClick={()=> {
                        // setListe([...liste,{id:Date.now(),baslik:yeniBaslik,tamamlandi:false}]);
                        // setYeniBaslik("");bu kodun yerine addNew kod bloğunu koyuyorum
                        addNew(yeniBaslik);
                    }
                    }>Ekle</button>
                     {/* buton tıklandığında listeyi aç önceki elemanları ekle, sonra da girilen objeyi yazdır. */}
                </div>
                <div className="liste">
                    {
                        liste.map((item,index) => (
                            <div key={index}
                            onClick={() => {
                                markCompleted(item.id)}
                                //  setListe(
                                //     liste.map(el => el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi }
                                //         : el));
                                //üstteki kodları yeniden düzenledik ve markCompleted metodunu yazdık ki daha anlaşılır olsun

                            } className={item.tamamlandi ? 'yapildi' : ""}>{item.baslik}</div>))
                    }
                </div>
                <button className="temizle" onClick={()=>clearCompleted()}>Tamamlananları temizle</button>
            </div>
        </div>
    )
}

export default TodoSandbox