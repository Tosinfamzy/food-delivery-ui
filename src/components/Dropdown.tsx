import { TextInput } from "flowbite-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "../api/axios";
import { useUser } from "../context/UserContext";

type Props = {
  users: {
    uuid: string;
    name: string;
  }[];
};

const Dropdown = ({ users }: Props) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { uuid: string; name: string }[]
  >([]);
  const { setSelectedUser } = useUser();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    // Filter suggestions based on input value
    const filtered = users.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = async (suggestion: {
    uuid: string;
    name: string;
  }) => {
    setQuery(suggestion.name);
    setFilteredSuggestions([]);
    setSelectedUser(suggestion);

    try {
      const response = await axios.get(
        `/comms/your-next-delivery/${suggestion.uuid}`
      );

      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Search Input */}
      <TextInput
        icon={FaSearch}
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
        className="w-full"
      />

      {/* Suggestions Dropdown */}
      {query && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
