import React, { useState } from "react";
import { AutoCompleteSuggestions } from "./AutoCompleteSuggstions";
interface IAutoComplete {
  data: string[];
}
export const AutoComplete: React.FC<IAutoComplete> = ({ data: countries }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>(countries);
  const [suggestionIndex, setSuggestionIndex] = useState<number>(-1);
  const [suggestionsActive, setSuggestionsActive] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      const filterSuggestions = countries.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(query)
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const input = event.target as HTMLElement;
    setSuggestions([]);
    setSearchValue(input.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    } else if (e.key === "ArrowDown") {
      if (suggestionIndex + 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    } else if (e.key === "Enter") {
      if (suggestionIndex === -1) return;
      setSearchValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(searchValue);
      }}
    >
      <div className="autocomplete">
        <input
          id="myInput"
          type="text"
          name="myCountry"
          placeholder="Country"
          value={searchValue}
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <input type="submit" />
      </div>

      {suggestionsActive && (
        <AutoCompleteSuggestions
          suggestions={suggestions}
          suggestionIndex={suggestionIndex}
          handleClick={handleClick}
          value={searchValue}
        />
      )}
    </form>
  );
};
