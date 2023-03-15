import React, { useState, useEffect } from "react";
import { database } from "./firebase";
import checklistData from "./checklist";
import "./styles.css";

const App = () => {
  const [checklistItems, setChecklistItems] = useState(
    checklistData.map((item) => ({ ...item, checked: false }))
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref("checklist").once("value");
        const data = snapshot.val();
        if (data) {
          setChecklistItems(
            checklistData.map((section, sectionIndex) => ({
              ...section,
              items: section.items.map((item, itemIndex) => ({
                ...item,
                checked: data[sectionIndex]?.items[itemIndex]?.checked || false
              }))
            }))
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCheck = (sectionIndex, itemIndex) => {
    const newChecklistItems = [...checklistItems];
    newChecklistItems[sectionIndex].items[
      itemIndex
    ].checked = !newChecklistItems[sectionIndex].items[itemIndex].checked;
    setChecklistItems(newChecklistItems);

    // Update the checked status in Firebase
    database.ref(`checklist/${sectionIndex}/items/${itemIndex}`).set({
      checked: newChecklistItems[sectionIndex].items[itemIndex].checked
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Skiplagged Flight Search Market Domination Checklist</h1>
      {checklistItems.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(sectionIndex, itemIndex)}
                />

                <label
                  className={item.checked ? "checked" : "unchecked"}
                  htmlFor={`${section.title}-${itemIndex}`}
                >
                  {item.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
