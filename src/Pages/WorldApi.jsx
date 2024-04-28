import { useEffect, useState } from "react";
import axios from "axios";
import { WORLD_API_BASE_URL, WORLD_API_KEY } from "../config";
import Card from "../components/Card";
import DropDownMenu from "../components/DropDownMenu";
import { useScreenDetector } from "../hooks/useScreenDetector";
import WorldSearchForm from "../components/WorldSearchForm";

const WorldApi = () => {
  const defaultValues = {
    text: "tesla",
    earliestPublishDate: "2023-04-22",
    newsSources: "",
    authors: "",
  };
  const [data, setData] = useState([]);
  const [form, setForm] = useState(defaultValues);
  const { isMobile } = useScreenDetector();
  const getData = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) {
        delete params[key];
      }
    });
    axios
      .get(`${WORLD_API_BASE_URL}?language=en`, {
        headers: { "x-api-key": WORLD_API_KEY },
        params: {
          ...params,
          "earliest-publish-date": params.earliestPublishDate,
          "news-sources": params.newsSources,
        },
      })
      .then((res) => {
        if (form.author) {
          let filter = res.data.news.filter(
            (item) => item.author === form.author
          );
          setData(filter);
        } else setData(res.data.news);
      })
      .catch((err) => console.log(err));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getData(form);
  };
  useEffect(() => {
    getData(form);
  }, []);
  return (
    <div className="App">
      <div className="md:container md:mx-auto mx-2 my-10 gap-6">
        {isMobile ? (
          <DropDownMenu>
            <WorldSearchForm
              form={form}
              setForm={setForm}
              submitHandler={submitHandler}
              getData={getData}
              defaultValues={defaultValues}
              data={data}
            />
          </DropDownMenu>
        ) : (
          <WorldSearchForm
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
              title={item.title}
              url={item.url}
              urlToImage={item.image}
              publishedAt={item.publish_date}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldApi;
