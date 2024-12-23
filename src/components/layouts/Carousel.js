// export default config;
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function ComponentCarousel() {
  return (
    <div className="h-56 sm:h-64 lg:h-60 xl:h-72">
      <Carousel>
        <Image
          src={
            "https://drive.google.com/file/d/1YyR27J9lzS_5gBxS56ObiW5NrDM9xNNx"
          }
          alt=""
          width={1500}
          height={800}
          className="h-full w-full object-cover"
        />
        <Image
          src={
            "https://lh3.googleusercontent.com/Z_zcw9_7z9-9Uzk6HEeFdgQNrgi1Fp1luRrMyWwka7GrOJHRoz6xpsgyo-Von4w8AzfRRG4-UsWHmMkM=s239-c"
          }
          alt=""
          width={1500}
          height={800}
          className="object-cover"
        />
        <Image
          src={
            "https://lh3.googleusercontent.com/5vf9ttatOwwCE1g9Qk1GFipikuaSb06NbZ_U4GSRbQcDUvNYqjRa0W24O4tW2fqVQQ8xc2Om4LEDD267=s239-c"
          }
          alt=""
          width={1500}
          height={800}
          className="object-cover"
        />
        <Image
          src={
            "https://lh3.googleusercontent.com/p/AF1QipOJarUCZ9o127h1cS_auid1devKl74_PpnJZUVn=s239-c"
          }
          alt=""
          width={1500}
          height={800}
          className="object-cover"
        />
        <Image
          src={
            "https://lh3.googleusercontent.com/FvUe0K_gIfdfgiKH1j0UBs-SpPoeuRO_6cBpVPI-rRlOI-MT3AhGPvTHn9MbQxELyv53QNoJ5IND7gy1=s239-c"
          }
          alt=""
          width={1500}
          height={800}
          className="object-cover"
        />
        
        
      </Carousel>
    </div>
  );
}
