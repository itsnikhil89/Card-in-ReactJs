function Price({mrp,discount}){
    let clr={
        backgroundColor:"yellow",
        height:"54px",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",

    };
    let padding={
        padding:"18px"
    };
    return (
    <div style={clr} className="price">
    <p style={padding}><s>{mrp}</s> &nbsp;&nbsp;<strong>{discount}</strong></p>
    </div>
    
     
);
}
export default Price;