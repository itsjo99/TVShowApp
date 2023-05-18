import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };
  const submit2 = () => {
    const input = document.getElementById("one");
    if (input.value.trim() !== "") {
      onSubmit(input.value);
      setValue("");
    }
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} onClick={submit2} />
      <input
        id="one"
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder="Search a TV show you may like"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
