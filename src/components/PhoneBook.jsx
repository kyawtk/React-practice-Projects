import { useEffect, useState } from "react";
import { phoneBookData } from "./phoneBookData";
import ContactCard from "./contactCard";
import "../styles/phoneBook.scss";
export default function PhoneBook() {
  const [text, setText] = useState("");
  const [data, setData] = useState(phoneBookData);
  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    const filteredData = phoneBookData.filter((person) =>
      person.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  }, [text]);
  return (
    <div className="phoneBook-container">
      <form action="">
        <label htmlFor="text">
          Search: <input type="text" value={text} onChange={handleChange} />
        </label>
      </form>
      <div className="card-list">
        {data.map((person) => {
          return <ContactCard {...person} key={person.name}></ContactCard>;
        })}
      </div>
    </div>
  );
}
