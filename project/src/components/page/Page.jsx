import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Page({children}) {
  return (
    <div>
        <Header/>
        <main> {children} </main>
        <Footer/>
    </div>
  );
}

export default Page;
