"use client";
import CountryInfoItem from "@/app/components/CountryInfoItem";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Country(props) {
  const [country, setCountry] = useState();

  const ccn3 = props.params.ccn3;

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${ccn3}`);
      const c = await res.json();
      setCountry(c[0]);
      console.log(c);
    };
    fetchCountry();
  }, [ccn3]);

  return (
    country && (
      <section className="mt-20 flex flex-col gap-2">
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-slate-200 font-bold text-3xl">
            {country.name.common}
          </h3>
          <Link
            className="flex w-fit"
            target="_blank"
            href={country.maps.googleMaps}
          >
            🎯
          </Link>
        </div>
        <div className="text-slate-500 italic text-center mb-10 ">
          {country.altSpellings.join(", ")}
        </div>
        <div className="flex justify-evenly">
          <Image
            src={country.flags.svg}
            width={250}
            height={200}
            alt={country.flags.alt}
          />
          <div className="flex flex-col gap-3">
            <CountryInfoItem
              label="Official Name"
              content={country.name.official}
            />
            <CountryInfoItem label="Capital" content={country.capital} />
            <CountryInfoItem label="Region" content={country.region} />
            <CountryInfoItem
              label="Population"
              content={country.population.toLocaleString()}
            />
          </div>
        </div>
      </section>
    )
  );
}
