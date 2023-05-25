import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="feature-item my-20 pt-5 bg-fixed text-white ">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:gap-16 md::px-36 md:pb-20 md:pt-12 pt-4 px-10 pb-12">
          <div className="">
                <img src={img1} alt="" />
            </div>
            <div className="text-white">
                <p>March 20,2023</p>
                <h4 className="uppercase text-xl">Where can i get some?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline border-0 border-b-4 text-white uppercase">Read More</button>
            </div>
          </div>

        </div>
    );
};

export default Featured;