import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const TestiMonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-14">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {

                    reviews.map(review =>
                        <SwiperSlide
                            key={review?._id}
                            className="">
                            <div className="text-center px-16 md:px-28 py-5">
                             <div className="flex justify-center pb-12">
                             <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />
                             </div>
                                <p>{review?.details}</p>
                                <h3 className="text-2xl text-yellow-600 font-semibold">{review?.name}</h3>
                            </div>
                        </SwiperSlide>

                    )
                }
            </Swiper>
        </div>
    );
};

export default TestiMonials;