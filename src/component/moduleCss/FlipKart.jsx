import style from "./flipkart.module.css";
let FlipKart = (props) => {
    console.log(props);
    console.log(props.data.setLoggedOut);


    return (
        <header id={style.header}>
            {/* <article id={style.logo}></article>
            <article className={style.rightnav}></article> */}

            <div id={style.logo}>
                <h1>Logo</h1>
                <input type="text" placeholder="🔍" />
            </div>
            <div id={style.rightnav}>

                {props.data.stLogin ? (
                    <>
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#" onClick={() => { props.data.setLoggedOut(props.data.stLogin = false) }}>Logout</a></>) : (
                    <>
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#" onClick={() => { props.data.setLoggedOut(props.data.stLogin = true) }}>Login</a>
                    </>)}


            </div>

        </header>
    )
}
export default FlipKart