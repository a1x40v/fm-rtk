import { useMemo } from 'react';
import { useGetItemsQuery } from './services/api-service';

function App() {
  const { data, isLoading } = useGetItemsQuery();

  const items = useMemo(() => data?.items || [], [data]);

  return (
    <div className="App">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
