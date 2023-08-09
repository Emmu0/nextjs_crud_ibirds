import { NextResponse } from "next/server";
// const localStorageData = localStorage.getItem("token")

export default function midleware(req){
    const verify = req.cookies.get("token");
    const url = req.url
    console.log(req.cookies.get("token"),req.url,url.includes("/addTopic"),'req1111');
    if(!verify && url.includes("/addTopic") ){
      return  NextResponse.redirect("http://localhost:3000/")
    }

}