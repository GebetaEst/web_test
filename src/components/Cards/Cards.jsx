const Card = ({children , ...props}) => {
    return ( 
        <div className=" w-fit py-2 px-3 bg-white border border-[#e0cda9] rounded-lg font-noto m-2 shadow-lg" {...props}>
        {children}
        </div>
     );
}
 
export default Card;