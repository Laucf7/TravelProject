import { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const SearchComponent: React.FC<{ items: Item[] }> = ({ items }) => {
  const [query, setQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
SearchComponent