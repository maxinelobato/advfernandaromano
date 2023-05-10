import LawIcon from "../icons/lawicon";

export function ButtonFloat(){
    return(
        <>
        <div className="items-center justify-center mx-auto">
        <a href="https://api.whatsapp.com/send?phone=5551980187011&text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vim%20pelo%20site%20de%20Direito%20de%20Família.%20Podemos%20conversar%3F%20" style={{textDecoration: 'none'}} target="_blank">
        <button className="z-[100] fixed bottom-3 right-8 pl-2 w-12 h-12 bg-[#25D366] rounded-full hover:bg-red-700 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d9d9d9" viewBox="0 0 256 256"><path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z"></path></svg>
        </button>
            </a>
        </div>
        </>
    )
}