import React from "react";

const SearchForm = ({
  form,
  setForm,
  submitHandler,
  getData,
  defaultValues,
  data,
}) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-5 md:justify-items-center gap-4 my-10 items-center"
      onSubmit={submitHandler}
    >
      <div className="flex gap-1 items-center">
        <label>Source:</label>
        <select
          name="sources"
          id="source"
          className="border rounded p-1 md:w-auto w-full"
          value={form?.sources}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        >
          {data?.map((item) => (
            <option value={item?.source?.id}>{item?.source?.name}</option>
          ))}
        </select>
      </div>
      {/* <div className="flex gap-1 items-center">
        <label>Category:</label>
        <input
          name="category"
          type="text"
          className="border rounded p-1 md:w-auto w-full"
          value={form.category}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div> */}
      <div className="flex gap-1 items-center">
        <label>title:</label>
        <input
          name="q"
          type="text"
          className="border rounded p-1 md:w-auto w-full"
          value={form.q}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex gap-1 items-center">
        <label>author:</label>
        <input
          name="author"
          type="text"
          className="border rounded p-1 md:w-auto w-full"
          value={form.author}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex gap-1 items-center">
        <label>Start Date:</label>
        <input
          name="from"
          type="date"
          className="border rounded p-1 md:w-auto w-full"
          value={form.from}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex gap-2 self-start w-full">
        <button
          className="border rounded py-1 px-3 cursor-pointer bg-slate-300"
          type="submit"
        >
          Submit
        </button>
        <button
          className="border rounded py-1 px-3 cursor-pointer bg-slate-100"
          type="reset"
          onClick={() => {
            setForm(defaultValues);
            getData(defaultValues);
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
