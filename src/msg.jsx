export default function Msg({user,clr}){
    let txtclr={color: clr};
    return <h1 style={txtclr}>Hello,{user}</h1>
}