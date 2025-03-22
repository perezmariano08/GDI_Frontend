import Routes from "./routes/Routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/mira/theme.css";

function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
               <Routes />
            </PrimeReactProvider>
         </QueryClientProvider>
      </>
   )
}

export default App
