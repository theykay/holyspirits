import React from 'react';
import "./EntryForm.css";

const EntryForm = () => {
  const specifics = {
    Wine: ["Red", "Pink", "White", "Champagne", "Sparkling", "Dessert", "Specialty", "Sake", "Spritzer", "Variety Pack"],
    Beer: ["Ale", "IPA", "Lager", "Specialty/Alternatives", "Sour/Wild Ale", "Cider", "Stout", "Belgian-Style Ale", "Pale Ale", "Wheat Ale", "Pale Lager", "Pilsner", "Hard Seltzer", "Porter", "Golden/Blonde Ale", "Amber/Red Ale", "Seasonal", "Strong Ale", "Variety Pack", "Fruit", "Brown Ale", "Dark Lager", "Malt Liquor", "Kölsch", "Spice/Herb/Vegetable", "Amber/Vienna Lager", "Bock", "Hard Kombucha", "Cream Ale", "Hard Iced Tea", "Hard Soda", "Non-Alcoholic", "Hard Lemonade", "Perry", "Rye", "Smoked/Rauchbier", "Kellerbier/Zwickelbier", "California Common/Steam", "Chili", "Honey"],
    Liquor: ["Whiskey", "Vodka", "Liqueur/Cordials/Schnapps", "Tequila", "Rum", "Ready-To-Drink", "Brandy", "Gin", "Mezcal", "Absinthe", "Soju", "Grain Alcohol", "Shochu", "Cachaça", "Non-Alcoholic Spirits"]
  };

  const showSpecific = (e) => {
    const category = e.target.value;
    if (document.getElementById("entryCategorySpecific")) {
      document.getElementById("entryCategorySpecific").remove();
    }
    
    const dropdown = document.createElement("select");
    dropdown.setAttribute("defaultValue", "select");
    dropdown.setAttribute("id", "entryCategorySpecific");
    const defaultOption = document.createElement("option");
    defaultOption.innerText = "select";
    dropdown.appendChild(defaultOption);
    defaultOption.setAttribute("disabled", true);
    
    specifics[category].forEach((item) => {
      const entry = document.createElement("option");
      entry.setAttribute("value", item);
      entry.innerText = item;
      dropdown.appendChild(entry);
    })
    document.getElementById("categories").appendChild(dropdown);
  };

  const deleteEntry = (e) => {
    // e.preventDefault();
    console.log("hello");
  }
  
  const newOption = (e) => {
    e.preventDefault();
    const parentDiv = document.getElementById("options");
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "optionDiv");
    const newLabel = document.createElement("label");
    newLabel.innerText = "volume:";
    childDiv.appendChild(newLabel);
    const newText = document.createElement("input");
    newText.setAttribute("type", "text");
    newText.setAttribute("class", "option");
    childDiv.appendChild(newText);
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "-"
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.setAttribute("type", "button");
    removeBtn.onClick = deleteEntry;
    childDiv.appendChild(removeBtn);
    parentDiv.appendChild(childDiv);
  };

  return (
    <>
      <form>
        {/* name */}
        <label htmlFor="entryName">Name</label>
        <input type="text" id="entryName"></input>
        <br />
        {/* ABV whole number */}
        <label htmlFor="entryABVWhole">ABV</label>
        <input type="text" id="entryABV"></input>
        {/* ABV decimal
        <label htmlFor="entryABVDecimal">.</label>
        <input type="number" id="entryABVDecimal" min="0" max="9" step="1"></input> */}
        <br />
        <div id="categories">
          {/* General Category */}
          <label htmlFor="entryCategoryGeneral">Category</label>
          <select id="entryCategoryGeneral" defaultValue="select" onChange={showSpecific}>
            <option disabled={true} value="select">select</option>
            <option value="Wine">Wine</option>
            <option value="Beer">Beer</option>
            <option value="Liquor">Liquor</option>
          </select>
          {/* specific category appended when general selected */}
        </div>
        {/* options - have option to add more entries */}
        {/* volume */}
        {/* <label htmlFor="entryVolume">Volume</label>
        <input disabled={true} type="text" id="entryVolume"></input> */}
        {/* price */}
        {/* <label htmlFor="entryCost">$</label>
        <input disabled={true} type="text" id="entryCost"></input> */}
        {/* <br /> */}
        <div id="options"></div>
        <button onClick={newOption}>add option</button>
        <br />
        {/* brand */}
        <label htmlFor="entryBrand">Brand</label>
        <input type="text" id="entryBrand"></input>
        <br />
        {/* region */}
        <label htmlFor="entryRegion">Region</label>
        <input type="text" id="entryRegion"></input>
        <br />
        {/* description */}
        <label htmlFor="entryDescription">Description</label>
        <textarea rows="3" id="entryDescription"></textarea>
        <br />
        {/* image */}
        <label htmlFor="entryImage">Image</label>
        <input type="text" id="entryImage"></input>
      </form>
    </>
  )
};

export default EntryForm;