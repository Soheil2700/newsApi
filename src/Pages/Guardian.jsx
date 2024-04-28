import React, { useEffect, useState } from "react";
import { useScreenDetector } from "../hooks/useScreenDetector";
import axios from "axios";
import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL } from "../config";
import DropDownMenu from "../components/DropDownMenu";
import Card from "../components/Card";
import GSearchForm from "../components/GSearchForm";

const Guardian = () => {
  const defaultValues = {
    q: "tesla",
    fromDate: "2024-03-30",
  };
  const [data, setData] = useState([]);
  const [form, setForm] = useState(defaultValues);
  const { isMobile } = useScreenDetector();
  const getData = (params) => {
    axios
      .get(`${GUARDIAN_BASE_URL}search?api-key=${GUARDIAN_API_KEY}`, {
        params: {
          ...params,
          "from-date": params.fromDate,
        },
      })
      .then((res) => {
        setData(res.data.response.results);
      })
      .catch((err) => console.log(err));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getData(form);
  };
  useEffect(() => {
    const controller = new AbortController();
    getData(form);
    return () => controller.abort();
  }, []);
  return (
    <div className="App">
      <div className="md:container md:mx-auto mx-2 my-10 gap-6">
        {isMobile ? (
          <DropDownMenu>
            <GSearchForm
              form={form}
              setForm={setForm}
              submitHandler={submitHandler}
              getData={getData}
              defaultValues={defaultValues}
              data={data}
            />
          </DropDownMenu>
        ) : (
          <GSearchForm
            form={form}
            setForm={setForm}
            submitHandler={submitHandler}
            getData={getData}
            defaultValues={defaultValues}
            data={data}
          />
        )}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.webTitle}
              url={item.webUrl}
              publishedAt={item.webPublicationDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guardian;
