import React from "react";
import soap from "../../assets/goods/soap.png";
import jewelry from "../../assets/goods/jewelry.png";
import toys from "../../assets/goods/soft-toys.png";

const ImageList = [
  {
    id: 1,
    img: soap,
    price: "1",
    tag: "New",
    title: "Handmade soap",
    description:
      "We are pleased to offer you to buy natural handmade soap for shower and bath, for children and adults, for body, for hair, with healing effect and with aromatherapy effect... For our part, we have made every effort to create for you the best natural soap based on gifts of nature.",
  },
  {
    id: 2,
    img: jewelry,
    price: "2",
    tag: "Sale",
    title: "Jewelry fittings",
    description:
      "Making jewelry with your own hands has recently become quite a popular hobby. Exclusive jewelry, made with soul, will be a great gift, and you can also open your own small business and sell them. But to make jewelry, you will definitely need jewelry accessories.",
  },
  {
    id: 3,
    img: toys,
    price: "3",
    tag: "Hot",
    title: "Soft toys",
    description:
      "Toys knitted with your own hands will be a wonderful gift for both children and adults. Interior toys in the Japanese style  will surprise others with their creativity, diversity and exclusivity, and may even become a talisman for someone.",
  },
];

const Main = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(soap);
  const [title, setTitle] = React.useState("Handmade soap");
  const [description, setDescription] = React.useState("We are pleased to offer you to buy natural handmade soap for shower and bath, for children and adults, for body, for hair, with healing effect and with aromatherapy effect... For our part, we have made every effort to create for you the best natural soap based on gifts of nature.");

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-full rotate-45 -z-9"></div>

        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-6 pt-12  lg:pr-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-4xl lg:text-6xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded"
                >
                  Order Now
                </button>
              </div>
              <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white text-black dark:bg-black dark:text-slate-50 rounded-3xl duration-200">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? soap : item.id === 2 ? jewelry : toys
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-4"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={item.img}
                      alt="biryani img"
                      className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    />
                    <div className="flex flex-col items-center justify-center lg:items-start">
                      <p className=" lg:text-lg font-bold">${item.price}</p>
                      <p className="text-sm ">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
