import React from 'react';
import "./EntryForm.css";

const EntryForm = () => {
  const specifics = {
    Wine: ["Red", "Pink", "White", "Champagne", "Sparkling", "Dessert", "Specialty", "Sake", "Spritzer", "Variety Pack"],
    Beer: ["Ale", "IPA", "Lager", "Specialty/Alternatives", "Sour/Wild Ale", "Cider", "Stout", "Belgian-Style Ale", "Pale Ale", "Wheat Ale", "Pale Lager", "Pilsner", "Hard Seltzer", "Porter", "Golden/Blonde Ale", "Amber/Red Ale", "Seasonal", "Strong Ale", "Variety Pack", "Fruit", "Brown Ale", "Dark Lager", "Malt Liquor", "Kölsch", "Spice/Herb/Vegetable", "Amber/Vienna Lager", "Bock", "Hard Kombucha", "Cream Ale", "Hard Iced Tea", "Hard Soda", "Non-Alcoholic", "Hard Lemonade", "Perry", "Rye", "Smoked/Rauchbier", "Kellerbier/Zwickelbier", "California Common/Steam", "Chili", "Honey"],
    Liquor: ["Whiskey", "Vodka", "Liqueur/Cordials/Schnapps", "Tequila", "Rum", "Ready-To-Drink", "Brandy", "Gin", "Mezcal", "Absinthe", "Soju", "Grain Alcohol", "Shochu", "Cachaça", "Non-Alcoholic Spirits"]
  };

  const showSpecific = (e) => {
    console.log(e.target.value);
    const category = e.target.value;
    if (document.getElementById("entryCategorySpecific")) {
      document.getElementById("entryCategorySpecific").remove();
    }
    
    const dropdown = document.createElement("select");
    dropdown.setAttribute("defaultValue", "select");
    const defaultOption = document.createElement("option");
    defaultOption.innerText = "select";
    dropdown.appendChild(defaultOption);
    dropdown.setAttribute("id", "entryCategorySpecific");
    defaultOption.setAttribute("disabled", true);
    
    specifics[category].forEach((item) => {
      const entry = document.createElement("option");
      entry.setAttribute("value", item);
      entry.innerText = item;
      dropdown.appendChild(entry);
    })
    document.getElementById("categories").appendChild(dropdown);
  };

  const newOption = () => {

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
        <input type="number" id="entryABVWhole" min="0" max="95" step="1"></input>
        {/* ABV decimal */}
        <label htmlFor="entryABVDecimal">.</label>
        <input type="number" id="entryABVDecimal" min="0" max="9" step="1"></input>
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
        <label hidden={true} htmlFor="entryCategorySpecific">Specific Category</label>
        <input type="select" id="entryCategorySpecific" hidden={true} list="" autoComplete="on"></input>
        <datalist id="categoriesWine">
          <option value="Red"></option>
          <option value="Pink"></option>
          <option value="White"></option>
          <option value="Champagne"></option>
          <option value="Sparkling"></option>
          <option value="Dessert"></option>
          <option value="Specialty"></option>
          <option value="Sake"></option>
          <option value="Spritzer"></option>
          <option value="Variety Pack"></option>
        </datalist>
        <datalist id="categoriesBeer">
          <option value="Ale"></option>
          <option value="IPA"></option>
          <option value="Lager"></option>
          <option value="Specialty/Alternatives"></option>
          <option value="Sour/Wild Ale"></option>
          <option value="Cider"></option>
          <option value="Stout"></option>
          <option value="Belgian-Style Ale"></option>
          <option value="Pale Ale"></option>
          <option value="Wheat Ale"></option>
          <option value="Pale Lager"></option>
          <option value="Pilsner"></option>
          <option value="Hard Seltzer"></option>
          <option value="Porter"></option>
          <option value="Golden/Blonde Ale"></option>
          <option value="Amber/Red Ale"></option>
          <option value="Seasonal"></option>
          <option value="Strong Ale"></option>
          <option value="Variety Pack"></option>
          <option value="Fruit"></option>
          <option value="Brown Ale"></option>
          <option value="Dark Lager"></option>
          <option value="Malt Liquor"></option>
          <option value="Kölsch"></option>
          <option value="Spice/Herb/Vegetable"></option>
          <option value="Amber/Vienna Lager"></option>
          <option value="Bock"></option>
          <option value="Hard Kombucha"></option>
          <option value="Cream Ale"></option>
          <option value="Hard Iced Tea"></option>
          <option value="Hard Soda"></option>
          <option value="Non-Alcoholic"></option>
          <option value="Hard Lemonade"></option>
          <option value="Perry"></option>
          <option value="Rye"></option>
          <option value="Smoked/Rauchbier"></option>
          <option value="Kellerbier/Zwickelbier"></option>
          <option value="California Common/Steam"></option>
          <option value="Chili"></option>
          <option value="Honey"></option>
        </datalist>
        <datalist id="categoriesLiquor">
          <option value="Whiskey"></option>
          <option value="Vodka"></option>
          <option value="Liqueur/Cordials/Schnapps"></option>
          <option value="Tequila"></option>
          <option value="Rum"></option>
          <option value="Ready-To-Drink"></option>
          <option value="Brandy"></option>
          <option value="Gin"></option>
          <option value="Mezcal"></option>
          <option value="Absinthe"></option>
          <option value="Soju"></option>
          <option value="Grain Alcohol"></option>
          <option value="Shochu"></option>
          <option value="Cachaça"></option>
          <option value="Non-Alcoholic Spirits"></option>
        </datalist>
        <br />
        {/* options - have option to add more entries */}
        {/* volume */}
        <label htmlFor="entryVolume">Volume</label>
        <input type="number" id="entryVolume"></input>
        <br />
        {/* price, dollars */}
        <label htmlFor="entryCostDollar">$</label>
        <input type="number" min="0" id="entryCostDollar"></input>
        {/* price, cents */}
        <label htmlFor="entryCostCent"></label>
        <input type="number" min="0" max="99" id="entryCostCent"></input>
        <br />
        <button onClick={newOption}>new option</button>
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
        <input type="text" id="entryDescription"></input>
        <br />
        {/* image */}
        <label htmlFor="entryImage">Image</label>
        <input type="text" id="entryImage"></input>
      </form>
    </>
  )
};

export default EntryForm;