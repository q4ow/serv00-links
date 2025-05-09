import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { LinksPage } from '@/pages/LinksPage';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background text-foreground">
        {/* <Header /> */}
        <main>
          <LinksPage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;