
const MenuItem = ({item}) => {
    const {name,recipe,image,price}=item || {};
    return (
        <div className="flex items-center gap-8">
            <div className="">
                <img src={image} className="w-[100px] " style={{borderRadius:'0px 200px 200px 200px'}} alt="" />
            </div>
            <div className="">
              <div className="flex items-center justify-between">
              <h3 className="text-xl">{name} -----------------</h3>
                <p className="text-yellow-600">${price}</p>
              </div>
                <p className="text-base">{recipe}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;