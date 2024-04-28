import { useEffect, useState } from "react";
import axios from "axios";
import { NEWS_API_API_KEY, NEWS_API_BASE_URL } from "../config";
import Card from "../components/Card";
import DropDownMenu from "../components/DropDownMenu";
import { useScreenDetector } from "../hooks/useScreenDetector";
import SearchForm from "../components/SearchForm";

const NewsApi = () => {
  const defaultValues = {
    q: "tesla",
    from: "2024-03-30",
    sortBy: "publishedAt",
    sources: "",
    author: "",
  };
  const [data, setData] = useState([]);
  const [form, setForm] = useState(defaultValues);
  const { isMobile } = useScreenDetector();
  const getData = (params) => {
    axios
      .get(`${NEWS_API_BASE_URL}/everything?apiKey=${NEWS_API_API_KEY}`, {
        params,
      })
      .then((res) => {
        if (form.author) {
          let filter = res.data.articles.filter(
            (item) => item.author === form.author
          );
          setData(filter);
        } else setData(res.data.articles);
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
            <SearchForm
              form={form}
              setForm={setForm}
              submitHandler={submitHandler}
              getData={getData}
              defaultValues={defaultValues}
              data={data}
            />
          </DropDownMenu>
        ) : (
          <SearchForm
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
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsApi;
