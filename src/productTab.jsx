import Products from "./products";
import './productTab.css' ;
function ProductTab(){
    return(
        <div className="productTab">
        <h3>Blockbuster Deals on Computer Accessories |Shop Now</h3>
            <Products title="Logitech MX Master 35" desc={[<li>8000 DPI</li>,<li>5 Progrramable Buttons</li>]}/>
            <Products title="Logitech MX Master 35" desc={[<li>8000 DPI</li>,<li>5 Progrramable Buttons</li>]} mrp="12000" discount={10999}/>
            <Products title="Logitech MX Master 35" desc={[<li>8000 DPI</li>,<li>5 Progrramable Buttons</li>]} mrp="1200" discount={999}/>
            <Products title="Logitech MX Master 35" desc={[<li>8000 DPI</li>,<li>5 Progrramable Buttons</li>]} mrp="1200" discount={999}/>
        </div>

    )
}
export default ProductTab;