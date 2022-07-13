// components
import { TestPage } from 'pages/Test'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestPage />
    </QueryClientProvider>
  )
}

export default App
