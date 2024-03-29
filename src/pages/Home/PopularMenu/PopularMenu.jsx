import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item?.category==='popular');
            setItems(popularItems)
        })
    },[])
    return (
       <section>
        <SectionTitle
        subHeading={'Check it out'}
        heading={'FROM OUR MENU'}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-12">
            {
                items.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;