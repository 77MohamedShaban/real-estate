import {
  Bath,
  BedDouble,
  Scan,
  Phone,
  Mail,
  MessageCircle,
  Link,
} from "lucide-react";
import housePhoto from "../assets/House1.jpg";
import { useState } from "react";
import Search from "../components/Search";

const properties = [
  {
    owner: {
      name: "ALi hamada",
      email: "shebl@mohamedshebl.me",
      phone: "01096918356",
      whatsapp: "01096918356",
    },
    city: {
      _id: "6603cdb48cc36a22dc4eb012",
      city_name_ar: "البساتين",
      city_name_en: "Al Basatin",
    },
    images: [
      housePhoto,
      "property-1712143505634-192261194.jpg",
      "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    ],
    approved: true,
    bedrooms: "5",
    bathrooms: "1",
    _id: "660d3c91dc1273022805abb4",
    area: "122",
    name: "Catalyst",
    description:
      "Palm Hills Company is launching its new project, PX Palm Hills, in the Eastern Expansion Area, 6 October, within the Palm Hills project, on a hill 140 meters above the ground.",
    price: 11319530,
    address: "PX Palm Hills, 6th of October, Giza",
    contract: "property-1712143505430-553036947.pdf",
    createdAt: "2024-04-03T11:25:05.891Z",
    updatedAt: "2024-04-04T21:19:57.206Z",
  },
];
const callsToAction = [
  { name: "Call", href: "#", icon: Phone },
  { name: "Email", href: "#", icon: Mail },
  { name: "WhatsApp", href: "#", icon: MessageCircle },
];

export default function HomePage() {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  return (
    <div className="bg-rgb(248, 231, 217) py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <Search setSearchValue={setSearchValue} />

        <div className="mx-auto max-w-2xl sm:text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Residential Properties for sale in Egypt
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enjoy with us, and manage your properties in safety and comfort
          </p>
        </div>
        {/* ///////////////////////////////////// Card //////////////////////////////////////////// */}
        {properties.map((property, index) => (
          <a key={index} href="/">
            <>
              <div
                className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-white "
                key={index}
              >
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 ">
                    {property.name}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {property.description}
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <Scan />
                      Area: {property.area} sqm
                    </li>
                    <li className="flex gap-x-3">
                      <Bath />
                      Bathrooms: {property.bathrooms}
                    </li>
                    <li className="flex gap-x-3">
                      <BedDouble />
                      Bedrooms: {property.bedrooms}
                    </li>
                  </ul>
                  <p className="mt-2 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl font-bold tracking-tight text-green-500">
                      ${property.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      EGP
                    </span>
                  </p>
                  <div className="grid grid-cols-2 gap-30 ">
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      {property.address}
                    </p>

                    <div className="grid grid-cols-3 border border-y-cyan-500  rounded-md divide-x divide-gray-900/5 bg-gray-100 ">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  {/* //////////////////// Image /////////////////////////// */}
                  <div
                    className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 "
                    style={{
                      backgroundImage: `url(${properties[index].images[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100%",
                    }}
                  ></div>
                  {/* ////////////////////////////////////////////////////// */}
                </div>
              </div>
            </>
          </a>
        ))}

        {/* ///////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
