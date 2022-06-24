import React from "react";
interface IAutoCompleteSuggestions {
  suggestions: string[];
  suggestionIndex: number;
  handleClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  value: string;
}
export const AutoCompleteSuggestions: React.FC<IAutoCompleteSuggestions> = ({
  suggestions,
  suggestionIndex,
  handleClick,
  value,
}) => {
  return (
    <div className="container">
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => {
          let endString = suggestion.substr(
            suggestion.toLowerCase().indexOf(value.toLowerCase()) + value.length
          );

          let highlightedText = suggestion.substr(
            suggestion.toLowerCase().indexOf(value.toLowerCase()),
            value.length
          );

          return (
            <li
              className={index === suggestionIndex ? "active" : ""}
              key={index}
              onClick={(e) => handleClick(e)}
              style={{ listStyle: "none" }}
            >
              <span style={{ fontWeight: "bold" }}>{highlightedText}</span>
              {endString}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
