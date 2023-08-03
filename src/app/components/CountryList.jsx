"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const c = await res.json();

      setCountries(c);
      setFilteredCountries(c);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    setFilteredCountries(filtered);
  }, [search]);

  const filterCountries = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="flex flex-col gap-6">
      <input
        value={search}
        type="search"
        className="md:w-72 px-4 py-2 rounded-full outline-none bg-slate-400 placeholder:text-slate-900"
        placeholder="Search..."
        onChange={(e) => filterCountries(e)}
      />
      <h3 className="text-slate-200 font-bold text-3xl">Country List</h3>
      <div className="grid grid-cols-1 gap-5 justify-between md:grid-cols-5">
        {filteredCountries &&
          filteredCountries.map((c, key) => {
            return (
              <m.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                key={key}
                className="bg-gradient-to-t from-slate-500 to-slate-400 h-72 rounded-lg flex flex-col px-4 py-8 items-center justify-between shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Image
                  src={c.flags.svg}
                  width={72}
                  height={72}
                  alt={`c.name.common`}
                  className="shadow-lg rounded-full h-14 w-14 "
                />

                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-center text-slate-900">
                    {c.name.common}
                  </h3>
                  <div className="text-slate-900">{c.region}</div>
                  <div className="text-slate-900">{c.capital}</div>
                </div>

                <Link
                  href={`country/${c.ccn3}`}
                  className="bg-slate-800 text-slate-100 py-1 px-6 rounded-2xl text-sm hover:bg-slate-700"
                >
                  View More
                </Link>
              </m.div>
            );
          })}
      </div>
    </section>
  );
};

export default CountryList;
