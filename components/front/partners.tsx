import Image from "next/image";

export default function Partners() {
    const partners = [
        {
            name: "Transcorp Hilton",
            logo: "/images/partners/transcorp.png"
        },
        {
            name: "Eko Hotels & Suites",
            logo: "https://tailwindui.com/plus/Image/logos/158x48/reform-logo-gray-900.svg"
        },
        {
            name: "Wheatbaker Hotel",
            logo: "https://tailwindui.com/plus/Image/logos/158x48/tuple-logo-gray-900.svg"
        },
        {
            name: "Sheraton Hotel",
            logo: "https://tailwindui.com/plus/Image/logos/158x48/savvycal-logo-gray-900.svg"
        },
        {
            name: "Radisson Blu Anchorage",
            logo: "https://tailwindui.com/plus/Image/logos/158x48/statamic-logo-gray-900.svg"
        },
    ]
    return (
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Collaborating with the World’s Top Innovators
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {
                partners.map((item, i) => {
                    return (
                        <Image
                        key={ i }
                        alt={ item.name }
                        src={ item.logo }
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      />
                    )
                })
            }
          </div>
        </div>
      </div>
    )
  }
  