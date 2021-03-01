import React from 'react';
import "./EntryForm.css";

const EntryForm = () => {
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
        {/* General Category */}
        <label htmlFor="entryCategoryGeneral">Category</label>
        <input type="text" id="entryCategoryGeneral" list="categoriesGeneral" autoComplete="on"></input>
        <datalist id="categoriesGeneral">
          <option value="wine"></option>
          <option value="beer"></option>
          <option value="liquor"></option>
        </datalist>
        {/* specific category */}
        <label hidden={true} htmlFor="entryCategorySpecific">Specific Category</label>
        <input type="text" id="entryCategorySpecific" hidden={true} list="" autoComplete="on"></input>
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
        {/* region */}
        <label htmlFor="entryRegion">Region</label>
        <input type="text" id="entryRegion"></input>
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
        {/* brand */}
        <label htmlFor="entryBrand">Brand</label>
        <input type="text" id="entryBrand"></input>
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