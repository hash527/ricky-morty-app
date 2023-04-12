import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CharacterList from "./_CharacterList";

//defining outside to prevent rerender
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CharacterList />
    </QueryClientProvider>
  );
}
