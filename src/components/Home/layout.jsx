export const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
  
        <main className="flex-1 pt-[175px]"> 
          {children}
        </main>
      </div>
    );
  };