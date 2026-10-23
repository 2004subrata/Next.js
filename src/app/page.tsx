// server component by default
// fetch data inside a server component
// access backend resources directly
// kepp sensitive info int the server side 
// not to be exposed on the client side

// can not
// use hooks -> not possible
// add event 

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is our home page at root route/ route lavel</h1>
    </div>
  );
}
